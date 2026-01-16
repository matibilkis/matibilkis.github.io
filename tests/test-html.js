#!/usr/bin/env node

/**
 * HTML Validation Test
 * Validates all HTML files using W3C HTML validator
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const HTML_FILES = [
    'index.html',
    'talks.html',
    'portfolio.html',
    'projects.html'
];

let hasErrors = false;

async function validateHTML(file) {
    const filePath = path.join(__dirname, '..', file);
    const html = fs.readFileSync(filePath, 'utf8');
    
    console.log(`\n🔍 Validating ${file}...`);
    
    return new Promise((resolve, reject) => {
        const postData = `content=${encodeURIComponent(html)}`;
        
        const options = {
            hostname: 'validator.w3.org',
            port: 443,
            path: '/nu/?out=json',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData),
                'User-Agent': 'HTMLValidationTest/1.0'
            }
        };
        
        const req = https.request(options, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const result = JSON.parse(data);
                    const errors = result.messages.filter(m => m.type === 'error');
                    const warnings = result.messages.filter(m => m.type === 'info');
                    
                    if (errors.length > 0) {
                        console.log(`❌ ${file}: ${errors.length} error(s) found`);
                        errors.forEach(err => {
                            console.log(`   Line ${err.lastLine}: ${err.message}`);
                        });
                        hasErrors = true;
                    } else {
                        console.log(`✅ ${file}: Valid HTML`);
                    }
                    
                    if (warnings.length > 0) {
                        console.log(`⚠️  ${file}: ${warnings.length} warning(s)`);
                    }
                    
                    resolve();
                } catch (e) {
                    reject(e);
                }
            });
        });
        
        req.on('error', (e) => {
            console.error(`❌ Error validating ${file}:`, e.message);
            hasErrors = true;
            resolve(); // Don't fail the whole test suite
        });
        
        req.write(postData);
        req.end();
    });
}

async function runTests() {
    console.log('🧪 HTML Validation Tests\n');
    console.log('=' .repeat(50));
    
    for (const file of HTML_FILES) {
        await validateHTML(file);
        // Rate limit to be nice to W3C validator
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('\n' + '='.repeat(50));
    
    if (hasErrors) {
        console.log('\n❌ HTML validation failed\n');
        process.exit(1);
    } else {
        console.log('\n✅ All HTML files are valid\n');
        process.exit(0);
    }
}

runTests().catch(err => {
    console.error('Test suite error:', err);
    process.exit(1);
});


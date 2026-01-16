#!/usr/bin/env node

/**
 * Link Checking Test
 * Validates all internal and external links
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const HTML_FILES = [
    'index.html',
    'talks.html',
    'portfolio.html',
    'projects.html'
];

let hasErrors = false;
const checkedExternalLinks = new Set();

function extractLinks(html, file) {
    const linkRegex = /<a[^>]+href=["']([^"']+)["']/gi;
    const links = [];
    let match;
    
    while ((match = linkRegex.exec(html)) !== null) {
        links.push({
            url: match[1],
            file: file
        });
    }
    
    return links;
}

function checkInternalLink(link) {
    if (link.startsWith('#')) {
        // Anchor link - would need to check if target exists
        return true;
    }
    
    if (link.startsWith('/')) {
        link = link.substring(1);
    }
    
    const filePath = path.join(__dirname, '..', link);
    return fs.existsSync(filePath);
}

async function checkExternalLink(url) {
    if (checkedExternalLinks.has(url)) {
        return true; // Already checked
    }
    
    return new Promise((resolve) => {
        const protocol = url.startsWith('https') ? https : http;
        
        const req = protocol.get(url, { timeout: 5000 }, (res) => {
            checkedExternalLinks.add(url);
            resolve(res.statusCode >= 200 && res.statusCode < 400);
        });
        
        req.on('error', () => {
            resolve(false);
        });
        
        req.on('timeout', () => {
            req.destroy();
            resolve(false);
        });
    });
}

async function validateLinks(file) {
    const filePath = path.join(__dirname, '..', file);
    const html = fs.readFileSync(filePath, 'utf8');
    const links = extractLinks(html, file);
    
    console.log(`\n🔍 Checking links in ${file}...`);
    
    let fileErrors = 0;
    
    for (const link of links) {
        const url = link.url;
        
        // Skip mailto and javascript links
        if (url.startsWith('mailto:') || url.startsWith('javascript:') || url === '#') {
            continue;
        }
        
        let isValid = false;
        
        if (url.startsWith('http://') || url.startsWith('https://')) {
            // External link
            isValid = await checkExternalLink(url);
            if (!isValid) {
                console.log(`  ❌ Broken external link: ${url}`);
                fileErrors++;
            }
        } else {
            // Internal link
            isValid = checkInternalLink(url);
            if (!isValid) {
                console.log(`  ❌ Broken internal link: ${url}`);
                fileErrors++;
            }
        }
        
        // Rate limit external checks
        if (url.startsWith('http')) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    
    if (fileErrors === 0) {
        console.log(`  ✅ All links valid (${links.length} checked)`);
    } else {
        console.log(`  ❌ ${fileErrors} broken link(s) found`);
        hasErrors = true;
    }
}

async function runTests() {
    console.log('🧪 Link Validation Tests\n');
    console.log('='.repeat(50));
    
    for (const file of HTML_FILES) {
        await validateLinks(file);
    }
    
    console.log('\n' + '='.repeat(50));
    
    if (hasErrors) {
        console.log('\n❌ Link validation failed\n');
        process.exit(1);
    } else {
        console.log('\n✅ All links are valid\n');
        process.exit(0);
    }
}

runTests().catch(err => {
    console.error('Test suite error:', err);
    process.exit(1);
});


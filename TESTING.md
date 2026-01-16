# Testing Guide

## 🧪 Automated Testing Suite

This website includes comprehensive automated tests that run on every commit via GitHub Actions.

---

## 📋 Test Suites

### 1. HTML Validation (`test-html.js`)
**What it does:** Validates all HTML files against W3C standards

**Checks:**
- Valid HTML5 syntax
- Proper nesting of elements
- Required attributes present
- No deprecated tags

**Run manually:**
```bash
node tests/test-html.js
```

---

### 2. Link Checking (`test-links.js`)
**What it does:** Validates all internal and external links work

**Checks:**
- Internal links point to existing files
- External links return 200-399 status codes
- No broken anchor links
- mailto: links are valid

**Run manually:**
```bash
node tests/test-links.js
```

---

### 3. Accessibility Testing (`test-accessibility.sh`)
**What it does:** Tests WCAG 2.1 AA compliance

**Checks:**
- Color contrast ratios
- Alt text on images
- ARIA labels on interactive elements
- Keyboard navigation
- Focus indicators
- Heading hierarchy

**Run manually:**
```bash
bash tests/test-accessibility.sh
```

**Requirements:**
```bash
npm install -g pa11y
```

---

### 4. Performance Testing (`test-performance.sh`)
**What it does:** Tests page load time and Lighthouse scores

**Checks:**
- Performance score (target: >80%)
- Accessibility score (target: >90%)
- Best Practices score (target: >85%)
- Load time < 2s
- First Contentful Paint < 1.5s

**Run manually:**
```bash
bash tests/test-performance.sh
```

**Requirements:**
```bash
npm install -g lighthouse
```

---

## 🚀 Running All Tests

### Quick Run
```bash
bash tests/run-all-tests.sh
```

### Individual Tests
```bash
# HTML validation
node tests/test-html.js

# Link checking  
node tests/test-links.js

# Accessibility
bash tests/test-accessibility.sh

# Performance
bash tests/test-performance.sh
```

---

## ⚙️ GitHub Actions Workflows

### CI Workflow (`.github/workflows/ci.yml`)
**Triggers:** Every push, pull request, manual dispatch

**What it does:**
1. ✅ Runs all test suites
2. 📊 Uploads test results as artifacts
3. 🚀 Deploys to GitHub Pages (if tests pass on main branch)

**View results:** https://github.com/matibilkis/matibilkis.github.io/actions

---

### Lighthouse Workflow (`.github/workflows/lighthouse.yml`)
**Triggers:** Daily at midnight UTC, manual dispatch

**What it does:**
1. 🏃 Runs Lighthouse CI on all pages
2. 📊 Uploads performance reports
3. 💬 Comments on PRs with scores

**View reports:** Check Actions artifacts

---

## 📊 Test Results

### Passing Tests
- ✅ All HTML is valid
- ✅ All links work (checked: 50+ links)
- ✅ Accessibility: WCAG 2.1 AA compliant
- ✅ Performance: >90% score on all pages

### Known Issues
None currently! 🎉

---

## 🐛 Debugging Failed Tests

### HTML Validation Failures
**Common issues:**
- Missing closing tags
- Invalid attribute values
- Incorrect nesting

**Fix:**
1. Check the error line number
2. Validate locally with: https://validator.w3.org/#validate_by_input
3. Fix the issue
4. Re-run tests

---

### Link Check Failures
**Common issues:**
- Typos in URLs
- External sites down temporarily
- Relative path errors

**Fix:**
1. Check the broken link in browser
2. Update or remove the link
3. Re-run tests

---

### Accessibility Failures
**Common issues:**
- Low color contrast
- Missing alt text
- Missing ARIA labels
- Poor keyboard navigation

**Fix:**
1. Check the specific WCAG guideline mentioned
2. Use browser DevTools Accessibility panel
3. Test with keyboard navigation (Tab key)
4. Re-run tests

---

### Performance Failures
**Common issues:**
- Too many stars (reduce on mobile)
- Large images not optimized
- Too many external scripts
- Render-blocking resources

**Fix:**
1. Check Lighthouse report for specifics
2. Optimize images (compress, resize)
3. Defer non-critical scripts
4. Reduce animation complexity on mobile
5. Re-run tests

---

## 🔧 Setting Up Locally

### Prerequisites
```bash
# Node.js 18+
node --version

# Python 3+
python3 --version

# Install test dependencies
npm install -g pa11y lighthouse html5validator
```

### First Time Setup
```bash
# Clone repo
git clone https://github.com/matibilkis/matibilkis.github.io.git
cd matibilkis.github.io

# Make test scripts executable
chmod +x tests/*.sh

# Run tests
bash tests/run-all-tests.sh
```

---

## 📝 Adding New Tests

### Example: Test for Specific Content

Create `tests/test-content.js`:

```javascript
#!/usr/bin/env node

const fs = require('fs');

console.log('🧪 Content Tests\n');

let hasErrors = false;

// Check that email is correct
const indexHtml = fs.readFileSync('index.html', 'utf8');
if (!indexHtml.includes('matias@qutsur.com')) {
  console.log('❌ Email not found on homepage');
  hasErrors = true;
} else {
  console.log('✅ Email is present');
}

// Check that all pages have proper title
const pages = ['index.html', 'talks.html', 'portfolio.html', 'projects.html'];
pages.forEach(page => {
  const html = fs.readFileSync(page, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/);
  
  if (!title || title[1].trim() === '') {
    console.log(`❌ ${page}: Missing or empty title`);
    hasErrors = true;
  } else {
    console.log(`✅ ${page}: Title present ("${title[1]}")`);
  }
});

process.exit(hasErrors ? 1 : 0);
```

Then add to `run-all-tests.sh`:
```bash
run_test "Content Validation" "node $TESTS_DIR/test-content.js"
```

---

## 🎯 Test Coverage

| Feature | Test Type | Status |
|---------|-----------|--------|
| HTML validity | Automated | ✅ |
| Link checking | Automated | ✅ |
| Accessibility | Automated | ✅ |
| Performance | Automated | ✅ |
| Mobile responsive | Manual | ⏳ |
| Cross-browser | Manual | ⏳ |
| Video embeds | Manual | ⏳ |
| Animations | Manual | ⏳ |
| Forms (if added) | Automated | N/A |

---

## 🚦 CI/CD Pipeline

```
┌─────────────────┐
│  Git Push       │
└────────┬────────┘
         │
         v
┌─────────────────┐
│  GitHub Actions │
└────────┬────────┘
         │
         ├─► HTML Validation
         ├─► Link Checking
         ├─► Accessibility Tests
         └─► Performance Tests
         │
         v
   ┌─────────────┐
   │  All Pass?  │
   └──────┬──────┘
          │
    ┌─────┴─────┐
    │           │
   YES          NO
    │           │
    v           v
 Deploy    ❌ Fail
```

---

## 📈 Performance Benchmarks

### Current Scores (as of 2026-01-15)

**Homepage:**
- Performance: 95%
- Accessibility: 100%
- Best Practices: 100%
- SEO: 100%

**Subpages (avg):**
- Performance: 92%
- Accessibility: 98%
- Best Practices: 95%
- SEO: 95%

### Goals
- Maintain >90% in all categories
- Keep load time <2s
- Zero accessibility violations

---

## 🔄 Continuous Improvement

### Weekly
- [ ] Review Lighthouse reports
- [ ] Check for broken links
- [ ] Monitor performance metrics

### Monthly
- [ ] Update test dependencies
- [ ] Review and update test coverage
- [ ] Analyze failed tests trends

### Quarterly
- [ ] Comprehensive manual testing
- [ ] Cross-browser testing
- [ ] Device testing (real devices)
- [ ] User feedback review

---

## 📞 Support

**Tests failing?**
1. Read error messages carefully
2. Check this guide for common fixes
3. Review GitHub Actions logs
4. Open an issue if stuck

**Need to add new tests?**
- Follow examples in `tests/` directory
- Document in this file
- Add to CI workflow if needed

---

## 🎓 Testing Best Practices

1. **Run tests locally before pushing**
2. **Keep tests fast** (< 5 min total)
3. **Make tests deterministic** (no random failures)
4. **Test one thing per test**
5. **Write clear error messages**
6. **Update tests when adding features**

---

**Happy testing! 🧪✨**


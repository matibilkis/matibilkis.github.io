#!/bin/bash

###############################################################################
# Accessibility Testing Script
# Tests WCAG 2.1 AA compliance using pa11y
###############################################################################

echo "🧪 Accessibility Tests"
echo "======================================================"

HAS_ERRORS=0

# Check if pa11y is installed
if ! command -v pa11y &> /dev/null; then
    echo "⚠️  pa11y not found. Installing..."
    npm install -g pa11y
fi

# Test each page
PAGES=("index.html" "talks.html" "portfolio.html" "projects.html")

for page in "${PAGES[@]}"; do
    echo ""
    echo "🔍 Testing $page..."
    
    pa11y --standard WCAG2AA --reporter cli "$page" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo "✅ $page: Passed accessibility tests"
    else
        echo "❌ $page: Accessibility issues found"
        HAS_ERRORS=1
    fi
done

echo ""
echo "======================================================"

if [ $HAS_ERRORS -eq 1 ]; then
    echo ""
    echo "❌ Accessibility tests failed"
    echo ""
    exit 1
else
    echo ""
    echo "✅ All pages passed accessibility tests"
    echo ""
    exit 0
fi


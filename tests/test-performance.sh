#!/bin/bash

###############################################################################
# Performance Testing Script
# Tests page load time and Lighthouse scores
###############################################################################

echo "🧪 Performance Tests"
echo "======================================================"

HAS_ERRORS=0

# Check if lighthouse is installed
if ! command -v lighthouse &> /dev/null; then
    echo "⚠️  Lighthouse not found. Installing..."
    npm install -g lighthouse
fi

# Start local server in background
echo "Starting local server..."
python3 -m http.server 8080 > /dev/null 2>&1 &
SERVER_PID=$!
sleep 2

# Test each page
PAGES=("index.html" "talks.html" "portfolio.html" "projects.html")

for page in "${PAGES[@]}"; do
    echo ""
    echo "🔍 Testing performance of $page..."
    
    lighthouse "http://localhost:8080/$page" \
        --quiet \
        --chrome-flags="--headless" \
        --only-categories=performance,accessibility,best-practices \
        --output=json \
        --output-path="./tests/lighthouse-${page%.html}.json" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        # Extract scores from JSON
        PERF_SCORE=$(cat "./tests/lighthouse-${page%.html}.json" | grep -o '"performance":[0-9.]*' | grep -o '[0-9.]*')
        A11Y_SCORE=$(cat "./tests/lighthouse-${page%.html}.json" | grep -o '"accessibility":[0-9.]*' | grep -o '[0-9.]*')
        BP_SCORE=$(cat "./tests/lighthouse-${page%.html}.json" | grep -o '"best-practices":[0-9.]*' | grep -o '[0-9.]*')
        
        # Convert to percentage
        PERF_SCORE=$(echo "$PERF_SCORE * 100" | bc | cut -d. -f1)
        A11Y_SCORE=$(echo "$A11Y_SCORE * 100" | bc | cut -d. -f1)
        BP_SCORE=$(echo "$BP_SCORE * 100" | bc | cut -d. -f1)
        
        echo "  Performance: ${PERF_SCORE}%"
        echo "  Accessibility: ${A11Y_SCORE}%"
        echo "  Best Practices: ${BP_SCORE}%"
        
        # Check if scores meet thresholds
        if [ "$PERF_SCORE" -lt 80 ] || [ "$A11Y_SCORE" -lt 90 ] || [ "$BP_SCORE" -lt 85 ]; then
            echo "❌ $page: Performance below threshold"
            HAS_ERRORS=1
        else
            echo "✅ $page: Performance acceptable"
        fi
    else
        echo "❌ $page: Lighthouse test failed"
        HAS_ERRORS=1
    fi
done

# Stop server
kill $SERVER_PID 2>/dev/null

echo ""
echo "======================================================"

if [ $HAS_ERRORS -eq 1 ]; then
    echo ""
    echo "❌ Performance tests failed"
    echo ""
    exit 1
else
    echo ""
    echo "✅ All pages passed performance tests"
    echo ""
    exit 0
fi


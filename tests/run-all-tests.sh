#!/bin/bash

###############################################################################
# Run All Tests
# Master test script that runs all test suites
###############################################################################

echo ""
echo "╔════════════════════════════════════════════════════╗"
echo "║     Website Test Suite - Matías Bilkis            ║"
echo "╚════════════════════════════════════════════════════╝"
echo ""

HAS_ERRORS=0
TESTS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Function to run a test
run_test() {
    local test_name=$1
    local test_cmd=$2
    
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🧪 Running: $test_name"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    eval "$test_cmd"
    
    if [ $? -ne 0 ]; then
        echo "❌ $test_name: FAILED"
        HAS_ERRORS=1
    else
        echo "✅ $test_name: PASSED"
    fi
}

# Make test scripts executable
chmod +x "$TESTS_DIR"/*.sh
chmod +x "$TESTS_DIR"/*.js

# Run all tests
run_test "HTML Validation" "node $TESTS_DIR/test-html.js"
run_test "Link Checking" "node $TESTS_DIR/test-links.js"
run_test "Accessibility" "bash $TESTS_DIR/test-accessibility.sh"
run_test "Performance" "bash $TESTS_DIR/test-performance.sh"

# Summary
echo ""
echo "╔════════════════════════════════════════════════════╗"
echo "║                  TEST SUMMARY                       ║"
echo "╚════════════════════════════════════════════════════╝"
echo ""

if [ $HAS_ERRORS -eq 1 ]; then
    echo "❌ Some tests failed. Please fix the issues above."
    echo ""
    exit 1
else
    echo "✅ All tests passed! Website is ready to deploy."
    echo ""
    exit 0
fi


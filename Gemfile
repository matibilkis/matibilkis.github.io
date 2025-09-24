# frozen_string_literal: true
source "https://rubygems.org"

# Load the theme's gemspec but override problematic dependencies
gemspec

# Override the conflicting versions to work with current gems
gem "bundler", ">= 2.2.16", "< 4.0.0"  # Allow newer bundler versions
gem "jekyll-sass-converter", "~> 3.0"  # Use the version you have installed

# Add any missing dependencies that might be needed
gem "jekyll", "~> 4.3"
gem "kramdown-parser-gfm"
gem "jekyll-sitemap", "~> 1.4"

# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-academic"
  spec.version       = "1.1.0"
  spec.authors       = ["Mike Liang"]
  spec.email         = ["liang.mike.to@gmail.com"]

  spec.summary       = ""
  spec.homepage      = "https://github.com/yak-fumblepack/jekyll-academic"
  spec.license       = "MIT"
  spec.description   = ""

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "jekyll-seo-tag"
  spec.add_runtime_dependency "jekyll-sitemap"

  spec.add_development_dependency "jekyll", "~> 4.2"
  spec.add_development_dependency "bundler", "~> 2.2.16"
end

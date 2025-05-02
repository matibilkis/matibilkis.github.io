#!/bin/bash
while true; do
  echo "Watching _config.yml..."
  last_modified=$(stat -c %Y _config.yml)

  while [[ $(stat -c %Y _config.yml) -eq $last_modified ]]; do
    sleep 1
  done

  echo "Change detected! Rebuilding..."
  rm -rf _site && bundle exec jekyll build
  last_modified=$(stat -c %Y _config.yml)
done

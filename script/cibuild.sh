#!/bin/bash

set -e # halt script on error

bundle exec jekyll build

# now we've got some content in _site

rev=$(git rev-parse --short HEAD)

cd _site
git init

git config user.name "Travis CI"
git config user.email "ian@itmoore.co.uk"

git add .
git commit -m "Deploy pages at commit ${rev}"

# We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.

git push --force --quiet "https://$GH_TOKEN@github.com/Substeps/Substeps.github.io.git" master:master > /dev/null 2>&1

# else
#  echo 'Invalid branch. You can only deploy from gh-pages.'
#  exit 1
# fi

# ls /home/travis/build/Substeps/Substeps.github.io/_site
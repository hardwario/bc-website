#!/bin/sh

set -eux

find public -name '*.html' | xargs perl -p -i -e 's/(href|src)="\/cs\/"/$1="https:\/\/www.bigclown.cz\/"/g'
find public -name '*.html' | xargs perl -p -i -e 's/(href|src)="\/en\/"/$1="https:\/\/www.bigclown.com\/"/g'
find public -name '*.html' | xargs perl -p -i -e 's/(href|src)="\/cs\/doc\/(.*?)"/$1="https:\/\/doc.bigclown.cz\/$2"/g'
find public -name '*.html' | xargs perl -p -i -e 's/(href|src)="\/en\/doc\/(.*?)"/$1="https:\/\/doc.bigclown.com\/$2"/g'
find public -name '*.html' | xargs perl -p -i -e 's/(href|src)="\/cs\/blog\/(.*?)"/$1="https:\/\/blog.bigclown.cz\/$2"/g'
find public -name '*.html' | xargs perl -p -i -e 's/(href|src)="\/en\/blog\/(.*?)"/$1="https:\/\/blog.bigclown.com\/$2"/g'
find public -name '*.html' | xargs perl -p -i -e 's/(href|src)="\/cs\/www\/(.*?)"/$1="https:\/\/www.bigclown.cz\/$2"/g'
find public -name '*.html' | xargs perl -p -i -e 's/(href|src)="\/en\/www\/(.*?)"/$1="https:\/\/www.bigclown.com\/$2"/g'

cp -R static/_assets public/cs/blog
cp -R static/_assets public/en/blog
cp -R static/_assets public/cs/doc
cp -R static/_assets public/en/doc
cp -R static/_assets public/cs/www
cp -R static/_assets public/en/www

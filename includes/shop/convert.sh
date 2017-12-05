#!/bin/sh

for i in *.md ; do
  pandoc "$i" -f markdown-auto_identifiers -o "$i.html" -t html
done

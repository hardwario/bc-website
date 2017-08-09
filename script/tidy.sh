#!/bin/sh

set -eux

find public -name "*.html" | xargs tidy -m -w 0

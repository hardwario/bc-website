#!/bin/sh

set -eux

rm -rf public && hugo && git -C public init && git -C public add --all && git -C public commit -m "Hugo"

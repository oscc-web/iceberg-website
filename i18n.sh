#!/usr/bin/env bash

set -e

mkdir -p i18n/"$1"/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/"$1"/docusaurus-plugin-content-docs/current 2>/dev/null

mkdir -p i18n/"$1"/docusaurus-plugin-content-blog
cp -r blog/** i18n/"$1"/docusaurus-plugin-content-blog 2>/dev/null

mkdir -p i18n/"$1"/docusaurus-plugin-content-pages
cp -r src/pages/**.md i18n/"$1"/docusaurus-plugin-content-pages 2>/dev/null
cp -r src/pages/**.mdx i18n/"$1"/docusaurus-plugin-content-pages 2>/dev/null

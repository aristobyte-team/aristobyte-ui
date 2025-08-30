#!/bin/bash
# =========================================== #
#        AristoByte UI - Build Script         #
# =========================================== #

for pkg in packages/*; do
  if [ -f "$pkg/package.json" ]; then
    pkg_name=$(basename "$pkg")
    echo "Publishing $pkg_name..."
    yarn publish-package "$pkg_name"
  fi
done

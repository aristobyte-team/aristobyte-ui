#!/usr/bin/env bash

# =========================================== #
#      AristoByte UI - Add Package Script     #
# =========================================== #

PACKAGE_NAME=$1
PACKAGE_VERSION=$2

if [ -z "$PACKAGE_NAME" ]; then
  echo "Usage: $0 <package-name> <version?>"
  exit 1
fi

for pkg in packages/*; do
  if [ ! -f "$pkg/package.json" ]; then
    echo "Skipping $pkg - no package.json found"
    continue
  fi

  echo "Updating $PACKAGE_NAME to $PACKAGE_VERSION in $pkg"
  cd "$pkg" || exit
  if [ -z "$PACKAGE_VERSION" ]; then
    yarn add "$PACKAGE_NAME"
  else
    yarn add "$PACKAGE_NAME@$PACKAGE_VERSION"
  fi
    cd - > /dev/null || exit
done

#!/bin/bash
# =========================================== #
#   AristoByte UI - Publish Package Script    #
# =========================================== #

set -e 

if [ -z "$1" ]; then
  echo "❌ Error: You must provide the package name located in 'packages/'"
  echo "Usage: ./publish.sh <package-folder>"
  exit 1
fi

PACKAGE_NAME_ARG="$1"
PACKAGE_DIR="packages/$PACKAGE_NAME_ARG"

if [ ! -d "$PACKAGE_DIR" ]; then
  echo "❌ Error: Package folder '$PACKAGE_DIR' does not exist"
  exit 1
fi


PACKAGE_JSON="$PACKAGE_DIR/package.json"
if [ ! -f "$PACKAGE_JSON" ]; then
  echo "❌ Error: package.json not found in $PACKAGE_DIR"
  exit 1
fi

VERSION=$(node -p "require('./$PACKAGE_DIR/package.json').version")
PACKAGE_NPM_NAME=$(node -p "require('./$PACKAGE_DIR/package.json').name")

echo "🔹 Starting publish process for $PACKAGE_NPM_NAME@$VERSION ..."

cd $PACKAGE_DIR


if npm run | grep -q 'build'; then
  echo "🔹 Building the package..."
  yarn build
else
  echo "⚠️  No build script defined for $PACKAGE_NPM_NAME, skipping build..."
fi

echo "🔹 Publishing to npm..."
npm publish --registry https://registry.npmjs.org/ --access public --tag stable

echo "✅ Publish complete! Version $VERSION is now live."

#!/usr/bin/env bash

set -e

SCRIPTS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPTS_DIR}/.."
ASSETS_EXTENSIONS="scss,svg,png,json"

PREBUILD_DIR="src-prebuild"
OUT_DIR="dist"
OUT_ES_DIR="${OUT_DIR}/es"
OUT_CJS_DIR="${OUT_DIR}/lib"

function forEachPackage() {
  PACKAGES_DIR="${REPO_DIR}/packages"
  for dir in "${PACKAGES_DIR}"/*; do
    cd "${dir}"
    echo "Processing package in ${dir}"
    if [ $(jq .private <package.json) == "true" ]; then
      continue
    fi
    dirname=$(basename ${dir})
    echo "${dirname}"

    echo $($1)
  done
}

echo "Preparing files to compile..."
function prepare() {
  rm -rf "${PREBUILD_DIR}"
  mkdir "${PREBUILD_DIR}"
  yarn copyfiles --up=1 "src/**/*.{ts,tsx}" "${PREBUILD_DIR}"
}
forEachPackage prepare

echo "Compiling files..."
cd "${REPO_DIR}"
rm -rf "${OUT_DIR}"
yarn tsc -p tsconfig.build.cjs.json
yarn tsc -p tsconfig.build.es.json

echo "Moving files to target dirs..."
function moveFiles() {
  rm -rf "${OUT_DIR}"
  mkdir "${OUT_DIR}"

  mv "../../${OUT_DIR}/lib/${dirname}/src-prebuild/" "${OUT_CJS_DIR}"
  yarn copyfiles --up=1 "src/**/*.{${ASSETS_EXTENSIONS}}" "${OUT_CJS_DIR}"
  mv "../../${OUT_DIR}/es/${dirname}/src-prebuild/" "${OUT_ES_DIR}"
  yarn copyfiles --up=1 "src/**/*.{${ASSETS_EXTENSIONS}}" "${OUT_ES_DIR}"

  rm -rf "${PREBUILD_DIR}"
}
forEachPackage moveFiles

echo "Clean up..."
cd "${REPO_DIR}"
rm -rf "${OUT_DIR}"

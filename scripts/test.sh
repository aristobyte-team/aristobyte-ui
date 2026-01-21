#!/usr/bin/env bash

SCRIPTS_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
REPO_DIR="${SCRIPTS_DIR}/.."
PACKAGES_DIR="${REPO_DIR}/packages"
FAILED=false

for dir in "${PACKAGES_DIR}"/*; do
  dirname=$(basename ${dir})
  if [ $# != 0 ] && ! [[ " ${@} " =~ " ${dirname} " ]]; then
    # skip if selected specific folders and current folder does not equal
    continue
  fi
  echo "${dirname}"
  yarn test --runInBand --passWithNoTests "packages/${dirname}/"
  if [ $? -ne 0 ]; then
    FAILED=true
  fi
done

if [ "${FAILED}" == "true" ]; then
  exit 1
fi

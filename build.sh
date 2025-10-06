#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEFAULT_STATIC_FOLDER=""

if DEFAULT_STATIC_FOLDER=$(cd "${SCRIPT_DIR}/../../backend/theme/wger/core/static/react" 2>/dev/null && pwd); then
  :
fi

if [[ -z "${WGER_STATIC_FOLDER:-}" && -n "${DEFAULT_STATIC_FOLDER}" ]]; then
  export WGER_STATIC_FOLDER="${DEFAULT_STATIC_FOLDER}"
fi

echo "$WGER_STATIC_FOLDER"
yarn config set --home enableTelemetry 0
yarn install
yarn build
. ./postbuild.sh

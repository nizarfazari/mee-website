#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_NAME="${1:?usage: deploy-pages-token.sh <main|console|docs> <branch>}"
BRANCH="${2:?usage: deploy-pages-token.sh <main|console|docs> <branch>}"

case "$APP_NAME" in
  main|console|docs) ;;
  *) echo "unknown Pages app: $APP_NAME" >&2; exit 2 ;;
esac

: "${CLOUDFLARE_ACCOUNT_ID:?set CLOUDFLARE_ACCOUNT_ID in the shell}"
: "${CLOUDFLARE_API_TOKEN:?set CLOUDFLARE_API_TOKEN in the shell}"

export CLOUDFLARE_ACCOUNT_ID CLOUDFLARE_API_TOKEN
exec "$ROOT_DIR/scripts/deploy-pages-wrangler.sh" "$APP_NAME" "$BRANCH"

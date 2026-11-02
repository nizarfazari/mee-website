#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_NAME="${1:?usage: deploy-pages-wrangler.sh <main|console|docs> <branch>}"
BRANCH="${2:?usage: deploy-pages-wrangler.sh <main|console|docs> <branch>}"

case "$APP_NAME" in
  main)
    # Override this only if the Cloudflare Pages project is renamed.
    PROJECT_NAME="${CLOUDFLARE_PAGES_PROJECT_MAIN:-pixel-portfolio}"
    ;;
  console)
    : "${CLOUDFLARE_PAGES_PROJECT_CONSOLE:?set CLOUDFLARE_PAGES_PROJECT_CONSOLE for this Pages app}"
    PROJECT_NAME="$CLOUDFLARE_PAGES_PROJECT_CONSOLE"
    ;;
  docs)
    : "${CLOUDFLARE_PAGES_PROJECT_DOCS:?set CLOUDFLARE_PAGES_PROJECT_DOCS for this Pages app}"
    PROJECT_NAME="$CLOUDFLARE_PAGES_PROJECT_DOCS"
    ;;
  *)
    echo "unknown Pages app: $APP_NAME" >&2
    exit 2
    ;;
esac

cd "$ROOT_DIR"
bun run build:static

DEPLOY_ARGS=(pages deploy "$ROOT_DIR/out" --project-name "$PROJECT_NAME" --branch "$BRANCH")
if COMMIT_HASH="$(git rev-parse HEAD 2>/dev/null)"; then
  DEPLOY_ARGS+=(--commit-hash "$COMMIT_HASH")
fi

bunx wrangler "${DEPLOY_ARGS[@]}"

# Deploy to Cloudflare Pages

This repository deploys the static Next.js export in `out/` to Cloudflare Pages through GitHub Actions. The workflow is at `.github/workflows/deploy-cloudflare-pages.yml` and runs after every push to `main`.

## One-time setup

1. Create the Cloudflare Pages project named `pixel-portfolio` with `main` as its production branch:

   ```bash
   CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... \
     bunx wrangler pages project create pixel-portfolio --production-branch main
   ```

2. In GitHub, open **Settings → Secrets and variables → Actions** and add:

   - `CLOUDFLARE_API_TOKEN`: a Cloudflare API token allowed to deploy to Cloudflare Pages.
   - `CLOUDFLARE_ACCOUNT_ID`: the Cloudflare account ID that owns the Pages project.

3. Push to `main`, or use **Actions → Deploy to Cloudflare Pages → Run workflow**.

## Local deployment with an API token

Set the credentials in the current shell, then run the production deployment:

```bash
export CLOUDFLARE_ACCOUNT_ID="your-account-id"
export CLOUDFLARE_API_TOKEN="your-api-token"
bun run deploy:pages
```

`deploy:pages` runs `scripts/deploy-pages-token.sh main main`. The script builds the static export, then deploys `out/` to the `pixel-portfolio` Pages project on the `main` branch.

For a Pages preview deployment:

```bash
bun run deploy:pages:preview
```

To choose an app and branch manually:

```bash
bun run deploy:pages:branch -- main feature/my-branch
```

The `console` and `docs` app targets are supported by the script for future Pages projects. Configure their project names with `CLOUDFLARE_PAGES_PROJECT_CONSOLE` or `CLOUDFLARE_PAGES_PROJECT_DOCS` before using them.

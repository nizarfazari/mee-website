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

## Local production deployment

```bash
bun run deploy:pages
```

The command builds the static export and deploys `out/` to the `main` production branch. It requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment.

# saajanpatel.co.uk

Personal website built with Nuxt 4 and deployed to Cloudflare Workers at [saajanpatel.co.uk](https://saajanpatel.co.uk).

Uses pnpm as the package manager.

## Setup

```bash
pnpm install
```

For local development, copy `.env.example` to `.env` and fill in the Resend values used by the contact form.

## Development

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application (uses the Cloudflare Workers preset):

```bash
pnpm build
```

Preview the production build locally in the Workers runtime:

```bash
pnpm preview
```

## Deployment

Deploys to Cloudflare Workers via Wrangler, configured in `wrangler.jsonc` with custom domains for `saajanpatel.co.uk` and `www.saajanpatel.co.uk`:

```bash
pnpm run deploy
```

(`pnpm run deploy`, not `pnpm deploy`, which is pnpm's own built-in command.)

The contact form needs these secrets set on the Worker (one-time):

```bash
wrangler secret put RESEND_API_KEY
wrangler secret put RESEND_FROM_EMAIL
wrangler secret put RESEND_TO_EMAIL
```

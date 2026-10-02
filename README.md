## Personal Portfolio

![Portfolio Website](https://i.ibb.co/WgPMpts/image.png)

### Netlify deployment

This site is configured for Netlify Forms and statically exported for deployment on Netlify.

- Build command: `npm run build`
- Publish directory: `out`
- Node.js version: 18 (configured in `netlify.toml`)

The contact form submits to Netlify Forms and shows an in-page confirmation after a successful submission. Manage submissions and email notifications from the Netlify site’s **Forms** settings.

The public portfolio URL is `https://harrisarshadportfolio.netlify.app/`. Canonical metadata, the sitemap, and `robots.txt` use this address.

<!--
Cloudflare Pages reference for a future switch:
- Build command: npm run build
- Build output directory: out
- Keep the npm-only lockfile setup so Cloudflare installs with npm; an old Yarn lockfile caused Yarn 4 immutable-install failures.
- Do not run `npx wrangler deploy` as a Pages deploy command.
- The active contact form uses Netlify Forms and will need a Cloudflare-compatible form backend before switching hosts.
- Previous Cloudflare contact implementation used a Pages Function and Resend; it was removed when restoring Netlify Forms.
-->

### Optional analytics

Set `NEXT_PUBLIC_GA_ID` in the hosting provider environment to enable Google Analytics. Leave it unset to keep analytics disabled.

`NEXT_PUBLIC_CALENDLY_URL` can be set to customize the booking link; it defaults to the existing Calendly page.

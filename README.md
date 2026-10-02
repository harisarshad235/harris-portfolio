## Personal Portfolio

![Portfolio Website](https://i.ibb.co/WgPMpts/image.png)

### Cloudflare Pages deployment

This site is statically exported by Next.js and deployed to Cloudflare Pages.

- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: 18 (also declared in `package.json`)
- Functions directory: `functions`

Connect this repository to a Cloudflare Pages project and use the build settings above. Set `NEXT_PUBLIC_SITE_URL` to `https://harisarshad.site` in the Pages build environment so generated metadata uses the production URL.

After the first successful deployment, add `harisarshad.site` under the Pages project’s **Custom domains** settings. The domain must be an active zone in the same Cloudflare account. Cloudflare will configure the required DNS record for the Pages project.

Requests to the project’s `*.pages.dev` hostname are permanently redirected to `harisarshad.site`, preserving the path and query string. The `netlify.toml` redirect similarly redirects the old Netlify hostname when this repository is next deployed there. If the Netlify site is no longer needed, pause or delete it in the Netlify dashboard after confirming the redirect deployment.

#### Contact form

The contact form is handled by `functions/api/contact.js` and sends submissions through Resend. Verify `harisarshad.site` with Resend, then add these variables to the Cloudflare Pages project under **Settings → Variables and Secrets** for both production and preview environments as appropriate:

- `RESEND_API_KEY` — a Resend API key; mark it as a secret.
- `CONTACT_FROM_EMAIL` — a sender on the verified domain, for example `Haris Arshad <contact@harisarshad.site>`.
- `CONTACT_TO_EMAIL` — the inbox that should receive messages, for example `harisarshad235@gmail.com`.

The form returns an error until these values are configured, rather than reporting a message as sent when delivery is unavailable.

### Optional analytics

Set `NEXT_PUBLIC_GA_ID` in the Cloudflare Pages build environment to enable Google Analytics. Leave it unset to keep analytics disabled.

`NEXT_PUBLIC_CALENDLY_URL` can be set to customize the booking link; it defaults to the existing Calendly page.

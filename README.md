## Personal Portfolio

![Portfolio Website](https://i.ibb.co/WgPMpts/image.png)

### Cloudflare Pages deployment

This site is exported as a static Next.js site and its contact endpoint runs as a Cloudflare Pages Function.

- Build command: `npm run build`
- Build output directory: `out`
- Build environment: Node.js 18
- Deploy command: leave unset; Cloudflare Pages publishes the build output automatically.

Cloudflare Pages uses the npm lockfile (`package-lock.json`) to install dependencies.

Set `NEXT_PUBLIC_SITE_URL` to the public site origin (for example, `https://your-domain.example`) in the Pages build environment so canonical and social-sharing URLs are generated correctly.

The contact function sends submissions through [Resend](https://resend.com/). In the Cloudflare Pages project settings, configure:

- `RESEND_API_KEY` as a secret containing your Resend API key.
- `RESEND_FROM_EMAIL` as a variable containing a sender address on a domain verified with Resend (for example, `Portfolio <contact@your-verified-domain.example>`).

The function sends messages to `harisarshad235@gmail.com`; replies go to the address entered on the form.

### Optional analytics

Set `NEXT_PUBLIC_GA_ID` in the hosting provider environment to enable Google Analytics. Leave it unset to keep analytics disabled.

`NEXT_PUBLIC_CALENDLY_URL` can be set to customize the booking link; it defaults to the existing Calendly page.

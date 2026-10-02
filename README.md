## Personal Portfolio

![Portfolio Website](https://i.ibb.co/WgPMpts/image.png)

### Cloudflare Pages deployment

This site is exported as a static Next.js site for Cloudflare Pages.

- Build command: `npm run build`
- Build output directory: `out`
- Build environment: Node.js 18
- Deploy command: leave unset; Cloudflare Pages publishes the build output automatically.

Cloudflare Pages uses the npm lockfile (`package-lock.json`) to install dependencies.

Set `NEXT_PUBLIC_SITE_URL` to the public site origin (for example, `https://your-domain.example`) in the Pages build environment so canonical and social-sharing URLs are generated correctly.

The contact form uses [FormSubmit](https://formsubmit.co/) to email submissions to `harisarshad235@gmail.com`. You do not need to own a domain or add an API key. After the first test submission, FormSubmit sends an activation email to that inbox; open it and confirm to enable delivery. FormSubmit is an external service and will receive the form details.

Replies to submissions go to the address entered on the form.

### Optional analytics

Set `NEXT_PUBLIC_GA_ID` in the hosting provider environment to enable Google Analytics. Leave it unset to keep analytics disabled.

`NEXT_PUBLIC_CALENDLY_URL` can be set to customize the booking link; it defaults to the existing Calendly page.

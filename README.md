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

The contact form is handled by `functions/api/contact.js` and sends submissions through [Resend](https://resend.com/). Verify `harisarshad.site` with Resend, then add these variables to the Cloudflare Pages project under **Settings → Variables and Secrets** for the Production environment:

- `RESEND_API_KEY` — a Resend API key; mark it as a secret.
- `CONTACT_FROM_EMAIL` — a sender on the verified domain, for example `Haris Arshad <contact@harisarshad.site>`.
- `CONTACT_TO_EMAIL` — the inbox that should receive messages, for example `harisarshad235@gmail.com`.

The form reports a delivery error until these values are configured. Replies to contact messages go to the visitor's email address.

The Recommendations dialog sends feedback privately to the configured contact inbox through `functions/api/recommendation.js`. Reviewers explicitly consent to publication of their feedback and any attribution they submit. Submissions stay private until approved through the secure review link in the notification email; clicking **Approve and publish** publishes the recommendation automatically, without a code change or redeployment. The review link expires after 90 days. You can discard a submission from the same review page.

To enable automatic approval and live display:

1. Create a Cloudflare D1 database for this Pages project.
2. In that database's SQL console, run the contents of `migrations/0001_recommendations.sql`.
3. Add a D1 database binding to the Pages project with the variable name `RECOMMENDATIONS_DB`, linked to the database you created.
4. Redeploy the Pages project so its Functions can use the binding.

Approved entries are loaded from D1 by `functions/api/recommendations.js` whenever the portfolio loads. Review links expire after 90 days; expired pending submissions are removed when a new submission arrives or the expired review link is opened. Only approve feedback and attribution the reviewer agreed to make public.

### Updating credentials

Add or edit entries in `src/constants/credentials.js`. Categories automatically become filter options. For a public verification page, set `verificationUrl`; for a certificate image, add the image under `public/credentials/` and set `certificateImage` to its path, such as `/credentials/example.png`. Avoid publishing membership cards or documents containing private member numbers.

### Optional analytics

Set `NEXT_PUBLIC_GA_ID` in the Cloudflare Pages build environment to enable Google Analytics. Leave it unset to keep analytics disabled.

`NEXT_PUBLIC_CALENDLY_URL` can be set to customize the booking link; it defaults to the existing Calendly page.

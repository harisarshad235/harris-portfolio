# Deployment Guidelines

- This project is deployed on **Cloudflare Pages** at `https://harisarshad.site`.
- Builds and deployments are automatically triggered whenever changes are pushed to `origin main`.
- When work is verified and tested (`npm run build`), stage, commit with a descriptive message, and push directly to `origin main` to deploy.
- **Every change ships.** Each time a change is made to this site, commit it and push to `origin main` so it deploys. Do not leave finished work uncommitted and wait to be asked.
- Stop the dev server (`preview_stop`) before running `npm run build`, and clear `.next` first. Running both at once corrupts the dev server's cache.
- Commit footer: end commit messages with the `Co-Authored-By` line the current model's instructions specify.
- Do not re-add Netlify-specific configurations (such as `netlify.toml`).

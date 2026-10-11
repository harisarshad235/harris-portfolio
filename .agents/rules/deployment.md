# Deployment Guidelines

- This project is deployed on **Cloudflare Pages** at `https://harisarshad.site`.
- Builds and deployments are automatically triggered whenever changes are pushed to `origin main`.
- When work is verified and tested (`npm run build`), stage, commit with a descriptive message, and push directly to `origin main` to deploy.
- Do not re-add Netlify-specific configurations (such as `netlify.toml`).

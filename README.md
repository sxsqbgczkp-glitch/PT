# Elevate with Alex Website

This is a static website (HTML/CSS/JS) for a personal training + life coaching business with daily investment insights.

## Run locally

### Python

```bash
cd /workspace/PT
python3 -m http.server 8080
```

Open: http://localhost:8080

### Node

```bash
cd /workspace/PT
npx serve .
```

## Publish to GitHub Pages (automatic)

This repo now includes a GitHub Actions workflow at:

- `.github/workflows/deploy-pages.yml`

### One-time setup

1. Push this project to GitHub.
2. Make sure your default branch is `main`.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Source: GitHub Actions**.
5. Push to `main` (or run the workflow manually from **Actions**).

Your site will publish at:

- `https://<your-username>.github.io/<repo-name>/`

## Quick alternatives

- Netlify Drop: https://app.netlify.com/drop
- Vercel: https://vercel.com/new

## Daily content updates

- The market note date and footer year auto-update from `script.js`.
- To update your written daily market commentary, edit the `#market-summary` paragraph in `index.html`.

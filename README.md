# WanderW Landing Page (GitHub Pages)

This is a simple static landing page you can host on GitHub Pages.

## Files
- `index.html` – page content
- `styles.css` – styling
- `script.js` – waitlist form behavior (mailto-based, no backend)
- `assets/logo.png` – your logo (provided)

## Deploy to GitHub Pages (Project Site)

1) Create a new repo on GitHub (example: `wanderw-landing`).

2) Upload these files to the repo root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/logo.png`

3) In GitHub:
   - Go to **Settings → Pages**
   - Under **Build and deployment**
     - Source: **Deploy from a branch**
     - Branch: **main**
     - Folder: **/** (root)
   - Save

4) Wait for GitHub to publish the site.
   - Your URL will look like: `https://YOUR_USERNAME.github.io/wanderw-landing/`

## Optional: Deploy as a User Site
If you want `https://YOUR_USERNAME.github.io/`:
- Create a repo named exactly: `YOUR_USERNAME.github.io`
- Put the same files in the repo root
- GitHub Pages will auto-publish

## Important: Update the Waitlist Email
In `script.js`, replace:
- `youremail@example.com`
with your real email to receive waitlist messages.

## Affiliate Disclosure
A disclosure is included in the footer. Keep it there once you add affiliate links.

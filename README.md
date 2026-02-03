# Jalandhar Portfolio

A modern, responsive portfolio website for **Ejjigiri Jalandhar** (Full Stack Developer & Cybersecurity Enthusiast), inspired by the layout and sections of the referenced portfolio site.

## Structure

- `index.html` – Main single-page portfolio (Home, About, Skills, Services, Projects, Certificates, Contact).
- `styles.css` – All visual styling (dark gradient theme, cards, responsive layout).
- `script.js` – Mobile navigation toggle, smooth scrolling, and a demo contact-form handler.
- `package.json` – Optional helper for running a local dev server.

## How to Run Locally

You can simply open `index.html` in your browser:

1. Go to the folder: `c:\Users\DELL\Desktop\portfolio`
2. Double-click `index.html` or right-click and open it with your preferred browser.

Or use a simple local server (recommended):

1. Install Node.js if you don’t have it.
2. Open a terminal in `c:\Users\DELL\Desktop\portfolio`.
3. Run:
   ```bash
   npm start
   ```
   This uses `npx serve .` to host the site locally.

## Adding Your Resume Download

Currently, the "Download Resume" button in `index.html` points to:

```text
assets/Jalandhar_Ejjigiri_Resume.pdf
```

To make it work:

1. Create a folder named `assets` inside `c:\Users\DELL\Desktop\portfolio`.
2. Place your resume PDF in that folder.
3. Rename the file to `Jalandhar_Ejjigiri_Resume.pdf` (or update the link in `index.html` to match your filename).

## Customization Tips

- **Name/Title**: Update text in the hero section of `index.html` if your role/title changes.
- **Skills & Projects**: All content is driven by `index.html` – just edit or add cards in the Skills/Projects/Certificates sections.
- **Colors & Fonts**: Adjust CSS variables at the top of `styles.css` (e.g., `--accent`, `--bg`) to tweak the theme.
- **Form Backend**: The contact form is a demo only. To make it functional, connect it to a service (email API, backend endpoint, or form service) from `script.js` or HTML form `action`.


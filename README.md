# Vijaya Odisha — React migration

This project uses React, Vite, and React Router. The original HTML pages are kept in `src/original-pages/` and imported as raw strings so their markup and copy remain unchanged. `PageRenderer.jsx` renders each original body inside React, retains page-specific `<style>` blocks from the source document, and initializes the existing interactions from the original JavaScript.

## Run locally

1. Install Node.js LTS from https://nodejs.org/
2. Open this folder in Antigravity or VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.jsx` — React Router configuration for all 10 pages (including the original `.html` URLs)
- `src/components/PageRenderer.jsx` — renders the original page markup and initializes existing interactions
- `src/pages/pageSources.js` — raw imports for all original HTML pages
- `src/original-pages/` — untouched original HTML pages retained for reference and content preservation
- `src/style.css` — original stylesheet copied unchanged
- `src/legacy-script.js` — original JavaScript copied unchanged
- `public/assets/images/` — original image assets
- `public/js/script.js` — original JavaScript asset copied for reference

## Preservation note

This is a content-preserving first React migration. The page markup is rendered inside React without rewriting the original HTML into JSX, which minimizes unintended changes to copy and visual structure. A later refactor can convert the markup to native JSX components while using the original pages as the comparison baseline.

## Premium Editorial Homepage Update

The homepage (`/` and `/index.html`) is now a native React page in `src/pages/Home.jsx`.
It uses the selected Navy + Sage Green + Warm Cream palette and the existing Vijaya Odisha
logo and photography. Other pages remain on the existing legacy HTML renderer for now,
so their content and existing interactions are preserved while the homepage is redesigned.

Run locally:
1. Open this folder in VS Code.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL printed by Vite.

The homepage is responsive and includes a sticky header, mobile navigation, scroll-reveal
sections, activity cards, an impact section, photo story feature and footer. No backend
or donation-payment processing has been added.

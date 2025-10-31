# WeGfit3D (WeGift3D)

This is a Next.js + React project for a 3D/gift customization storefront (WeGift3D). It contains pages for shop, customize, cart, wishlist, and other UI components.

## Quick start

Requirements:
- Node.js (LTS recommended)
- pnpm (optional) or npm

Install dependencies:

For pnpm (recommended if you use pnpm lockfile):

```powershell
pnpm install
```

Or with npm:

```powershell
npm install
```

Run the development server:

```powershell
pnpm dev
# or
npm run dev
```

Build for production:

```powershell
npm run build
npm start
```

## Project structure

- `app/` - Next.js app routes and pages
- `components/` - Reusable UI components and primitives
- `lib/` - Utilities, types and context (cart, products)
- `public/` - Static assets
- `styles/` - Global styles

## Notes
- This repo uses Next 16 and React 19 based on the `package.json` in the project root. Adjust Node.js version and other environment settings as needed.

## Remote repository
This local copy is intended to be pushed to: https://github.com/Sreejith-nair511/WeGfit3D_carting

If the push requires authentication, follow GitHub's instructions to set up an access token or SSH key and push again.

---

If you'd like, I can also add a minimal `.gitignore` (node_modules, .next, .env) before committing. Tell me if you want that included.

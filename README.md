# Smile Hair and Beauty — website
React + TypeScript + Vite + Tailwind CSS v4. No backend.

## Run
`npm install` · `npm run dev` · `npm run build` (output: `dist`) · `npm run preview`

## Update content
- `src/data/site.ts`: phone, WhatsApp (digits only), address, hours, area, links. Fields left `null` are not shown; buttons appear automatically once filled.
- `src/data/images.ts`: set `src` per image (put files in `public/img/`). Current images are generated placeholder artwork, not salon photos.
- Testimonials are intentionally omitted until real reviews are supplied.

## Deploy (GitHub → Vercel)
1. `git init && git add . && git commit -m "Initial site"`, then push to a new GitHub repo.
2. In Vercel: Add New → Project → import the repo. Framework: Vite, build `npm run build`, output `dist` (set by `vercel.json`).
3. Deploy. Later pushes to the main branch redeploy automatically.

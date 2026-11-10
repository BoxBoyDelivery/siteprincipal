# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

The institutional/commercial site of BoxBoy Delivery LTDA (last-mile logistics, Rio de Janeiro): one landing page, one legal page and one API route that e-mails leads. Next.js 16 App Router, React 19 with the React Compiler on, Tailwind v4, deployed on Vercel. All copy is Brazilian Portuguese, and so are code comments.

## Commands

```bash
pnpm dev                    # dev server on :3000
pnpm build                  # production build (also runs the TypeScript check)
pnpm lint                   # eslint (eslint-config-next: core-web-vitals + typescript)
pnpm exec tsc --noEmit      # typecheck only
pnpm exec prettier --check . # there is no format script; call prettier directly
pnpm audit                  # dependency advisories
```

There is no test suite and no CI workflow. `pnpm build` plus `pnpm lint` is the verification available.

Every push to `main` deploys to production on Vercel. Work on a branch.

`pnpm-workspace.yaml` must keep `allowBuilds` as real booleans. pnpm writes the placeholder `set this to true or false` there when a new dependency has a build script, and `pnpm add`/`pnpm update` then exit with `ERR_PNPM_IGNORED_BUILDS` until it is replaced.

## Architecture

### Routes are thin, modules hold the page

`src/app` only wires routes: each `page.tsx` exports metadata and renders one component from `src/modules/<domain>`. Route groups `(common)` → `/` and `(institutional)` → `/institucional` exist for organisation only and do not affect URLs.

- `src/modules/common` — the landing page (`LandingPage.tsx` composes the sections in order) plus everything shared with the legal page: `Footer`, icons, hooks, the lead e-mail templates.
- `src/modules/institutional` — the legal page. Its four sections (Privacidade, Cookies, Termos, Jurídico) are tabs switched by client state, not routes, so only the default tab is in the server-rendered HTML.

Both page components are `'use client'` at the top, so the whole tree below them is client code. Anything that must stay on the server (metadata, JSON-LD) lives in the `page.tsx` or the layout, not inside the module.

`WelcomePopup` and `PolicyDrawer` (cookie/policy consent) are mounted in the root layout and therefore appear on every route.

### Scroll reveal

Sections fade in through a CSS convention, not a component: an element gets the class `reveal`, and `useReveal()` (called once per page component) adds `in` when it enters the viewport. The styles are in `globals.css`. A new section that should animate only needs the class; a new page needs to call the hook.

### Styling

Tailwind v4 is configured CSS-first in `src/styles/globals.css` under `@theme inline`; there is no `tailwind.config`. Brand tokens are defined there (`ink`, `ink-deep`, `paper`, `paper-alt`, `amber1`–`amber4`) along with helper classes such as `amber-text`, `amber-bg`, `grain` and `grid-dots`. Fonts come from `src/utils/fonts.ts` as CSS variables (`font-sans` Inter, `font-display` Space Grotesk, `font-mono` JetBrains Mono).

`components.json` (shadcn) points its aliases at `@/components` and `@/lib/utils`, which do not exist. The class helper is `cn` in `src/utils/cn.ts`. Fix the aliases before running the shadcn CLI, or it will generate files in the wrong place.

### Data visualisations

The charts on the landing page are hand-written SVG components in `feature-viz/` and `benefits-viz/`. `data/features.ts` binds each feature card to its `Viz` component and icon (see the `Feature` type in `types.ts`), so adding a card means adding a viz component and one entry there.

### Lead form

`LeadForm.tsx` posts JSON to `POST /api/lead` (`src/app/api/lead/route.ts`), which sends two e-mails through Resend: a notification to `CONTACT_EMAIL` and a thank-you to the address the visitor typed. The templates are React Email components in `modules/common/emails`. The route only checks that the required fields are non-empty; it has no rate limit, captcha or e-mail validation.

### SEO

`src/shared/seo/site.ts` is the single source for the canonical domain, site name, descriptions, contact data and the list of indexable routes (`SITE_ROUTES`). `robots.ts`, `sitemap.ts`, `manifest.ts`, the layout metadata and the JSON-LD in `schema.ts` all read from it.

- A new public page needs an entry in `SITE_ROUTES` (that is what puts it in the sitemap) and its own `alternates.canonical`. Without one it inherits the home canonical from the layout.
- Next merges metadata shallowly: a page that sets `openGraph` or `twitter` replaces the layout's object entirely, so it must restate `siteName`, `locale` and `images`. `institucional/page.tsx` shows the pattern.
- `lastModified` in `SITE_ROUTES` is a hand-maintained content date. Update it when the page's content changes.
- `Organization` and `WebSite` JSON-LD are emitted by the layout; page-specific schemas go in the page. `sameAs` is intentionally absent because the footer's social links are still `#`.
- `SITE_URL` falls back to `https://boxboydelivery.com` when `NEXT_PUBLIC_BASE_URL` is missing or not a valid http(s) URL.

### Things that look wired but are not

- `src/shared/messages/{pt,en,es,fr}.json` are not imported anywhere. The site is Portuguese-only with hardcoded copy; there is no i18n routing.
- `src/modules/common/icons/BoxBoyLogo.tsx` is a 4.7 MB file with the logo embedded as base64. Do not open it or include it in searches. `LogoIcon` in `icons/index.tsx` is the small vector mark.
- `public/assets/boxboy-logo.png` and `.svg` are about 4.5 MB each. Use the derived `icon-192.png`, `icon-512.png` and `apple-touch-icon.png` for anything served to visitors.

## Environment

Copy `.env.example` to `.env.local`. All variables are optional for the site to render.

| Variable                      | Used for                                                                          |
| ----------------------------- | --------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_BASE_URL`        | Canonical domain for metadata, sitemap and JSON-LD                                |
| `NEXT_PUBLIC_META_PIXEL_ID`   | Meta Pixel; the script is only injected when set                                  |
| `NEXT_PUBLIC_GTM_ID`          | Google Tag Manager container; set only in production. Do not add the Pixel in GTM |
| `GOOGLE_SITE_VERIFICATION`    | Search Console meta tag; set only in production                                   |
| `RESEND_API_KEY`              | Required for `/api/lead` to send e-mail                                           |
| `EMAIL_FROM`, `CONTACT_EMAIL` | Sender and internal recipient; both default to `contato@boxboydelivery.com`       |

## Code style

Prettier: single quotes, no semicolons, `printWidth` 100, Tailwind classes sorted by the plugin. `next.config.ts` and `eslint.config.mjs` are the exceptions and use double quotes with semicolons.

Components are arrow functions typed `(): JSX.Element`, exported by name at the bottom of the file (`export { Hero }`); only `app/` files use default exports. Imports use the `@/` alias for `src/`.

Commits follow Conventional Commits with a scope and a Portuguese description, for example `feat(contact-form): configurando o DNS com painel da Resend.`

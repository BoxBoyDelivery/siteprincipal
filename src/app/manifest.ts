import type { MetadataRoute } from 'next'

import { SITE } from '@/shared/seo/site'

/** `/manifest.webmanifest`. Os ícones são derivados de `boxboy-logo.png`. */
const manifest = (): MetadataRoute.Manifest => {
  return {
    name: SITE.title,
    short_name: SITE.name,
    description: SITE.shortDescription,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: SITE.backgroundColor,
    theme_color: SITE.themeColor,
    lang: SITE.lang,
    dir: 'ltr',
    categories: ['business', 'logistics'],
    icons: [
      { src: '/assets/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      {
        src: '/assets/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}

export default manifest

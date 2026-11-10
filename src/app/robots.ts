import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/shared/seo/site'

/**
 * `/robots.txt`. Libera o site inteiro e deixa de fora só as rotas de API, que
 * não têm conteúdo para indexar.
 */
const robots = (): MetadataRoute.Robots => {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

export default robots

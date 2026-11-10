import type { MetadataRoute } from 'next'

import { absoluteUrl, SITE_ROUTES } from '@/shared/seo/site'

/** `/sitemap.xml`, gerado a partir de `SITE_ROUTES`. */
const sitemap = (): MetadataRoute.Sitemap => {
  return SITE_ROUTES.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: absoluteUrl(path || '/'),
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }))
}

export default sitemap

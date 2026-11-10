import { absoluteUrl, SITE, SITE_ROUTES, SITE_URL, type SitePath } from './site'

/**
 * JSON-LD do site. Os `@id` são estáveis para que `WebSite`, `Service` e
 * `WebPage` apontem para a **mesma** organização, em vez de cada bloco declarar
 * uma empresa nova com o mesmo nome.
 *
 * Só entram dados que o próprio site publica (rodapé e Contato Jurídico).
 * `sameAs` fica de fora enquanto os ícones de rede social do rodapé não tiverem
 * URL real — inclua os perfis aqui quando existirem.
 */

const ORGANIZATION_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  taxID: SITE.taxId,
  url: SITE_URL,
  logo: absoluteUrl('/assets/icon-512.png'),
  image: absoluteUrl('/assets/og-image.png'),
  description: SITE.shortDescription,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  },
  areaServed: { '@type': 'City', name: SITE.city },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: SITE.country,
    availableLanguage: 'Portuguese',
  },
} as const

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE.name,
  description: SITE.shortDescription,
  inLanguage: SITE.lang,
  publisher: { '@id': ORGANIZATION_ID },
} as const

/** O serviço que a landing page vende. Só na home. */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/#service`,
  name: 'Entregas last-mile para lojistas',
  serviceType: 'Logística last-mile e entregas sob demanda',
  description: SITE.description,
  provider: { '@id': ORGANIZATION_ID },
  areaServed: { '@type': 'City', name: SITE.city },
  audience: { '@type': 'BusinessAudience', audienceType: 'Lojistas e restaurantes' },
} as const

/** Trilha Início › Página. A home não tem trilha. */
const buildBreadcrumbSchema = (path: Exclude<SitePath, ''>) => {
  const home = SITE_ROUTES[0]
  const page = SITE_ROUTES.find((route) => route.path === path) ?? home

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [home, page].map((route, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: route.label,
      item: absoluteUrl(route.path || '/'),
    })),
  } as const
}

export { buildBreadcrumbSchema, organizationSchema, serviceSchema, websiteSchema }

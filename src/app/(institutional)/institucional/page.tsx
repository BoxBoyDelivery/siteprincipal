import type { JSX } from 'react'

import type { Metadata } from 'next'

import { InstitucionalPage } from '@/modules/institutional/InstitucionalPage'
import { JsonLd } from '@/shared/seo/JsonLd'
import { buildBreadcrumbSchema } from '@/shared/seo/schema'
import { OG_IMAGE, SITE } from '@/shared/seo/site'

const PATH = '/institucional'
const TITLE = 'Institucional — Privacidade, Cookies e Termos de Uso'
const DESCRIPTION =
  'Políticas de privacidade, cookies, termos de uso e informações jurídicas da BoxBoy Delivery LTDA, em conformidade com a LGPD.'

// `openGraph` e `twitter` vão inteiros: o Next mescla metadata de forma rasa,
// então declarar só `title` aqui apagaria `siteName`, `locale` e a imagem do
// layout.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: PATH,
    siteName: SITE.name,
    title: `${TITLE} | ${SITE.name}`,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | ${SITE.name}`,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
}

const InstitucionalRoute = (): JSX.Element => (
  <>
    <JsonLd data={buildBreadcrumbSchema(PATH)} />
    <InstitucionalPage />
  </>
)

export default InstitucionalRoute

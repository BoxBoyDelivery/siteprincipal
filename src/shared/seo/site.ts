/**
 * Fonte única dos dados do site usados em SEO: metadata, sitemap, robots,
 * manifest e JSON-LD leem daqui, para que domínio, nome e contato não divirjam
 * entre eles.
 */

import { publicEnv } from '@/shared/env/public'

const DEFAULT_SITE_URL = 'https://boxboydelivery.com'

/**
 * Domínio canônico, sem barra final. `www` redireciona para ele.
 * `NEXT_PUBLIC_BASE_URL` chega validado por `@/shared/env/public` (URL http(s),
 * já reduzida à origem): um valor errado derruba o build em vez de virar o
 * canonical do site inteiro.
 */
const SITE_URL = publicEnv.NEXT_PUBLIC_BASE_URL ?? DEFAULT_SITE_URL

const SITE = {
  name: 'BoxBoy',
  legalName: 'BoxBoy Delivery LTDA',
  taxId: '58.765.722/0001-17',
  title: 'BoxBoy — Entregas last-mile no Rio de Janeiro com as melhores taxas',
  description:
    'A BoxBoy conecta lojistas e entregadores no Rio de Janeiro: despacho automático, monitoramento em tempo real e entregas instant, same-day e next-day. Mais de 40 marcas e 40 mil pedidos por mês.',
  shortDescription:
    'Logística last-mile para lojistas no Rio de Janeiro: despacho automático, rotas inteligentes e monitoramento em tempo real.',
  locale: 'pt_BR',
  lang: 'pt-BR',
  email: 'contato@boxboydelivery.com',
  phone: '+5521971978677',
  city: 'Rio de Janeiro',
  region: 'RJ',
  country: 'BR',
  themeColor: '#292828',
  backgroundColor: '#ffffff',
} as const

/**
 * O card de compartilhamento. As dimensões são as reais do arquivo: declarar
 * 1200×630 para um PNG de 1442×922 faz a prévia ser cortada onde a rede social
 * quiser.
 */
const OG_IMAGE = {
  url: '/assets/og-image.png',
  width: 1442,
  height: 922,
  alt: 'BoxBoy — entregas last-mile no Rio de Janeiro',
} as const

/**
 * Rotas públicas e indexáveis. O sitemap sai daqui.
 *
 * `lastModified` é a data da última mudança real de conteúdo — atualize ao
 * editar a página. Com a data do build em todas as entradas, o Google passa a
 * ignorar o `lastmod` do domínio.
 */
const SITE_ROUTES = [
  {
    path: '',
    label: 'Início',
    lastModified: '2026-06-09',
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    path: '/institucional',
    label: 'Institucional',
    lastModified: '2026-05-30',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
] as const

type SitePath = (typeof SITE_ROUTES)[number]['path']

const absoluteUrl = (path: string = ''): string => `${SITE_URL}${path}`

export { absoluteUrl, OG_IMAGE, SITE, SITE_ROUTES, SITE_URL }
export type { SitePath }

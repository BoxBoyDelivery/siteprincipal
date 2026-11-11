import { z } from 'zod'

import { optional, parseEnv } from './parse'

/**
 * Variáveis `NEXT_PUBLIC_*`. O Next só as embute no bundle quando lidas por
 * nome literal (`process.env.NEXT_PUBLIC_X`), por isso o objeto abaixo lista
 * uma a uma em vez de repassar `process.env`.
 *
 * Importe este módulo só em código de servidor (layout, `page.tsx`, rotas,
 * `site.ts`), para o zod não ir para o navegador. Componentes cliente podem
 * ler `process.env.NEXT_PUBLIC_*` direto: o mesmo build já validou o valor
 * aqui, pelo layout.
 */
const schema = z.object({
  /** Domínio canônico. Normalizado para a origem, sem caminho nem barra final. */
  NEXT_PUBLIC_BASE_URL: optional(
    z
      .url({
        protocol: /^https?$/,
        error: 'deve ser uma URL http(s), ex.: https://boxboydelivery.com',
      })
      .transform((value) => new URL(value).origin)
  ),
  NEXT_PUBLIC_META_PIXEL_ID: optional(
    z.string().regex(/^\d+$/, 'deve conter só os dígitos do ID do Pixel')
  ),
  NEXT_PUBLIC_GTM_ID: optional(
    z.string().regex(/^GTM-[A-Z0-9]+$/, 'deve ter o formato GTM-XXXXXXX')
  ),
  /** Site key do Cloudflare Turnstile. Sem ela, o widget não aparece no formulário. */
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: optional(
    z.string().regex(/^[0-3]x[\w-]+$/, 'deve ser uma site key do Turnstile (0x...)')
  ),
})

const publicEnv = parseEnv(schema, {
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
})

export { publicEnv }

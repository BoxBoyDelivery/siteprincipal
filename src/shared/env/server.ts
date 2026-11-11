import 'server-only'

import { z } from 'zod'

import { optional, parseEnv } from './parse'

const DEFAULT_EMAIL = 'contato@boxboydelivery.com'

/** Remetente aceito pelo Resend: `email@dominio` ou `Nome <email@dominio>`. */
const sender = z.string().refine(
  (value) => {
    const address = value.match(/^[^<>]+<([^<>]+)>$/)?.[1] ?? value
    return z.email().safeParse(address.trim()).success
  },
  { error: 'deve ser um e-mail ou "Nome <email@dominio>"' }
)

/**
 * Variáveis só de servidor. O `server-only` faz o build falhar se este módulo
 * for importado por um componente cliente, o que vazaria a chave do Resend.
 */
const schema = z
  .object({
    /** Opcional: sem ela, `/api/lead` responde 503 em vez de enviar e-mail. */
    RESEND_API_KEY: optional(z.string().regex(/^re_\w+$/, 'deve ser uma chave do Resend (re_...)')),
    EMAIL_FROM: optional(sender).default(`BoxBoy <${DEFAULT_EMAIL}>`),
    CONTACT_EMAIL: optional(z.email({ error: 'deve ser um e-mail válido' })).default(DEFAULT_EMAIL),
    GOOGLE_SITE_VERIFICATION: optional(
      z.string().regex(/^\S+$/, 'deve ser só o valor de content da meta tag, sem espaços')
    ),
    /** Secret do Cloudflare Turnstile. Definida, `/api/lead` exige um token válido. */
    TURNSTILE_SECRET_KEY: optional(
      z.string().regex(/^[0-3]x[\w-]+$/, 'deve ser uma secret key do Turnstile (0x...)')
    ),
    // Lida só para conferir o par com a secret; o valor validado está em `publicEnv`.
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: optional(z.string()),
  })
  // Uma chave sem a outra quebra o formulário: com só a secret, todo envio é
  // recusado por falta de token; com só a site key, o widget roda à toa.
  .refine((env) => !env.TURNSTILE_SECRET_KEY === !env.NEXT_PUBLIC_TURNSTILE_SITE_KEY, {
    error: 'TURNSTILE_SECRET_KEY e NEXT_PUBLIC_TURNSTILE_SITE_KEY devem ser definidas juntas',
    path: ['TURNSTILE_SECRET_KEY'],
  })

const serverEnv = parseEnv(schema, process.env)

export { serverEnv }

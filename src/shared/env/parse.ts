import { z } from 'zod'

/**
 * Variável opcional: valor ausente, vazio ou só com espaços vira `undefined`
 * (no `.env` e no painel da Vercel, "definida vazia" é o mesmo que "não
 * definida"). Valores presentes chegam ao schema já sem espaços nas pontas.
 */
const optional = <T extends z.ZodType>(schema: T) =>
  z.preprocess((value) => {
    if (typeof value !== 'string') return value
    const trimmed = value.trim()
    return trimmed === '' ? undefined : trimmed
  }, schema.optional())

/**
 * Valida as variáveis e falha com a lista completa de problemas. Roda quando
 * o módulo é avaliado, ou seja, no `next build`: um valor inválido derruba o
 * deploy em vez de chegar à produção (a Vercel mantém o deploy anterior no ar).
 */
const parseEnv = <T extends z.ZodType>(schema: T, source: Record<string, unknown>): z.output<T> => {
  const result = schema.safeParse(source)
  if (!result.success) {
    throw new Error(`Variáveis de ambiente inválidas:\n${z.prettifyError(result.error)}`)
  }
  return result.data
}

export { optional, parseEnv }

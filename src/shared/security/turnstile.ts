import 'server-only'

import { LEAD_ACTION } from '@/modules/common/data/lead'

const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

interface SiteverifyResponse {
  success: boolean
  action?: string
  'error-codes'?: string[]
  metadata?: { result_with_testing_key?: boolean }
}

/**
 * Confere o token do Turnstile na Cloudflare. Cada token vale uma vez e por
 * 5 minutos, por isso o formulário reseta o widget depois de cada envio.
 * Falha de rede conta como reprovação: sem verificar, não dá para saber se o
 * envio veio de um bot.
 */
const verifyTurnstile = async (
  secret: string,
  token: string,
  remoteIp: string | null
): Promise<boolean> => {
  const body = new URLSearchParams({ secret, response: token })
  if (remoteIp) body.set('remoteip', remoteIp)

  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      body,
      signal: AbortSignal.timeout(5000),
    })
    const data = (await res.json()) as SiteverifyResponse
    // As chaves de teste da Cloudflare (1x…/2x…) não devolvem `action`; só
    // nesse caso a conferência da ação é dispensada.
    const actionOk = data.action === LEAD_ACTION || data.metadata?.result_with_testing_key === true
    if (!data.success || !actionOk) {
      console.warn('Turnstile recusou o token:', data['error-codes'] ?? data.action)
      return false
    }
    return true
  } catch (error) {
    console.error('Turnstile indisponível:', error)
    return false
  }
}

export { verifyTurnstile }

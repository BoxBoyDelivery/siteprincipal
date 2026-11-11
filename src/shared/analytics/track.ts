import { sendGTMEvent } from '@next/third-parties/google'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// Conversão do formulário de contato, enviada ao GTM (`generate_lead`, nome
// recomendado do GA4) e ao Meta Pixel (`Lead`, evento padrão). Só vai o
// assunto escolhido: nome, e-mail e telefone nunca saem para terceiros.
const trackLead = (subject: string): void => {
  try {
    // Leitura direta (módulo cliente): o valor já foi validado no build por
    // `@/shared/env/public`, e importar aquele módulo levaria o zod ao bundle.
    if (process.env.NEXT_PUBLIC_GTM_ID) {
      sendGTMEvent({ event: 'generate_lead', lead_subject: subject })
    }
    window.fbq?.('track', 'Lead', { content_category: subject })
  } catch {
    // Medição nunca pode quebrar o envio do formulário.
  }
}

export { trackLead }

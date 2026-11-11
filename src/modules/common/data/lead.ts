// Assuntos do formulário de contato. A rota `/api/lead` aceita só estes.
const LEAD_SUBJECTS = ['Quero ser parceiro', 'Tabela comercial', 'Suporte', 'Outro'] as const

type LeadSubject = (typeof LEAD_SUBJECTS)[number]

/** Ação declarada pelo widget do Turnstile; a rota recusa tokens de outra ação. */
const LEAD_ACTION = 'lead'

/** Limite da mensagem, igual ao `maxLength` do textarea. */
const LEAD_MESSAGE_MAX = 1000

export { LEAD_ACTION, LEAD_MESSAGE_MAX, LEAD_SUBJECTS, type LeadSubject }

import type { NextRequest } from 'next/server'

import { Resend } from 'resend'
import { z } from 'zod'

import { LeadNotificationEmail } from '@/modules/common/emails/LeadNotificationEmail'
import { LeadThankYouEmail } from '@/modules/common/emails/LeadThankYouEmail'
import { LEAD_MESSAGE_MAX, LEAD_SUBJECTS } from '@/modules/common/data/lead'
import { serverEnv } from '@/shared/env/server'
import { verifyTurnstile } from '@/shared/security/turnstile'

const trimmed = (max: number) => z.string().trim().max(max)

// Os mesmos limites do formulário. O endpoint é público, então não confia na
// validação do navegador: o e-mail do visitante recebe a mensagem de
// agradecimento, e um endereço qualquer aqui faria o site mandar e-mail a ele.
const leadSchema = z.object({
  name: trimmed(120).min(2),
  email: z.email().trim().max(254),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine((value) => /^\d{10,13}$/.test(value.replace(/\D/g, ''))),
  subject: z.enum(LEAD_SUBJECTS),
  message: trimmed(LEAD_MESSAGE_MAX).default(''),
  turnstileToken: z.string().max(2048).optional(),
})

const isHoneypotFilled = (body: unknown): boolean =>
  typeof body === 'object' &&
  body !== null &&
  'website' in body &&
  typeof body.website === 'string' &&
  body.website.trim() !== ''

// A Vercel preenche `x-real-ip` com o IP do visitante; o Turnstile usa como sinal extra.
const clientIp = (request: NextRequest): string | null =>
  request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for')?.split(',')[0] ?? null

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Corpo da requisição inválido.' }, { status: 400 })
  }

  // Honeypot: campo escondido que pessoas não veem e bots preenchem. Responde
  // como sucesso para o bot não perceber que foi descartado.
  if (isHoneypotFilled(body)) {
    return Response.json({ ok: true })
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: 'Campos inválidos.' }, { status: 400 })
  }
  const { name, email, phone, subject, message, turnstileToken } = parsed.data

  // Com a secret definida, o token é obrigatório. Sem ela (dev, CI, preview sem
  // chaves) o formulário segue funcionando, só que sem captcha.
  const turnstileSecret = serverEnv.TURNSTILE_SECRET_KEY
  if (turnstileSecret) {
    const ok = turnstileToken
      ? await verifyTurnstile(turnstileSecret, turnstileToken, clientIp(request))
      : false
    if (!ok) {
      return Response.json({ error: 'Verificação anti-robô falhou.' }, { status: 403 })
    }
  }

  // Criado por requisição: a chave é opcional no build (o Next avalia a rota
  // ao coletar a configuração) e o CI não a tem.
  const apiKey = serverEnv.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY ausente: /api/lead não consegue enviar e-mail.')
    return Response.json({ error: 'Envio indisponível no momento.' }, { status: 503 })
  }
  const resend = new Resend(apiKey)

  const from = serverEnv.EMAIL_FROM
  const contactEmail = serverEnv.CONTACT_EMAIL
  const firstName = name.split(' ')[0]

  const [notification, thankYou] = await Promise.allSettled([
    resend.emails.send({
      from,
      to: contactEmail,
      subject: `Novo lead: ${subject} — ${name}`,
      react: LeadNotificationEmail({ name, email, phone, subject, message }),
    }),
    resend.emails.send({
      from,
      to: email,
      replyTo: contactEmail,
      subject: `Recebemos sua mensagem, ${firstName}!`,
      react: LeadThankYouEmail({ name: firstName, phone, subject, message }),
    }),
  ])

  if (notification.status === 'rejected' || thankYou.status === 'rejected') {
    console.error('Resend error:', {
      notification: notification.status === 'rejected' ? notification.reason : null,
      thankYou: thankYou.status === 'rejected' ? thankYou.reason : null,
    })
    return Response.json({ error: 'Erro ao enviar email.' }, { status: 500 })
  }

  return Response.json({ ok: true })
}

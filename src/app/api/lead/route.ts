import type { NextRequest } from 'next/server'

import { Resend } from 'resend'

import { LeadNotificationEmail } from '@/modules/common/emails/LeadNotificationEmail'
import { LeadThankYouEmail } from '@/modules/common/emails/LeadThankYouEmail'
import { serverEnv } from '@/shared/env/server'

export async function POST(request: NextRequest) {
  // Criado por requisição: a chave é opcional no build (o Next avalia a rota
  // ao coletar a configuração) e o CI não a tem.
  const apiKey = serverEnv.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY ausente: /api/lead não consegue enviar e-mail.')
    return Response.json({ error: 'Envio indisponível no momento.' }, { status: 503 })
  }
  const resend = new Resend(apiKey)

  const body = await request.json()
  const { name, email, phone, subject, message } = body as {
    name: string
    email: string
    phone: string
    subject: string
    message?: string
  }

  if (!name?.trim() || !email?.trim() || !phone?.trim() || !subject?.trim()) {
    return Response.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
  }

  const trimmedMessage = message?.trim() ?? ''

  const from = serverEnv.EMAIL_FROM
  const contactEmail = serverEnv.CONTACT_EMAIL
  const firstName = name.split(' ')[0]

  const [notification, thankYou] = await Promise.allSettled([
    resend.emails.send({
      from,
      to: contactEmail,
      subject: `Novo lead: ${subject} — ${name}`,
      react: LeadNotificationEmail({ name, email, phone, subject, message: trimmedMessage }),
    }),
    resend.emails.send({
      from,
      to: email,
      replyTo: contactEmail,
      subject: `Recebemos sua mensagem, ${firstName}!`,
      react: LeadThankYouEmail({ name: firstName, phone, subject, message: trimmedMessage }),
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

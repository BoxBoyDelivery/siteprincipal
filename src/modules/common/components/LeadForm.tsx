'use client'

import { useMemo, useRef, useState, type JSX } from 'react'

import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'

import { SubjectSelect } from '@/modules/common/components/SubjectSelect'
import { LEAD_ACTION, LEAD_MESSAGE_MAX, LEAD_SUBJECTS } from '@/modules/common/data/lead'
import { ArrowIcon, CheckIcon } from '@/modules/common/icons'
import type { Errors, LeadField, Touched } from '@/modules/common/types'
import { maskPhone, validateEmail, validatePhone } from '@/modules/common/utils/form'
import { trackLead } from '@/shared/analytics/track'

const SUBJECTS: readonly string[] = LEAD_SUBJECTS

// Validada no build por `@/shared/env/public`. Sem ela o widget não aparece e a
// rota também não exige token (as duas chaves são definidas juntas).
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

/** Mensagem para o visitante conforme o status da resposta de `/api/lead`. */
const submitErrorMessage = (status: number): string => {
  if (status === 429) return 'Muitas tentativas seguidas. Aguarde alguns minutos e tente de novo.'
  if (status === 403) return 'Não conseguimos confirmar que você não é um robô. Tente novamente.'
  if (status === 400) return 'Confira os campos e tente novamente.'
  return 'Não foi possível enviar. Tente novamente em instantes.'
}

const BENEFITS: string[] = [
  'Resposta de um especialista em até 1 dia útil — sem robô, sem fila',
  'Teste sem fidelidade nos primeiros 30 dias e cancele quando quiser',
  'Setup técnico assistido para você decolar desde a primeira entrega',
  'Proposta sob medida para o tamanho e a rotina da sua operação',
]

const LeadForm = (): JSX.Element => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState(SUBJECTS[0])
  const [message, setMessage] = useState('')
  const [touched, setTouched] = useState<Touched>({})
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [submitError, setSubmitError] = useState('')
  // Honeypot: campo invisível; só bots o preenchem.
  const [website, setWebsite] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const turnstileRef = useRef<TurnstileInstance>(undefined)

  const errors: Errors = useMemo(
    () => ({
      name: name.trim().length < 2 ? 'Informe seu nome.' : '',
      email: !validateEmail(email) ? 'Email inválido.' : '',
      phone: !validatePhone(phone) ? 'Telefone inválido.' : '',
    }),
    [name, email, phone]
  )
  const hasError = (Object.values(errors) as string[]).some(Boolean)

  const onSubmit = async () => {
    setTouched({ name: true, email: true, phone: true })
    if (hasError) return
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setSubmitError('Aguarde a verificação anti-robô terminar e envie de novo.')
      return
    }
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message, website, turnstileToken }),
      })
      if (res.ok) {
        trackLead(subject)
        setDone(true)
      } else {
        setSubmitError(submitErrorMessage(res.status))
      }
    } catch {
      setSubmitError(submitErrorMessage(0))
    } finally {
      setSubmitting(false)
      // O token vale um envio só: pede um novo para a próxima tentativa.
      setTurnstileToken('')
      turnstileRef.current?.reset()
    }
  }

  const showErr = (k: LeadField): string => (touched[k] && errors[k] ? errors[k] : '')

  const reset = () => {
    setDone(false)
    setName('')
    setEmail('')
    setPhone('')
    setTouched({})
    setSubject(SUBJECTS[0])
    setMessage('')
  }

  return (
    <section id="formulario" className="bg-ink relative overflow-hidden py-20 text-white md:py-28">
      <div className="grid-dots absolute inset-0 opacity-60" />
      <div
        className="absolute -top-40 right-1/4 h-140 w-140 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #FF914D, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <div className="text-amber3 font-mono text-[11px] tracking-[0.22em] uppercase">
              Fale com o comercial
            </div>
            <h2
              className="font-display mt-3 leading-[1.02] font-bold tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3.2rem)' }}
            >
              Vamos elevar a <span className="amber-text">performance</span> da sua operação.
            </h2>
            <p className="mt-5 max-w-120 text-[16px] leading-relaxed text-white/70">
              Conte um pouco sobre a sua loja — volume de pedidos, região de entrega e o que mais
              aperta no dia a dia. Um especialista monta um plano sob medida e entra em contato em
              até 1 dia útil. Sem promessa vazia, sem script decorado e sem ligação fora de hora.
            </p>
            <div className="mt-8 space-y-3 text-[14px] text-white/80">
              {BENEFITS.map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="amber-bg text-ink grid h-5 w-5 shrink-0 place-items-center rounded-md">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="text-ink shadow-card relative rounded-3xl border border-white/5 bg-white p-6 md:p-8">
              {done && (
                <div className="absolute inset-0 grid place-items-center rounded-3xl bg-white p-8 text-center">
                  <div>
                    <div className="amber-bg text-ink shadow-amber-soft mx-auto grid h-14 w-14 place-items-center rounded-2xl">
                      <CheckIcon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display mt-5 text-2xl font-bold tracking-tight">
                      Recebido. Obrigado.
                    </h3>
                    <p className="text-muted-dark mt-2 max-w-90">
                      Nosso time comercial vai te chamar em{' '}
                      <strong>{phone || 'seu telefone'}</strong> em até 1 dia útil.
                    </p>
                    <button
                      onClick={reset}
                      className="text-amber1 hover:text-amber4 mt-6 text-sm font-medium transition"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="lf-name"
                    className="text-muted-dark mb-1.5 block text-[12px] font-medium"
                  >
                    Nome
                  </label>
                  <input
                    id="lf-name"
                    className="input"
                    type="text"
                    placeholder="Como devemos te chamar?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    aria-invalid={!!showErr('name')}
                    aria-describedby="lf-name-err"
                  />
                  {showErr('name') && (
                    <p id="lf-name-err" className="mt-1.5 text-[12px] text-rose-600">
                      {showErr('name')}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="lf-email"
                      className="text-muted-dark mb-1.5 block text-[12px] font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="lf-email"
                      className="input"
                      type="email"
                      placeholder="voce@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                      aria-invalid={!!showErr('email')}
                      aria-describedby="lf-email-err"
                    />
                    {showErr('email') && (
                      <p id="lf-email-err" className="mt-1.5 text-[12px] text-rose-600">
                        {showErr('email')}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lf-phone"
                      className="text-muted-dark mb-1.5 block text-[12px] font-medium"
                    >
                      Telefone
                    </label>
                    <input
                      id="lf-phone"
                      className="input"
                      inputMode="tel"
                      placeholder="(21) 90000-0000"
                      value={phone}
                      onChange={(e) => setPhone(maskPhone(e.target.value))}
                      onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                      aria-invalid={!!showErr('phone')}
                      aria-describedby="lf-phone-err"
                    />
                    {showErr('phone') && (
                      <p id="lf-phone-err" className="mt-1.5 text-[12px] text-rose-600">
                        {showErr('phone')}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lf-sub"
                    className="text-muted-dark mb-1.5 block text-[12px] font-medium"
                  >
                    Assunto
                  </label>
                  <SubjectSelect
                    id="lf-sub"
                    value={subject}
                    options={SUBJECTS}
                    onChange={setSubject}
                  />
                </div>

                <div>
                  <label
                    htmlFor="lf-msg"
                    className="text-muted-dark mb-1.5 block text-[12px] font-medium"
                  >
                    Mensagem <span className="text-muted">(opcional)</span>
                  </label>
                  <textarea
                    id="lf-msg"
                    className="input min-h-28 resize-y py-3"
                    rows={4}
                    maxLength={LEAD_MESSAGE_MAX}
                    placeholder="Conte um pouco sobre sua operação, dúvidas ou o que você precisa…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Fora da tela e fora do Tab: pessoas não veem, bots preenchem. */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                >
                  <label htmlFor="lf-website">Site</label>
                  <input
                    id="lf-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                {TURNSTILE_SITE_KEY && (
                  // `interaction-only`: invisível para a maioria; só aparece se a
                  // Cloudflare pedir um clique.
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={TURNSTILE_SITE_KEY}
                    options={{
                      action: LEAD_ACTION,
                      appearance: 'interaction-only',
                      language: 'pt-br',
                      size: 'flexible',
                      theme: 'light',
                    }}
                    onSuccess={setTurnstileToken}
                    onExpire={() => setTurnstileToken('')}
                    onError={() => setTurnstileToken('')}
                  />
                )}

                <button
                  type="button"
                  onClick={onSubmit}
                  disabled={submitting}
                  className="amber-bg text-ink hover:shadow-amber-soft mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl font-semibold transition-shadow disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <span className="border-ink/30 border-t-ink h-4 w-4 animate-spin rounded-full border-2" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar <ArrowIcon className="h-4 w-4" />
                    </>
                  )}
                </button>

                {submitError && (
                  <p className="text-center text-[12px] text-rose-500">{submitError}</p>
                )}
                <p className="text-muted pt-1 text-center text-[11px]">
                  Ao enviar você concorda com nossos termos e política de privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { LeadForm }

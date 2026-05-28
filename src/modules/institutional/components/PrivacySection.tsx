import type { JSX } from 'react'

import { CheckIcon } from '@/modules/common/icons'
import type { IconProps } from '@/modules/common/types'

/* ── Local icons ──────────────────────────────────────────────────────────── */

const UserIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
)

const MapPinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const CreditCardIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="6" y1="15" x2="10" y2="15" />
  </svg>
)

const ActivityIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 12h4l3-8 4 16 3-8h4" />
  </svg>
)

const LockIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const EyeIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EditIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z" />
  </svg>
)

const TrashIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6M9 6V4h6v2" />
  </svg>
)

const SendIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const XCircleIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15 9l-6 6M9 9l6 6" />
  </svg>
)

const MailIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
)

/* ── Data ─────────────────────────────────────────────────────────────────── */

const DATA_TYPES = [
  {
    Icon: UserIcon,
    title: 'Identidade',
    body: 'Nome completo e e-mail para criação e gestão da sua conta na plataforma.',
  },
  {
    Icon: MapPinIcon,
    title: 'Localização',
    body: 'Endereço de entrega e dados de GPS durante o uso ativo do serviço.',
  },
  {
    Icon: CreditCardIcon,
    title: 'Pagamento',
    body: 'Informações processadas por gateways certificados. Dados de cartão nunca armazenados.',
  },
  {
    Icon: ActivityIcon,
    title: 'Logs de uso',
    body: 'Registros de acesso e uso da plataforma para fins de segurança e auditoria.',
  },
]

const USAGES = [
  'Operar e melhorar nossa plataforma de entregas',
  'Processar pedidos, pagamentos e comunicações relacionadas',
  'Garantir a segurança da conta e prevenir fraudes',
  'Enviar notificações essenciais sobre o serviço',
  'Cumprir obrigações legais e regulatórias',
]

const SHARING = [
  {
    title: 'Entregadores parceiros',
    body: 'Somente as informações estritamente necessárias para a execução da entrega.',
  },
  {
    title: 'Processadores de pagamento',
    body: 'Gateways certificados PCI-DSS para processamento seguro de transações.',
  },
  {
    title: 'Autoridades competentes',
    body: 'Apenas quando exigido por ordem judicial ou determinação legal expressa.',
  },
]

const RIGHTS = [
  { label: 'Acesso', Icon: EyeIcon },
  { label: 'Correção', Icon: EditIcon },
  { label: 'Exclusão', Icon: TrashIcon },
  { label: 'Portabilidade', Icon: SendIcon },
  { label: 'Oposição', Icon: XCircleIcon },
  { label: 'Revogação', Icon: LockIcon },
]

/* ── Sub-components ───────────────────────────────────────────────────────── */

const SectionLabel = ({ num, title }: { num: string; title: string }) => (
  <div className="reveal mb-6 flex items-start gap-4">
    <span className="amber-bg text-ink shadow-amber-soft mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl font-mono text-[11px] font-bold tracking-wider">
      {num}
    </span>
    <h2
      className="font-display text-ink font-bold leading-snug tracking-tight"
      style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}
    >
      {title}
    </h2>
  </div>
)

/* ── Section ──────────────────────────────────────────────────────────────── */

const PrivacySection = (): JSX.Element => (
  <div className="space-y-16 md:space-y-20">

    {/* 1. Quais dados */}
    <div>
      <SectionLabel num="01" title="Quais dados coletamos" />
      <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-4" style={{ transitionDelay: '60ms' }}>
        {DATA_TYPES.map((d, i) => (
          <div
            key={i}
            className="fcard border-line flex flex-col rounded-2xl border bg-white p-5"
          >
            <span className="amber-bg text-ink shadow-amber-soft mb-4 grid h-9 w-9 place-items-center rounded-xl">
              <d.Icon className="h-4 w-4" />
            </span>
            <div className="font-display text-ink text-[15px] font-bold leading-snug">{d.title}</div>
            <p className="text-muted mt-1.5 text-[13.5px] leading-relaxed">{d.body}</p>
          </div>
        ))}
      </div>
    </div>

    {/* 2. Como utilizamos */}
    <div>
      <SectionLabel num="02" title="Como utilizamos seus dados" />
      <div className="reveal space-y-2.5" style={{ transitionDelay: '60ms' }}>
        {USAGES.map((u, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-2xl border border-line bg-paper-alt px-5 py-4"
          >
            <span className="amber-bg text-ink mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md">
              <CheckIcon className="h-3 w-3" />
            </span>
            <p className="text-muted-dark text-[14.5px] leading-relaxed">{u}</p>
          </div>
        ))}
      </div>
    </div>

    {/* 3. Compartilhamento */}
    <div>
      <SectionLabel num="03" title="Compartilhamento de dados" />
      <p className="reveal text-muted mb-5 text-[14.5px] leading-relaxed" style={{ transitionDelay: '40ms' }}>
        Não vendemos seus dados. Podemos compartilhá-los apenas com:
      </p>
      <div className="reveal grid gap-4 sm:grid-cols-3" style={{ transitionDelay: '80ms' }}>
        {SHARING.map((s, i) => (
          <div key={i} className="fcard border-line rounded-2xl border bg-white p-5">
            <span className="text-amber1/80 font-mono text-[10px] tracking-[0.18em] uppercase mb-3 block">
              /{String(i + 1).padStart(2, '0')}
            </span>
            <div className="font-display text-ink text-[15px] font-bold mb-2 leading-snug">{s.title}</div>
            <p className="text-muted text-[13.5px] leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </div>

    {/* 4. Direitos LGPD */}
    <div>
      <SectionLabel num="04" title="Seus direitos (LGPD)" />
      <p className="reveal text-muted mb-6 text-[14.5px] leading-relaxed" style={{ transitionDelay: '40ms' }}>
        Nos termos da Lei Geral de Proteção de Dados (Lei&nbsp;n.º&nbsp;13.709/2018):
      </p>
      <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-3" style={{ transitionDelay: '80ms' }}>
        {RIGHTS.map((r, i) => (
          <div
            key={i}
            className="fcard flex items-center gap-3 rounded-2xl border border-amber3/30 bg-amber3/5 px-4 py-3.5"
          >
            <span className="amber-bg text-ink grid h-6 w-6 shrink-0 place-items-center rounded-lg">
              <r.Icon className="h-3 w-3" />
            </span>
            <span className="font-display text-ink text-[14px] font-bold">{r.label}</span>
          </div>
        ))}
      </div>
      <div
        className="reveal mt-4 flex items-start gap-3 rounded-2xl border border-line bg-paper-alt px-5 py-4"
        style={{ transitionDelay: '120ms' }}
      >
        <MailIcon className="h-4 w-4 text-amber1 mt-0.5 shrink-0" />
        <p className="text-muted text-[13.5px] leading-relaxed">
          Para exercer esses direitos:{' '}
          <a
            href="mailto:contato@boxboydelivery.com"
            className="amber-text font-semibold transition-opacity hover:opacity-80"
          >
            contato@boxboydelivery.com
          </a>
        </p>
      </div>
    </div>

    {/* 5. Retenção e segurança */}
    <div>
      <SectionLabel num="05" title="Retenção e segurança" />
      <div
        className="reveal overflow-hidden rounded-3xl border border-line"
        style={{ transitionDelay: '60ms' }}
      >
        <div className="fviz relative h-24 md:h-28">
          <div className="fviz-grid" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-display select-none font-bold leading-none tracking-tight text-amber3/[0.18]"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)' }}
            >
              AES-256
            </span>
          </div>
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="amber-bg text-ink shadow-amber-soft grid h-7 w-7 place-items-center rounded-lg">
              <LockIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-amber1/90 font-mono text-[10px] tracking-[0.18em] uppercase">
              Segurança
            </span>
          </div>
          <div className="border-amber3/40 absolute top-3 right-3 flex items-center gap-1.5 rounded-md border bg-white/90 px-2 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-muted-dark font-mono text-[9px] tracking-wider uppercase">
              Servidores · Brasil
            </span>
          </div>
        </div>
        <div className="bg-white px-6 py-5 md:px-8 md:py-6">
          <p className="text-muted-dark text-[14.5px] leading-relaxed">
            Os dados são armazenados em servidores com criptografia{' '}
            <span className="font-semibold text-ink">AES-256</span>, localizados no{' '}
            <span className="font-semibold text-ink">Brasil</span>. Retemos seus dados pelo período
            mínimo necessário para a finalidade do tratamento ou conforme exigido pela legislação
            vigente. Após esse período, os dados são{' '}
            <span className="font-semibold text-ink">anonimizados ou excluídos com segurança</span>.
          </p>
        </div>
      </div>
    </div>

  </div>
)

export { PrivacySection }

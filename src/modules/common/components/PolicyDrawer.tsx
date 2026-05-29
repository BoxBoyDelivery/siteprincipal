'use client'

import type { JSX } from 'react'

import { useEffect, useRef, useState } from 'react'

import { ArrowIcon, CheckIcon, LogoIcon } from '@/modules/common/icons'

const STORAGE_KEY = 'bb_policy_ok'

type Tab = 'privacy' | 'terms'

const PolicyDrawer = (): JSX.Element | null => {
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>('privacy')
  const [accepted, setAccepted] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {}
    setAccepted(true)
    setTimeout(() => setVisible(false), 320)
  }

  useEffect(() => {
    const id = setTimeout(() => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
      } catch {
        setVisible(true)
      }
    }, 0)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0
  }, [activeTab])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Políticas e Termos de Uso"
      className="fixed inset-0 z-40 flex items-end justify-center"
    >
      {/* Backdrop */}
      <div className="bg-ink-deep/30 absolute inset-0 backdrop-blur-[2px]" aria-hidden="true" />

      {/* Drawer panel */}
      <div
        className={[
          'border-line relative w-full max-w-2xl rounded-t-[28px] border-x border-t bg-white',
          'flex flex-col shadow-(--shadow-card)',
          'transition-transform duration-300 ease-out',
          accepted ? 'translate-y-full' : 'translate-y-0',
        ].join(' ')}
        style={{ maxHeight: '88dvh' }}
      >
        {/* Handle bar */}
        <div className="flex shrink-0 justify-center pt-3 pb-1">
          <div className="bg-line h-1 w-10 rounded-full" />
        </div>

        {/* Header */}
        <div className="border-line flex shrink-0 items-center justify-between border-b px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="amber-bg shadow-amber-soft grid h-8 w-8 place-items-center rounded-xl">
              <LogoIcon className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-ink text-[14px] leading-none font-semibold">BoxBoy</p>
              <p className="text-muted mt-0.5 font-mono text-[10px] tracking-[0.18em] uppercase">
                Políticas &amp; Termos
              </p>
            </div>
          </div>
          <div className="border-amber3/40 bg-paper-alt flex items-center gap-1.5 rounded-md border px-2 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-muted-dark font-mono text-[9px] tracking-wider uppercase">
              leitura obrigatória
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-line flex shrink-0 border-b px-5">
          {(['privacy', 'terms'] as Tab[]).map((tab) => {
            const label = tab === 'privacy' ? 'Privacidade' : 'Termos de Uso'
            const isActive = activeTab === tab
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={[
                  'relative mr-6 py-3 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors',
                  isActive ? 'text-ink' : 'text-muted hover:text-muted-dark',
                ].join(' ')}
              >
                {label}
                {isActive && (
                  <span className="amber-bg absolute inset-x-0 bottom-0 h-0.5 rounded-t-full" />
                )}
              </button>
            )
          })}
        </div>

        {/* Scrollable content */}
        <div ref={contentRef} className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
          {activeTab === 'privacy' ? <PrivacyContent /> : <TermsContent />}
        </div>

        {/* Footer */}
        <div className="border-line shrink-0 border-t bg-white px-5 py-4">
          <p className="text-muted mb-3 text-[12px] leading-relaxed">
            Ao continuar navegando na plataforma BoxBoy, você confirma que leu e concorda com nossas
            políticas de privacidade e termos de uso.
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={accept}
              className="amber-bg shadow-amber-soft text-ink flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              <CheckIcon className="h-4 w-4" />
              Aceitar e continuar
            </button>
            <a
              href="/institucional"
              className="border-line text-muted hover:text-ink flex items-center gap-1.5 rounded-xl border px-4 py-3 text-[13px] transition-colors"
            >
              Ver completo
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Tab content ──────────────────────────────────────────────────────────── */

const Section = ({
  num,
  title,
  children,
}: {
  num: string
  title: string
  children: React.ReactNode
}) => (
  <section className="mb-6">
    <div className="mb-2 flex items-center gap-2">
      <span className="amber-bg text-ink grid h-5 w-5 shrink-0 place-items-center rounded-md text-[9px] font-bold">
        {num}
      </span>
      <h3 className="font-display text-ink text-[14px] font-bold tracking-tight">{title}</h3>
    </div>
    <div className="text-muted-dark space-y-2 pl-7 text-[13.5px] leading-relaxed">{children}</div>
  </section>
)

const PrivacyContent = () => (
  <div>
    <div className="fviz mb-5 rounded-2xl p-4">
      <div className="fviz-grid" />
      <p className="text-muted-dark relative text-[13px] leading-relaxed">
        A BoxBoy respeita sua privacidade e está comprometida com a proteção dos seus dados
        pessoais, em conformidade com a{' '}
        <strong className="text-ink">
          Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)
        </strong>
        .
      </p>
    </div>

    <Section num="01" title="Dados que coletamos">
      <p>
        Nome completo, e-mail, telefone e dados de navegação fornecidos ao preencher formulários ou
        usar nossa plataforma.
      </p>
      <p>
        Dados de localização do entregador durante o turno ativo, exclusivamente para despacho de
        pedidos.
      </p>
    </Section>

    <Section num="02" title="Finalidade do tratamento">
      <p>Operação e melhoria contínua da plataforma de delivery.</p>
      <p>Comunicações comerciais e institucionais, sempre com opção de descadastro.</p>
      <p>Cumprimento de obrigações legais e regulatórias.</p>
    </Section>

    <Section num="03" title="Compartilhamento">
      <p>
        Não vendemos seus dados. Compartilhamos apenas com parceiros operacionais essenciais
        (processadores de pagamento, provedores de infra) sob contratos de confidencialidade.
      </p>
    </Section>

    <Section num="04" title="Seus direitos">
      <p>
        Acesso, correção, portabilidade, exclusão e revogação do consentimento a qualquer momento
        pelo e-mail <strong className="text-ink">privacidade@boxboydelivery.com</strong>.
      </p>
    </Section>

    <Section num="05" title="Retenção">
      <p>
        Dados operacionais são mantidos por até 5 anos conforme exigências fiscais e legais, após o
        encerramento da relação contratual.
      </p>
    </Section>
  </div>
)

const TermsContent = () => (
  <div>
    <div className="fviz mb-5 rounded-2xl p-4">
      <div className="fviz-grid" />
      <p className="text-muted-dark relative text-[13px] leading-relaxed">
        Estes Termos regem o uso da plataforma BoxBoy por{' '}
        <strong className="text-ink">lojistas</strong> e{' '}
        <strong className="text-ink">entregadores</strong> no território nacional.
      </p>
    </div>

    <Section num="01" title="Elegibilidade">
      <p>
        Uso restrito a pessoas jurídicas ou físicas maiores de 18 anos com documentação válida. A
        BoxBoy pode recusar ou encerrar contas que violem estes termos.
      </p>
    </Section>

    <Section num="02" title="Responsabilidades do lojista">
      <p>Manter informações cadastrais atualizadas e precisas.</p>
      <p>Respeitar os prazos e condições de entrega acordados com clientes finais.</p>
      <p>Não utilizar a plataforma para fins ilícitos.</p>
    </Section>

    <Section num="03" title="Responsabilidades do entregador">
      <p>Manter documentação veicular e habilitação em situação regular.</p>
      <p>Zelar pela integridade das encomendas durante o transporte.</p>
      <p>Cumprir os SLAs de coleta e entrega definidos em cada pedido.</p>
    </Section>

    <Section num="04" title="Propriedade intelectual">
      <p>
        Todo o conteúdo, marca e software da BoxBoy são protegidos por lei. É vedada a reprodução
        sem autorização expressa por escrito.
      </p>
    </Section>

    <Section num="05" title="Limitação de responsabilidade">
      <p>
        A BoxBoy não se responsabiliza por perdas indiretas decorrentes de falhas de terceiros, caso
        fortuito ou força maior.
      </p>
    </Section>

    <Section num="06" title="Foro">
      <p>
        Fica eleito o foro da Comarca do Rio de Janeiro – RJ para dirimir quaisquer controvérsias
        oriundas destes Termos.
      </p>
    </Section>
  </div>
)

export { PolicyDrawer }

import type { JSX } from 'react'

/* ── Data ─────────────────────────────────────────────────────────────────── */

interface Article {
  num: string
  title: string
  content: JSX.Element
}

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-ink">{children}</span>
)

const AmberMark = ({ children }: { children: React.ReactNode }) => (
  <mark className="amber-text bg-transparent font-bold not-italic">{children}</mark>
)

const ARTICLES: Article[] = [
  {
    num: '01',
    title: 'Aceitação dos Termos',
    content: (
      <p className="text-muted-dark text-[14.5px] leading-relaxed">
        Ao acessar ou utilizar a plataforma Box Delivery, você concorda com estes Termos e Condições.
        Se você não concorda com qualquer parte destes termos,{' '}
        <Highlight>não deve utilizar nossos serviços</Highlight>.
      </p>
    ),
  },
  {
    num: '02',
    title: 'Descrição do Serviço',
    content: (
      <div className="space-y-2">
        <p className="text-muted-dark text-[14.5px] leading-relaxed mb-3">
          A <Highlight>Box Delivery S.A.</Highlight> oferece uma plataforma SaaS de gestão de
          entregas para lojistas e entregadores autônomos. Nossos serviços incluem:
        </p>
        <ul className="space-y-2 pl-1">
          {[
            'Sistema de gestão de pedidos e entregas para lojistas',
            'Aplicativo para entregadores parceiros cadastrados',
            'Painel administrativo com relatórios e métricas',
            'API para integração com sistemas de terceiros',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[14px] text-muted-dark">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-amber1 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Obrigações do Usuário',
    content: (
      <div className="space-y-2">
        <p className="text-muted-dark text-[14.5px] leading-relaxed mb-3">
          Ao utilizar nossos serviços, você se compromete a:
        </p>
        <ul className="space-y-2 pl-1">
          {[
            'Fornecer informações verdadeiras e manter seus dados atualizados',
            'Manter a confidencialidade das suas credenciais de acesso',
            'Não utilizar a plataforma para fins ilícitos ou fraudulentos',
            'Respeitar os direitos de outros usuários e parceiros',
            'Cumprir com todas as leis e regulamentos aplicáveis',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[14px] text-muted-dark">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-amber1 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    num: '04',
    title: 'Planos e Pagamentos',
    content: (
      <p className="text-muted-dark text-[14.5px] leading-relaxed">
        Os planos de assinatura são cobrados{' '}
        <AmberMark>mensalmente ou anualmente</AmberMark>, conforme escolha do usuário. O
        cancelamento pode ser feito a qualquer momento,{' '}
        <Highlight>sem multa</Highlight>, com efeito ao final do período já pago. Não realizamos
        reembolsos proporcionais por períodos não utilizados, salvo nos casos previstos no{' '}
        <Highlight>Código de Defesa do Consumidor</Highlight>.
      </p>
    ),
  },
  {
    num: '05',
    title: 'Limitação de Responsabilidade',
    content: (
      <p className="text-muted-dark text-[14.5px] leading-relaxed">
        A Box Delivery não se responsabiliza por danos indiretos, incidentais ou consequenciais
        decorrentes do uso da plataforma. Nossa responsabilidade total está limitada ao valor pago
        pelo usuário nos últimos <AmberMark>3 (três) meses</AmberMark> de assinatura.
      </p>
    ),
  },
  {
    num: '06',
    title: 'Propriedade Intelectual',
    content: (
      <p className="text-muted-dark text-[14.5px] leading-relaxed">
        Todo o conteúdo da plataforma — incluindo software, logotipos, textos e interfaces — é de
        propriedade exclusiva da <Highlight>Box Delivery S.A.</Highlight> e protegido pela
        legislação de propriedade intelectual brasileira. É vedada a reprodução ou uso não
        autorizado de qualquer elemento.
      </p>
    ),
  },
  {
    num: '07',
    title: 'Lei Aplicável e Foro',
    content: (
      <p className="text-muted-dark text-[14.5px] leading-relaxed">
        Estes Termos são regidos pelas leis da{' '}
        <Highlight>República Federativa do Brasil</Highlight>. Fica eleito o foro da Comarca de{' '}
        <AmberMark>São Paulo/SP</AmberMark> para resolução de quaisquer litígios, com renúncia
        expressa a qualquer outro, por mais privilegiado que seja.
      </p>
    ),
  },
]

/* ── Section ──────────────────────────────────────────────────────────────── */

const TermsSection = (): JSX.Element => (
  <div>
    {/* Header */}
    <div className="reveal mb-10 flex items-start gap-4">
      <span className="amber-bg text-ink shadow-amber-soft mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl font-mono text-[11px] font-bold tracking-wider">
        T
      </span>
      <div>
        <h2
          className="font-display text-ink font-bold leading-snug tracking-tight"
          style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}
        >
          Termos de Uso
        </h2>
        <p className="text-muted mt-1.5 text-[14px]">
          Box Delivery S.A. · Vigência a partir de <span className="font-semibold">Janeiro 2025</span>
        </p>
      </div>
    </div>

    {/* Articles */}
    <div className="space-y-px">
      {ARTICLES.map((a, i) => (
        <div
          key={a.num}
          className="reveal group relative"
          style={{ transitionDelay: `${i * 55}ms` }}
        >
          {/* connector line */}
          {i < ARTICLES.length - 1 && (
            <div className="absolute left-[15px] top-[52px] bottom-0 w-px bg-line z-0 md:left-[19px]" />
          )}

          <div className="relative z-10 flex gap-5 rounded-2xl p-5 transition-colors duration-200 hover:bg-paper-alt md:gap-6 md:p-6">
            {/* number bubble */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="border-amber3/40 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white font-mono text-[11px] font-bold text-amber1 group-hover:border-amber3 group-hover:bg-amber3/10 transition-colors">
                {a.num}
              </div>
            </div>

            <div className="flex-1 pb-4">
              <h3 className="font-display text-ink text-[17px] font-bold leading-snug tracking-tight mb-3 md:text-[18px]">
                {a.title}
              </h3>
              {a.content}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Footer note */}
    <div
      className="reveal mt-8 flex items-center gap-3 rounded-2xl border border-line bg-paper-alt px-5 py-4"
      style={{ transitionDelay: `${ARTICLES.length * 55}ms` }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
      <p className="text-muted text-[13px] leading-relaxed">
        Dúvidas sobre os termos?{' '}
        <a
          href="mailto:contato@boxboydelivery.com"
          className="amber-text font-semibold transition-opacity hover:opacity-80"
        >
          contato@boxboydelivery.com
        </a>
      </p>
    </div>
  </div>
)

export { TermsSection }

import type { JSX } from 'react'

import { FBIcon, IGIcon, INIcon, LogoIcon, YTIcon } from '@/modules/common/icons'
import type { IconComponent } from '@/modules/common/types'

interface FooterColumn {
  title: string
  links: Array<{ label: string; href: string; muted?: boolean }>
}

const COLUMNS: FooterColumn[] = [
  {
    title: 'Contato',
    links: [
      { label: 'contato@boxboydelivery.com', href: 'mailto:contato@boxboydelivery.com' },
      { label: '(21) 9 7197-8677', href: 'tel:+5521971978677' },
      { label: 'Rio de Janeiro · RJ', href: '#', muted: true },
    ],
  },
  {
    title: 'Plataforma',
    links: [
      { label: 'Recursos', href: '#plataforma' },
      { label: 'Parceiros', href: '#parceiros' },
      { label: 'Planos', href: '#planos' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Termos', href: '#' },
    ],
  },
]

const SOCIAL: Array<{ Icon: IconComponent; label: string }> = [
  { Icon: IGIcon, label: 'Instagram' },
  { Icon: FBIcon, label: 'Facebook' },
  { Icon: INIcon, label: 'LinkedIn' },
  { Icon: YTIcon, label: 'YouTube' },
]

const Footer = (): JSX.Element => {
  return (
    <footer id="contato" className="bg-ink-deep text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-12">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <LogoIcon className="h-9 w-9" />
              <span className="font-display text-xl font-bold tracking-tight">BoxBoy</span>
            </a>
            <p className="mt-5 max-w-[320px] text-[14px] leading-relaxed text-white/55">
              Performance logística last-mile para o crescimento do seu negócio. Operando no Rio de
              Janeiro.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="hover:text-ink hover:border-amber2 hover:bg-amber2 grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white/70 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-5 font-mono text-[12px] text-white/40">@BoxBoyDelivery</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-4 font-mono text-[11px] tracking-[0.22em] text-white/45 uppercase">
                {col.title}
              </div>
              <ul className="space-y-2.5 text-[14px]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.muted ? (
                      <span className="text-white/55">{l.label}</span>
                    ) : (
                      <a href={l.href} className="hover:text-amber3 text-white/85 transition">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-[12px] text-white/45">
            © {new Date().getFullYear()} BoxBoy. Todos os direitos reservados.
          </p>

          <div className="ml-auto flex items-center gap-1.5">
            <span className="bg-amber3 h-1.5 w-1.5 animate-pulse rounded-full" />
            <p className="font-mono text-[11px] tracking-[0.22em] text-white/30 uppercase">
              built in Rio · for the food service
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }

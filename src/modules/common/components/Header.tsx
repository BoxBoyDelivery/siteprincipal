'use client'

import type { JSX } from 'react'

import { useRouter } from 'next/navigation'

import { BrandLogo } from '@/modules/common/components/BrandLogo'
import { useScrolled } from '@/modules/common/hooks/useScrolled'
import { ArrowIcon } from '@/modules/common/icons'
import { scrollToId } from '@/modules/common/utils/form'

const NAV_ITEMS: Array<{ id: string; label: string }> = [
  { id: 'plataforma', label: 'Plataforma' },
  { id: 'parceiros', label: 'Parceiros' },
  { id: 'planos', label: 'Planos' },
  { id: 'contato', label: 'Contato' },
]

const Header = (): JSX.Element => {
  const router = useRouter()

  const handleNavigateInstitutionalPage = (): void => {
    router.push('/institucional')
  }

  const scrolled = useScrolled(8)
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-ink/70 pointer-events-auto translate-y-0 border-b border-white/10 opacity-100 backdrop-blur-md'
          : 'pointer-events-none -translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="group flex items-center" aria-label="BoxBoy">
          <BrandLogo size={80} className="h-8 w-8 md:h-20 md:w-20" />
        </a>

        <nav className="hidden items-center gap-9 text-sm text-white/75 lg:flex">
          {NAV_ITEMS.map((n) => (
            <button key={n.id} onClick={scrollToId(n.id)} className="transition hover:text-white">
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            className="hidden h-10 items-center rounded-xl border border-white/15 px-4 text-sm text-white/90 transition hover:border-white/35 hover:bg-white/5 md:inline-flex"
            onClick={handleNavigateInstitutionalPage}
          >
            Institucional
          </button>
          <button
            type="button"
            onClick={scrollToId('formulario')}
            className="amber-bg text-ink hover:shadow-amber-soft inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-semibold transition-shadow md:h-11 md:px-5"
          >
            Quero ser parceiro <ArrowIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}

export { Header }

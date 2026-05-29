'use client'

import type { JSX } from 'react'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { CheckIcon, ChevronIcon } from '@/modules/common/icons'

interface Props {
  id?: string
  value: string
  options: readonly string[]
  onChange: (value: string) => void
}

const SubjectSelect = ({ id, value, options, onChange }: Props): JSX.Element => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleSelect = (opt: string) => {
    onChange(opt)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        id={id}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          'input group flex w-full cursor-pointer items-center justify-between',
          'focus-visible:ring-amber3/40 focus:outline-none focus-visible:ring-2',
          !value && 'text-muted'
        )}
      >
        <span>{value}</span>
        <ChevronIcon
          className={cn(
            'text-muted h-4 w-4 shrink-0 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className={cn(
            'absolute top-full left-0 z-50 mt-1.5 w-full overflow-hidden',
            'border-line rounded-xl border bg-white',
            'shadow-[0_8px_30px_-8px_rgba(0,0,0,0.18),0_2px_8px_-2px_rgba(0,0,0,0.08)]',
            'animate-in fade-in-0 zoom-in-[0.97] slide-in-from-top-1 duration-150'
          )}
        >
          <div className="p-1.5">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                role="option"
                aria-selected={opt === value}
                onClick={() => handleSelect(opt)}
                className={cn(
                  'relative flex w-full cursor-pointer items-center justify-between rounded-lg select-none',
                  'text-muted-dark px-3.5 py-2.5 text-[14px] outline-none',
                  'transition-colors duration-100',
                  'hover:bg-amber1/8 focus:bg-amber1/8',
                  opt === value && 'text-amber1 font-semibold'
                )}
              >
                <span>{opt}</span>
                {opt === value && <CheckIcon className="text-amber1 h-3.5 w-3.5" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export { SubjectSelect }

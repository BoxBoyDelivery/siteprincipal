import type { JSX } from 'react'

import Image, { type StaticImageData } from 'next/image'

import { cn } from '@/utils/cn'
import { DominosPizzaIcon, LosGuacamolesIcon, SpoletoIcon } from '@/modules/common/icons'
import { chinaInBox, clubeVerde, koni, laMole } from '@/modules/common/images'
import type { IconComponent, PartnerSlot } from '@/modules/common/types'

/** Logos vetoriais, desenhados como SVG inline. */
const partnerLogos: Record<string, IconComponent> = {
  DominosPizzaIcon,
  LosGuacamolesIcon,
  SpoletoIcon,
}

/** Logos em bitmap, servidos como arquivo pelo `next/image` (nunca em base64 no HTML). */
const partnerImages: Record<string, StaticImageData> = {
  ChinaInBoxIcon: chinaInBox,
  ClubeVerdeIcon: clubeVerde,
  KoniIcon: koni,
  LaMoleIcon: laMole,
}

const LOGO_CLASS =
  'text-ink h-auto max-h-10 w-auto max-w-32 opacity-65 grayscale transition duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0'

interface PartnerChipProps {
  slot: PartnerSlot
}

const PartnerChip = ({ slot }: PartnerChipProps): JSX.Element => {
  const Logo = partnerLogos[slot.id]
  const image = partnerImages[slot.id]

  return (
    <div
      data-partner-slot={slot.id}
      title={slot.label}
      className={cn(
        'border-line group flex h-18 w-50 shrink-0 items-center justify-center rounded-2xl border bg-white px-7 select-none',
        slot.chipClassName
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={slot.label}
          sizes="192px"
          className={cn(LOGO_CLASS, slot.iconClassName)}
        />
      ) : Logo ? (
        <Logo role="img" aria-label={slot.label} className={cn(LOGO_CLASS, slot.iconClassName)} />
      ) : (
        <span className="font-display text-ink text-[15px] leading-none font-bold tracking-tight">
          {slot.label}
        </span>
      )}
    </div>
  )
}

export { PartnerChip }

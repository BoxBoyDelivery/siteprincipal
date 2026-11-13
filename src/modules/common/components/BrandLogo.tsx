import type { JSX } from 'react'

import Image from 'next/image'

import { boxBoyLogo } from '@/modules/common/images'

interface BrandLogoProps {
  className?: string
  /** Largura máxima exibida, em px, para o `srcset` não baixar mais que o necessário. */
  size: number
}

const BrandLogo = ({ className, size }: BrandLogoProps): JSX.Element => {
  return <Image src={boxBoyLogo} alt="BoxBoy" sizes={`${size}px`} className={className} />
}

export { BrandLogo }

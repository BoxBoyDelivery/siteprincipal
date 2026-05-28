import type { JSX } from 'react'

import type { Metadata } from 'next'

import { InstitucionalPage } from '@/modules/institutional/InstitucionalPage'

export const metadata: Metadata = {
  title: 'Institucional',
  description:
    'Políticas de privacidade, cookies, termos de uso e informações jurídicas da Box Delivery S.A.',
}

const InstitucionalRoute = (): JSX.Element => <InstitucionalPage />

export default InstitucionalRoute

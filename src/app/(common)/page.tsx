import type { JSX } from 'react'

import { LandingPage } from '@/modules/common/LandingPage'
import { JsonLd } from '@/shared/seo/JsonLd'
import { serviceSchema } from '@/shared/seo/schema'

const HomePage = (): JSX.Element => (
  <>
    <JsonLd data={serviceSchema} />
    <LandingPage />
  </>
)

export default HomePage

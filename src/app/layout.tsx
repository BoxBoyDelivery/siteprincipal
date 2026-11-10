import type { Metadata, Viewport } from 'next'

import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { PolicyDrawer } from '@/modules/common/components/PolicyDrawer'
import { WelcomePopup } from '@/modules/common/components/WelcomePopup'
import { MetaPixel } from '@/shared/analytics/MetaPixel'
import { JsonLd } from '@/shared/seo/JsonLd'
import { organizationSchema, websiteSchema } from '@/shared/seo/schema'
import { OG_IMAGE, SITE, SITE_URL } from '@/shared/seo/site'
import '@/styles/globals.css'
import { cn } from '@/utils/cn'
import { inter, jetbrainsMono, spaceGrotesk } from '@/utils/fonts'

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim()
// Container do Google Tag Manager (GA4, Google Ads etc. são configurados no
// painel do GTM). O Meta Pixel fica no código: não crie tag do Pixel no GTM,
// ou cada PageView/Lead será contado duas vezes.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim()
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION?.trim()

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.legalName,
  category: 'business',

  // Canonical da home. Cada página declara o seu — sem isso ela herdaria este
  // e diria ao Google que é uma cópia de `/`.
  alternates: { canonical: '/' },

  // O favicon era o PNG da marca em 4375×4375 (4,5 MB), baixado em toda visita.
  icons: {
    icon: [
      { url: '/assets/boxboy.ico', sizes: 'any' },
      { url: '/assets/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: '/',
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.shortDescription,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.shortDescription,
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // Posse do domínio no Google Search Console (método "tag HTML"). Sem a
  // variável nenhuma `<meta>` é emitida.
  ...(GOOGLE_SITE_VERIFICATION && { verification: { google: GOOGLE_SITE_VERIFICATION } }),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={SITE.lang}
      className={cn('antialiased', inter.variable, spaceGrotesk.variable, jetbrainsMono.variable)}
    >
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body className="font-sans">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
        <WelcomePopup />
        <PolicyDrawer />
        <Analytics />
        <SpeedInsights />
        {META_PIXEL_ID && <MetaPixel pixelId={META_PIXEL_ID} />}
      </body>
    </html>
  )
}

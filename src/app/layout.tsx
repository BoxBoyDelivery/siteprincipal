import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'

import { PolicyDrawer } from '@/modules/common/components/PolicyDrawer'
import { WelcomePopup } from '@/modules/common/components/WelcomePopup'
import { JsonLd } from '@/shared/seo/JsonLd'
import { organizationSchema, websiteSchema } from '@/shared/seo/schema'
import { OG_IMAGE, SITE, SITE_URL } from '@/shared/seo/site'
import '@/styles/globals.css'
import { cn } from '@/utils/cn'
import { inter, jetbrainsMono, spaceGrotesk } from '@/utils/fonts'

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''
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
      <body className="font-sans">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
        <WelcomePopup />
        <PolicyDrawer />
        <Analytics />
        <SpeedInsights />
        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NextIntlClientProvider } from 'next-intl';
import { Analytics } from "@vercel/analytics/next"
// import {getLocale} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GandhadaGudi Garden - Best GandhadaGudi Garden Resort",
  description: "Experience the best resort in GandhadaGudi Garden - GandhadaGudi Garden GandhadaGudi Garden Resorts",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const locale = await getLocale();
  return (
    // <html lang={locale}>
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <title>{String(metadata.title)}</title>
        <meta
          name="description"
          content={metadata.description || "Default description"}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}

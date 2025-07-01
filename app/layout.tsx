import { Inter } from "next/font/google"
import "./globals.css"
import { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://rkcoaching.com"),
  title: {
    default: "RK Coaching App - Maharastras's #1 Coaching Platform",
    template: "%s | RK Coaching App",
  },
  description:
    "India's most trusted coaching app with 20M+ students. Expert educators, AI-powered learning, live classes for NEET, JEE, UPSC preparation. 95% success rate.",
  keywords:
    "NEET coaching, JEE coaching, UPSC preparation, online coaching app, competitive exams India, educational app",
  authors: [{ name: "RK Coaching Team", url: "https://rkcoaching.com" }],
  creator: "RK Coaching App",
  publisher: "RK Coaching App",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

interface ReactLayoutPage{
  children: ReactNode
}

export default function RootLayout({ children }: ReactLayoutPage) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#256576" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "RK Coaching App",
              description: "India's most trusted coaching app for NEET, JEE, UPSC preparation",
              url: "https://rkcoaching.com",
              logo: "https://rkcoaching.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-98765-43210",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.youtube.com/rkcoaching",
                "https://www.instagram.com/rkcoachingapp",
                "https://twitter.com/rkcoachingapp",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "50000",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}

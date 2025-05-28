import RKLandingPage from "./RKLandingPage"

export const metadata = {
  title: "RK Coaching App - India's #1 NEET/JEE Coaching Platform | 20M+ Students",
  description:
    "Join 20M+ students who cracked NEET/JEE with RK Coaching App. Expert educators, AI-powered learning, live classes, and 95% success rate. Download free now!",
  keywords:
    "NEET coaching, JEE coaching, online coaching app, competitive exam preparation, UPSC coaching, board exam preparation, India coaching app",
  authors: [{ name: "RK Coaching Team" }],
  creator: "RK Coaching App",
  publisher: "RK Coaching App",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rkcoaching.com",
    title: "RK Coaching App - India's #1 NEET/JEE Coaching Platform",
    description:
      "Join 20M+ students who cracked NEET/JEE with RK Coaching App. Expert educators, AI-powered learning, and 95% success rate.",
    siteName: "RK Coaching App",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RK Coaching App - India's Most Trusted Educational Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Coaching App - India's #1 NEET/JEE Coaching Platform",
    description: "Join 20M+ students who cracked NEET/JEE with RK Coaching App. Download free now!",
    images: ["/twitter-image.jpg"],
    creator: "@rkcoachingapp",
  },
  alternates: {
    canonical: "https://rkcoaching.com",
  },
}

export default function HomePage() {
  return <RKLandingPage />
}

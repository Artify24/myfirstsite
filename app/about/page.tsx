import AboutClientPage from "./AboutClientPage"

export const metadata = {
  title: "About RK Coaching - Our Story, Mission & Vision | India's Leading EdTech",
  description:
    "Learn about RK Coaching's journey from 2018 to becoming India's most trusted educational platform. Meet our team, values, and mission to democratize quality education.",
  keywords:
    "about RK coaching, educational platform India, online learning company, EdTech startup, coaching app history",
  openGraph: {
    title: "About RK Coaching - Our Story, Mission & Vision",
    description:
      "Learn about RK Coaching's journey to becoming India's most trusted educational platform with 20M+ students.",
    url: "https://rkcoaching.com/about",
    images: ["/about-og-image.jpg"],
  },
  alternates: {
    canonical: "https://rkcoaching.com/about",
  },
}

export default function AboutPage() {
  return <AboutClientPage />
}

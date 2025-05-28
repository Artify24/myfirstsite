import ContactPageClient from "./ContactPageClient"

export const metadata = {
  title: "Contact RK Coaching - Get Support, Visit Branches | 24/7 Help Available",
  description:
    "Contact RK Coaching for support, queries, or visit our branches across India. 24/7 WhatsApp support, phone, email, and live chat available.",
  keywords: "contact RK coaching, customer support, coaching branches India, WhatsApp support, educational help",
  openGraph: {
    title: "Contact RK Coaching - Get Support & Visit Branches",
    description: "Contact RK Coaching for support or visit our branches across India. 24/7 help available.",
    url: "https://rkcoaching.com/contact",
    images: ["/contact-og-image.jpg"],
  },
  alternates: {
    canonical: "https://rkcoaching.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}

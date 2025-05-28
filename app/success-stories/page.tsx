import SuccessStoriesClientPage from "./SuccessStoriesClientPage"

export const metadata = {
  title: "Success Stories - RK Coaching Students Who Cracked NEET/JEE/UPSC",
  description:
    "Read inspiring success stories of RK Coaching students who achieved top ranks in NEET, JEE, UPSC. 95% success rate with AIR ranks under 100.",
  keywords: "NEET success stories, JEE toppers, UPSC success, student testimonials, coaching success rate, top ranks",
  openGraph: {
    title: "Success Stories - RK Coaching Students Who Cracked NEET/JEE/UPSC",
    description:
      "Read inspiring success stories of students who achieved their dreams with RK Coaching. 95% success rate.",
    url: "https://rkcoaching.com/success-stories",
    images: ["/success-stories-og-image.jpg"],
  },
  alternates: {
    canonical: "https://rkcoaching.com/success-stories",
  },
}

export default function SuccessStoriesPage() {
  return <SuccessStoriesClientPage />
}

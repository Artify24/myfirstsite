export const metadata = {
  title: "RK Coaching Blog - Latest News, Study Tips & Success Stories",
  description:
    "Stay updated with RK Coaching's latest news, educational insights, study tips, and student success stories. Expert advice for NEET, JEE, and UPSC preparation.",
  keywords:
    "RK coaching blog, study tips, exam preparation, educational news, student success stories, NEET tips, JEE preparation",
  openGraph: {
    title: "RK Coaching Blog - Latest News & Study Tips",
    description:
      "Stay updated with educational insights, study tips, and success stories from India's leading coaching platform.",
    url: "https://rkcoaching.com/blog",
    images: ["/blog-og-image.jpg"],
  },
  alternates: {
    canonical: "https://rkcoaching.com/blog",
  },
}

import BlogClientPage from "./BlogClientPage"

export default function BlogPage() {
  return <BlogClientPage />
}

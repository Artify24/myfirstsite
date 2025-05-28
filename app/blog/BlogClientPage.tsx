"use client"
import BlogPageComponent from "@/components/blog-page"

const blogPosts = [
  {
    id: 1,
    title: "RK Coaching App Achieves 20 Million Downloads Milestone",
    excerpt:
      "We're thrilled to announce that RK Coaching App has reached 20 million downloads, making it India's most trusted educational platform.",
    content: "This incredible milestone represents the trust of millions of students and parents across India...",
    author: "RK Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Company News",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    views: 15420,
    comments: 89,
    tags: ["milestone", "achievement", "downloads"],
  },
  {
    id: 2,
    title: "New AI-Powered Doubt Solving Feature Launched",
    excerpt:
      "Introducing our revolutionary AI-powered doubt solving system that provides instant, accurate solutions to student queries 24/7.",
    content:
      "Our latest AI technology can understand and solve complex problems across Physics, Chemistry, Mathematics, and Biology...",
    author: "Dr. Priya Sharma",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Product Updates",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    views: 8930,
    comments: 45,
    tags: ["AI", "technology", "doubt-solving"],
  },
  {
    id: 3,
    title: "JEE 2024 Results: 95% Success Rate for RK Students",
    excerpt:
      "Our students have achieved an outstanding 95% success rate in JEE 2024, with over 500 students securing ranks under 1000.",
    content:
      "The results speak for themselves - RK Coaching App's comprehensive preparation methodology has helped thousands of students...",
    author: "Prof. Rajesh Kumar",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Success Stories",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    views: 12750,
    comments: 156,
    tags: ["JEE", "results", "success"],
  },
  {
    id: 4,
    title: "Partnership with Top IIT Professors for Advanced Courses",
    excerpt:
      "We're excited to announce partnerships with renowned IIT professors to bring world-class education directly to your mobile device.",
    content:
      "These partnerships will enhance our course quality and provide students with insights from India's top educators...",
    author: "RK Team",
    date: "2024-01-08",
    readTime: "4 min read",
    category: "Partnerships",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    views: 6840,
    comments: 32,
    tags: ["partnership", "IIT", "professors"],
  },
  {
    id: 5,
    title: "NEET 2024 Preparation Strategy: Expert Tips",
    excerpt:
      "Our expert faculty shares proven strategies and tips for NEET 2024 preparation that have helped thousands of students succeed.",
    content:
      "Preparing for NEET requires a systematic approach. Here are the key strategies that our top performers follow...",
    author: "Dr. Amit Singh",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Study Tips",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    views: 9650,
    comments: 78,
    tags: ["NEET", "preparation", "tips"],
  },
  {
    id: 6,
    title: "RK Scholarship Program: Supporting Underprivileged Students",
    excerpt:
      "Announcing our new scholarship program that provides free premium access to deserving students from economically weaker sections.",
    content:
      "Education should be accessible to all. Our scholarship program aims to bridge the gap and provide equal opportunities...",
    author: "RK Foundation",
    date: "2024-01-03",
    readTime: "5 min read",
    category: "Social Impact",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    views: 4320,
    comments: 67,
    tags: ["scholarship", "social-impact", "education"],
  },
]

const categories = [
  "All",
  "Company News",
  "Product Updates",
  "Success Stories",
  "Study Tips",
  "Partnerships",
  "Social Impact",
]

export default function BlogClientPage() {
  return <BlogPageComponent />
}

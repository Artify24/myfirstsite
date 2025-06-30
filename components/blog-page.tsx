"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import {
  Calendar,
  Clock,
  User,
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  MessageCircle,
  Filter,
  Menu,
  X,
  Trophy,
  Lightbulb,
  BookOpen,
  Handshake,
  Heart,
  TrendingUp,
  Zap,
  Target,
  Award,
  Instagram,
  Download,
  Facebook,
  Youtube,
  Rocket,
  Brain,
} from "lucide-react"
import Link from "next/link"

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
    featured: true,
    views: 15420,
    comments: 89,
    tags: ["milestone", "achievement", "downloads"],
    icon: "trophy",
    gradient: "from-yellow-400 to-orange-500",
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
    featured: false,
    views: 8930,
    comments: 45,
    tags: ["AI", "technology", "doubt-solving"],
    icon: "brain",
    gradient: "from-purple-400 to-pink-500",
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
    featured: true,
    views: 12750,
    comments: 156,
    tags: ["JEE", "results", "success"],
    icon: "award",
    gradient: "from-green-400 to-blue-500",
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
    featured: false,
    views: 6840,
    comments: 32,
    tags: ["partnership", "IIT", "professors"],
    icon: "handshake",
    gradient: "from-blue-400 to-indigo-500",
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
    featured: false,
    views: 9650,
    comments: 78,
    tags: ["NEET", "preparation", "tips"],
    icon: "lightbulb",
    gradient: "from-amber-400 to-red-500",
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
    featured: false,
    views: 4320,
    comments: 67,
    tags: ["scholarship", "social-impact", "education"],
    icon: "heart",
    gradient: "from-pink-400 to-rose-500",
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

const categoryIcons = {
  "Company News": TrendingUp,
  "Product Updates": Zap,
  "Success Stories": Trophy,
  "Study Tips": BookOpen,
  Partnerships: Handshake,
  "Social Impact": Heart,
}

const iconComponents = {
  trophy: Trophy,
  brain: Brain,
  award: Award,
  handshake: Handshake,
  lightbulb: Lightbulb,
  heart: Heart,
  rocket: Rocket,
  target: Target,
}

interface CategoryIconProps {
  category: string
  className?: string
}

function CategoryIcon({ category, className = "h-6 w-6" }: CategoryIconProps) {
  const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || BookOpen
  return <IconComponent className={className} />
}

interface PostIconProps {
  icon: string
  className?: string
}

function PostIcon({ icon, className = "h-12 w-12" }: PostIconProps) {
  const IconComponent = iconComponents[icon as keyof typeof iconComponents] || BookOpen
  return <IconComponent className={className} />
}

export default function BlogPageComponent() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const postsPerPage = 6

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const totalPages = Math.ceil(regularPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = regularPosts.slice(startIndex, startIndex + postsPerPage)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 text-slate-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                RK
              </div>
              <span className="text-lg font-bold text-[rgb(37,101,118)]">CoachingApp</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-[rgb(37,101,118)] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[rgb(37,101,118)] transition-colors">
                About
              </Link>
              <Link href="/success-stories" className="text-gray-600 hover:text-[rgb(37,101,118)] transition-colors">
                Success Stories
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[rgb(37,101,118)] transition-colors">
                Contact
              </Link>
              <Link href="/blog" className="text-[rgb(37,101,118)] font-medium">
                Blog
              </Link>
              <Button className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white">
                Download App
              </Button>
            </nav>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link
                  href="/"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/success-stories"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-[rgb(37,101,118)] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <div className="px-3 py-2">
                  <Button
                    className="w-full bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Download App
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center mb-6">
              <div className="relative">
     
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent">
              RK Blog & News
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest news, product updates, success stories, and educational insights from RK
              Coaching App
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/60 backdrop-blur-lg border-white/50 rounded-xl"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full flex items-center space-x-1 ${
                      selectedCategory === category
                        ? "bg-[rgb(37,101,118)] hover:bg-[rgb(30,85,100)] text-white"
                        : "border-slate-300 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {category !== "All" && <CategoryIcon category={category} className="h-3 w-3" />}
                    <span>{category}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-700 flex items-center">
              <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl overflow-hidden border-0 h-full">
                    <div className={`relative bg-gradient-to-br ${post.gradient} p-8`}>
                      <div className="flex items-center justify-between">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                          <PostIcon icon={post.icon} className="h-12 w-12 text-white" />
                        </div>
                        <Badge className="bg-white/90 text-slate-700 border-0 font-semibold">Featured</Badge>
                      </div>
                      <div className="absolute bottom-0 right-0 opacity-10">
                        <PostIcon icon={post.icon} className="h-32 w-32 text-white" />
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-slate-500">
                        <Badge className="bg-orange-100 text-orange-700 border-0 flex items-center space-x-1">
                          <CategoryIcon category={post.category} className="h-3 w-3" />
                          <span>{post.category}</span>
                        </Badge>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-slate-700 line-clamp-2">{post.title}</h3>
                      <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {post.views.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {post.comments}
                          </span>
                        </div>
                        <Button variant="ghost" className="text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 p-2">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-700 flex items-center">
            <Rocket className="h-8 w-8 text-blue-500 mr-3" />
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl overflow-hidden border-0 h-full">
                  <div className={`relative bg-gradient-to-br ${post.gradient} p-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                        <PostIcon icon={post.icon} className="h-8 w-8 text-white" />
                      </div>
                      <Badge className="bg-white/90 text-slate-700 border-0 text-xs flex items-center space-x-1">
                        <CategoryIcon category={post.category} className="h-3 w-3" />
                        <span>{post.category}</span>
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 right-0 opacity-10">
                      <PostIcon icon={post.icon} className="h-20 w-20 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-slate-500">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-3 text-slate-700 line-clamp-2">{post.title}</h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-slate-500">
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {post.comments}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border-slate-300 text-slate-600 hover:bg-slate-50"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={`${
                      currentPage === page
                        ? "bg-[rgb(37,101,118)] hover:bg-[rgb(30,85,100)] text-white"
                        : "border-slate-300 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="border-slate-300 text-slate-600 hover:bg-slate-50"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-[rgb(37,101,118)]/5 to-orange-50/80 backdrop-blur-lg border-[rgb(37,101,118)]/20 rounded-3xl shadow-xl p-8 border-2 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center opacity-20">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardContent className="p-0 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-700">Stay Updated</h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter and never miss important updates, success stories, and educational
                  insights from RK Coaching App.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input placeholder="Enter your email" className="bg-white/60 border-white/50 rounded-xl" />
                  <Button className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white rounded-xl border-0">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

       {/* Footer */}
      <footer className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8 border-t border-white/30 bg-white/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="col-span-1 sm:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/rkLogo.png?height=40&width=120"
                    alt="RK Coaching Logo"
                    width={120}
                    height={40}
                    className="w-24 sm:w-32 md:w-36 h-auto"
                    priority
                  />
                </Link>
              </h3>
              <p className="text-slate-600 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
                India&apos;s most trusted coaching app for competitive exams.
                Join millions of students who achieved their dreams with our
                expert guidance and innovative learning methods.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white rounded-xl border-0 text-sm sm:text-base w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Play Store
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-700">
                Quick Links
              </h4>
              <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[rgb(37,101,118)] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[rgb(37,101,118)] transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[rgb(37,101,118)] transition-colors"
                  >
                    Educators
                  </Link>
                </li>
                <li>
                  <Link
                    href="/success-stories"
                    className="hover:text-[rgb(37,101,118)] transition-colors"
                  >
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[rgb(37,101,118)] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-700">
                Legal
              </h4>
              <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[rgb(37,101,118)] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[rgb(37,101,118)] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[rgb(37,101,118)] transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[rgb(37,101,118)] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/30 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-600 text-xs sm:text-sm text-center sm:text-left">
              © 2025 RK CoachingApp. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.youtube.com/channel/UCFZz5mOxOz_UPRj9cyBZLjg"
                className="text-slate-500 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/rkdemyapp"
                className="text-slate-500 hover:text-[rgb(37,101,118)] transition-colors"
              >
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/rkdemy/"
                className="text-slate-500 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

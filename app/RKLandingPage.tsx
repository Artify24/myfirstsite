"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Play,
  Download,
  Star,
  Video,
  MessageCircle,
  FileText,
  Target,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  Youtube,
  Instagram,
  Send,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Users,
  BookOpen,
  TrendingUp,
  GraduationCap,
  Brain,
  Zap,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Animated Counter Component
function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number
  duration?: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Floating Animation Component
function FloatingElement({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

// Glowing Orb Component
function GlowingOrb({
  color,
  size,
  top,
  left,
  delay = 0,
}: {
  color: string
  size: string
  top: string
  left: string
  delay?: number
}) {
  return (
    <FloatingElement delay={delay}>
      <div
        className={`absolute ${top} ${left} ${size} ${color} rounded-full blur-xl opacity-20`}
        style={{ filter: "blur(40px)" }}
      />
    </FloatingElement>
  )
}

function RKLandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [pricingToggle, setPricingToggle] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const stats = [
    { number: 20, suffix: "M+", label: "Downloads", icon: Users, color: "text-[rgb(37,101,118)]" },
    { number: 95, suffix: "%", label: "Success Rate", icon: TrendingUp, color: "text-orange-500" },
    { number: 500, suffix: "+", label: "Expert Educators", icon: GraduationCap, color: "text-amber-500" },
    { number: 10, suffix: "L+", label: "Students", icon: BookOpen, color: "text-teal-500" },
  ]

  const educators = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "Physics",
      experience: "15+ Years",
      rating: 4.9,
      students: "50K+",
      image: "/placeholder.svg?height=200&width=200",
      bio: "IIT Delhi graduate with 15+ years of teaching experience in JEE Physics",
      specialization: "Mechanics & Thermodynamics",
    },
    {
      name: "Dr. Priya Sharma",
      subject: "Chemistry",
      experience: "12+ Years",
      rating: 4.8,
      students: "45K+",
      image: "/placeholder.svg?height=200&width=200",
      bio: "AIIMS graduate specializing in Organic Chemistry with proven NEET results",
      specialization: "Organic & Inorganic Chemistry",
    },
    {
      name: "Prof. Amit Singh",
      subject: "Mathematics",
      experience: "18+ Years",
      rating: 4.9,
      students: "60K+",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Former IIT professor with exceptional teaching methods and student success",
      specialization: "Calculus & Algebra",
    },
  ]

  const testimonials = [
    {
      name: "Arjun Patel",
      exam: "JEE Advanced",
      rank: "AIR 47",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "This app transformed my preparation completely. The personalized study plans and doubt clearing sessions helped me achieve my dream rank!",
      location: "Mumbai, Maharashtra",
    },
    {
      name: "Sneha Reddy",
      exam: "NEET",
      rank: "AIR 156",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Amazing content quality and expert teachers. The mock tests were exactly like the real NEET exam. Highly recommended!",
      location: "Hyderabad, Telangana",
    },
    {
      name: "Rohit Kumar",
      exam: "UPSC",
      rank: "AIR 23",
      image: "/placeholder.svg?height=80&width=80",
      quote:
        "Comprehensive study material and current affairs updates helped me achieve my dream of becoming an IAS officer.",
      location: "Delhi, India",
    },
  ]

  const features = [
    {
      icon: Video,
      title: "Live Interactive Classes",
      description: "Join live sessions with top educators and interact in real-time",
      color: "bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)]",
    },
    {
      icon: MessageCircle,
      title: "Instant Doubt Solving",
      description: "Get your doubts cleared instantly by subject matter experts",
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: FileText,
      title: "Comprehensive Notes",
      description: "Access detailed study notes and revision materials",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: Target,
      title: "Mock Tests & Analysis",
      description: "Practice with exam-pattern tests and detailed performance analysis",
      color: "bg-teal-50 text-teal-600",
    },
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized learning paths based on your strengths and weaknesses",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Clock,
      title: "Progress Tracking",
      description: "Monitor your learning progress with detailed analytics",
      color: "bg-slate-50 text-slate-600",
    },
  ]

  const subjects = [
    {
      name: "Physics",
      icon: "⚛️",
      tag: "Popular",
      color: "bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)]",
      students: "2.5L+",
    },
    { name: "Chemistry", icon: "🧪", tag: "New", color: "bg-orange-100 text-orange-700", students: "2.1L+" },
    { name: "Biology", icon: "🧬", tag: "Top Rated", color: "bg-teal-100 text-teal-700", students: "1.8L+" },
    { name: "Mathematics", icon: "📐", tag: "Free", color: "bg-amber-100 text-amber-700", students: "3.2L+" },
    { name: "Current Affairs", icon: "📰", tag: "Updated", color: "bg-blue-100 text-blue-700", students: "1.5L+" },
    {
      name: "General Studies",
      icon: "📚",
      tag: "Comprehensive",
      color: "bg-slate-100 text-slate-700",
      students: "1.2L+",
    },
  ]

  const faqs = [
    {
      question: "Is the app free to download and use?",
      answer:
        "Yes, the app is completely free to download. We offer free courses, study materials, and basic features. Premium features are available with our subscription plans.",
    },
    {
      question: "Can I access courses offline?",
      answer:
        "Yes, premium subscribers can download video lectures, notes, and practice questions for offline access. This ensures uninterrupted learning even without internet connectivity.",
    },
    {
      question: "How are the mock tests designed?",
      answer:
        "Our mock tests are meticulously designed by subject experts who analyze previous years&apos; papers and current exam trends. They follow the exact pattern, difficulty level, and time constraints of actual exams.",
    },
    {
      question: "How quickly can I get my doubts resolved?",
      answer:
        "Our doubt-solving feature provides instant responses. You can ask questions through text, voice, or image, and our AI system or expert educators will respond within minutes.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 7-day money-back guarantee for all premium subscriptions. If you&apos;re not satisfied with our services, you can request a full refund within 7 days of purchase.",
    },
    {
      question: "Do you provide study materials for all exam patterns?",
      answer:
        "Yes, we provide comprehensive study materials for JEE Main & Advanced, NEET, UPSC, and various state board exams. Our content is regularly updated to match the latest syllabus and exam patterns.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 text-slate-800 overflow-hidden relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[rgb(37,101,118)] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                RK
              </div>
              <span className="text-lg font-bold text-[rgb(37,101,118)]">CoachingApp</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-[rgb(37,101,118)] font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[rgb(37,101,118)]">
                About
              </Link>
              <Link href="/success-stories" className="text-gray-600 hover:text-[rgb(37,101,118)]">
                Success Stories
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[rgb(37,101,118)]">
                Contact
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-[rgb(37,101,118)]">
                Blog
              </Link>
              <Button className="bg-[rgb(37,101,118)] hover:bg-[rgb(30,85,100)] text-white">Download App</Button>
            </nav>

            {/* Mobile menu button */}
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
                  className="block px-3 py-2 text-[rgb(37,101,118)] font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/success-stories"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <div className="px-3 py-2">
                  <Button
                    className="w-full bg-[rgb(37,101,118)] hover:bg-[rgb(30,85,100)] text-white"
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

      {/* Background Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <GlowingOrb color="bg-[rgb(37,101,118)]" size="w-32 h-32" top="top-20" left="left-10" delay={0} />
        <GlowingOrb color="bg-orange-300" size="w-24 h-24" top="top-40" left="right-20" delay={1} />
        <GlowingOrb color="bg-amber-300" size="w-28 h-28" top="bottom-40" left="left-1/4" delay={2} />
        <GlowingOrb color="bg-teal-300" size="w-20 h-20" top="top-1/3" left="left-1/2" delay={1.5} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <FloatingElement>
              <div className="mx-auto w-72 h-72 mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(37,101,118)]/20 to-orange-200/30 rounded-full blur-2xl"></div>
                <Image
                  src="/placeholder.svg?height=288&width=288"
                  alt="Expert teacher illustration"
                  width={288}
                  height={288}
                  className="relative z-10 rounded-full border-4 border-white/50 shadow-2xl backdrop-blur-sm"
                />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-2xl animate-bounce shadow-lg">
                  ✨
                </div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-500 rounded-full flex items-center justify-center text-lg shadow-lg text-white">
                  📚
                </div>
              </div>
            </FloatingElement>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent leading-tight"
          >
            Crack NEET/JEE with India&apos;s Most Trusted Coaching App
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl mb-8 text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Join over 20 million students who achieved their dreams with our expert-led courses, personalized learning
            paths, and comprehensive exam preparation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            >
              <Download className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[rgb(37,101,118)] text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 px-8 py-4 text-lg rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-slate-500 text-sm"
          >
            Trusted by millions • 4.8★ rating • Free to start
          </motion.p>

          {/* Floating Formula Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <FloatingElement delay={0.5}>
              <div className="absolute top-1/4 left-10 text-[rgb(37,101,118)] text-xl font-medium opacity-40">
                E = mc²
              </div>
            </FloatingElement>
            <FloatingElement delay={1.5}>
              <div className="absolute top-1/3 right-10 text-orange-400 text-xl font-medium opacity-40">H₂SO₄</div>
            </FloatingElement>
            <FloatingElement delay={2.5}>
              <div className="absolute bottom-1/4 left-1/4 text-amber-400 text-xl font-medium opacity-40">∫ f(x)dx</div>
            </FloatingElement>
            <FloatingElement delay={3}>
              <div className="absolute top-1/2 right-1/4 text-teal-400 text-xl font-medium opacity-40">DNA</div>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent">
              Why Students Choose Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proven results, expert guidance, and innovative learning methods that make the difference
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 p-6 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 border-0">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      style={{
                        backgroundColor: stat.color.includes("rgb(37,101,118)") ? "rgba(37, 101, 118, 0.1)" : undefined,
                      }}
                    >
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold mb-2 text-slate-700">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="text-slate-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Educators Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent">
              Learn from India&apos;s Best Educators
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our expert faculty brings years of experience and proven teaching methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educators.map((educator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl overflow-hidden border-0">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(37,101,118)]/20 to-orange-200/30 rounded-full blur-lg"></div>
                      <Image
                        src={educator.image || "/placeholder.svg"}
                        alt={educator.name}
                        width={120}
                        height={120}
                        className="relative z-10 rounded-full mx-auto border-4 border-white/70 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-500 text-white rounded-full p-2 shadow-lg">
                        <Video className="h-4 w-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-700">{educator.name}</h3>
                    <p className="text-[rgb(37,101,118)] font-semibold mb-1">{educator.subject}</p>
                    <p className="text-slate-500 text-sm mb-3">{educator.specialization}</p>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{educator.bio}</p>
                    <div className="flex justify-between items-center text-sm mb-4">
                      <span className="flex items-center bg-amber-50 px-2 py-1 rounded-lg">
                        <Star className="h-4 w-4 text-amber-500 mr-1 fill-current" />
                        <span className="text-slate-700 font-medium">{educator.rating}</span>
                      </span>
                      <span className="text-slate-600 bg-slate-50 px-2 py-1 rounded-lg">{educator.experience}</span>
                      <span className="text-[rgb(37,101,118)] bg-[rgb(37,101,118)]/10 px-2 py-1 rounded-lg font-medium">
                        {educator.students}
                      </span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white rounded-xl border-0">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo Class
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses & Subjects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-amber-600 bg-clip-text text-transparent">
              Comprehensive Course Library
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expertly designed courses for JEE, NEET, UPSC, and Board examinations
            </p>
          </motion.div>

          <Tabs defaultValue="jee" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/60 backdrop-blur-lg rounded-2xl p-2 border-0 shadow-lg">
              <TabsTrigger
                value="jee"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[rgb(37,101,118)] data-[state=active]:to-teal-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                JEE
              </TabsTrigger>
              <TabsTrigger
                value="neet"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                NEET
              </TabsTrigger>
              <TabsTrigger
                value="upsc"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-amber-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                UPSC
              </TabsTrigger>
              <TabsTrigger
                value="boards"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                Boards
              </TabsTrigger>
            </TabsList>

            <TabsContent value="jee">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {subjects.slice(0, 4).map((subject, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl cursor-pointer border-0 overflow-hidden">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{subject.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-slate-700">{subject.name}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={`${subject.color} border-0 rounded-lg`}>{subject.tag}</Badge>
                          <span className="text-sm text-slate-500">{subject.students} students</span>
                        </div>
                        <Button
                          variant="ghost"
                          className="w-full text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 rounded-xl"
                        >
                          Explore Course
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="neet">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {subjects.slice(0, 3).map((subject, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl cursor-pointer border-0 overflow-hidden">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{subject.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-slate-700">{subject.name}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={`${subject.color} border-0 rounded-lg`}>{subject.tag}</Badge>
                          <span className="text-sm text-slate-500">{subject.students} students</span>
                        </div>
                        <Button variant="ghost" className="w-full text-orange-600 hover:bg-orange-50 rounded-xl">
                          Explore Course
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upsc">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {subjects.slice(4, 6).map((subject, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl cursor-pointer border-0 overflow-hidden">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{subject.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-slate-700">{subject.name}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={`${subject.color} border-0 rounded-lg`}>{subject.tag}</Badge>
                          <span className="text-sm text-slate-500">{subject.students} students</span>
                        </div>
                        <Button variant="ghost" className="w-full text-amber-600 hover:bg-amber-50 rounded-xl">
                          Explore Course
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="boards">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {subjects.map((subject, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl cursor-pointer border-0 overflow-hidden">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{subject.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-slate-700">{subject.name}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={`${subject.color} border-0 rounded-lg`}>{subject.tag}</Badge>
                          <span className="text-sm text-slate-500">{subject.students} students</span>
                        </div>
                        <Button variant="ghost" className="w-full text-teal-600 hover:bg-teal-50 rounded-xl">
                          Explore Course
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent">
              Powerful Learning Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to excel in your competitive exams, designed with care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto w-80 h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(37,101,118)]/10 to-orange-100/50 rounded-3xl backdrop-blur-lg border border-white/50 shadow-2xl">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-[rgb(37,101,118)] rounded-full"></div>
                      </div>
                      <Smartphone className="h-5 w-5 text-slate-400" />
                    </div>
                    <div className="flex-1 bg-white/40 rounded-2xl p-4 backdrop-blur-sm border border-white/30">
                      <Image
                        src="/placeholder.svg?height=300&width=200"
                        alt="App Screenshot"
                        width={200}
                        height={300}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl p-6 border-0">
                    <CardContent className="p-0">
                      <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-slate-700">{feature.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent">
              Success Stories That Inspire
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real students, real results, real dreams achieved
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl shadow-xl p-8 border-0">
                  <CardContent className="p-0 text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(37,101,118)]/20 to-orange-200/30 rounded-full blur-lg w-20 h-20 mx-auto"></div>
                      <Image
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        width={80}
                        height={80}
                        className="relative z-10 rounded-full mx-auto border-4 border-white/70 shadow-lg"
                      />
                    </div>
                    <blockquote className="text-xl italic mb-6 text-slate-600 leading-relaxed">
                      &quot;{testimonials[currentTestimonial].quote}&quot;
                    </blockquote>
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-slate-700">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-[rgb(37,101,118)] font-semibold">
                        {testimonials[currentTestimonial].exam} - {testimonials[currentTestimonial].rank}
                      </p>
                      <p className="text-slate-500 text-sm">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="rounded-full border-[rgb(37,101,118)] text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 shadow-lg"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="rounded-full border-[rgb(37,101,118)] text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 shadow-lg"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-[rgb(37,101,118)]" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans & Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Start your journey for free, upgrade when you&apos;re ready for premium features
            </p>

            <div className="flex items-center justify-center space-x-4">
              <span className={`text-lg ${!pricingToggle ? "text-slate-700 font-semibold" : "text-slate-500"}`}>
                Monthly
              </span>
              <button
                onClick={() => setPricingToggle(!pricingToggle)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  pricingToggle ? "bg-[rgb(37,101,118)]" : "bg-slate-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-lg ${
                    pricingToggle ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-lg ${pricingToggle ? "text-slate-700 font-semibold" : "text-slate-500"}`}>
                Yearly
              </span>
              <Badge className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 text-white border-0 rounded-lg">
                Save 20%
              </Badge>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl shadow-lg p-8 h-full border-0">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-center text-slate-700">Free Plan</CardTitle>
                  <CardDescription className="text-center text-slate-600">Perfect for getting started</CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-slate-700">₹0</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Basic video lectures</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Limited practice questions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Study notes access</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Community support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white rounded-xl border-0">
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[rgb(37,101,118)]/5 to-orange-50/80 backdrop-blur-lg border-[rgb(37,101,118)]/20 rounded-3xl shadow-xl p-8 h-full relative overflow-hidden border-2">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 text-white border-0 rounded-lg">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-center text-slate-700">Premium Plan</CardTitle>
                  <CardDescription className="text-center text-slate-600">
                    Everything you need to succeed
                  </CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-slate-700">₹{pricingToggle ? "1999" : "249"}</span>
                    <span className="text-slate-500">/{pricingToggle ? "year" : "month"}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">All video lectures & courses</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Live interactive classes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Unlimited practice tests</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Instant doubt solving</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Offline content downloads</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Personal mentor support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white font-semibold rounded-xl border-0">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">Everything you need to know about our platform</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/60 backdrop-blur-lg border-white/50 rounded-2xl px-6 border-0 shadow-lg"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-slate-700">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent">
              We&apos;re Here to Help
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our dedicated support team is available 24/7 to assist you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl p-6 text-center cursor-pointer border-0">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-700">WhatsApp</h3>
                  <p className="text-slate-600 text-sm">Chat with us instantly</p>
                  <p className="text-[rgb(37,101,118)] text-sm font-medium mt-2">+91 98765 43210</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl p-6 text-center cursor-pointer border-0">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-700">Call Us</h3>
                  <p className="text-slate-600 text-sm">Speak to our experts</p>
                  <p className="text-orange-600 text-sm font-medium mt-2">+91 98765 43210</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl p-6 text-center cursor-pointer border-0">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-700">Email</h3>
                  <p className="text-slate-600 text-sm">Send us a message</p>
                  <p className="text-amber-600 text-sm font-medium mt-2">support@coachingapp.com</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl p-6 text-center cursor-pointer border-0">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-700">Live Chat</h3>
                  <p className="text-slate-600 text-sm">24/7 instant support</p>
                  <p className="text-teal-600 text-sm font-medium mt-2">Always available</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl shadow-lg p-8 border-0">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-center text-slate-700">Send us a message</CardTitle>
                <CardDescription className="text-center text-slate-600">
                  We&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-white/50 border-white/50 text-slate-700 placeholder:text-slate-500 rounded-xl"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/50 border-white/50 text-slate-700 placeholder:text-slate-500 rounded-xl"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="bg-white/50 border-white/50 text-slate-700 placeholder:text-slate-500 rounded-xl"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-white/50 border-white/50 text-slate-700 placeholder:text-slate-500 rounded-xl"
                  />
                  <Button className="w-full bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white rounded-xl border-0">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/30 bg-white/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent">
                RK CoachingApp
              </h3>
              <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
                India&apos;s most trusted coaching app for competitive exams. Join millions of students who achieved their
                dreams with our expert guidance and innovative learning methods.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white rounded-xl border-0"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Play Store
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[rgb(37,101,118)] text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 rounded-xl"
                >
                  <Download className="mr-2 h-5 w-5" />
                  App Store
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-700">Quick Links</h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <Link href="/about" className="hover:text-[rgb(37,101,118)] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[rgb(37,101,118)] transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[rgb(37,101,118)] transition-colors">
                    Educators
                  </Link>
                </li>
                <li>
                  <Link href="/success-stories" className="hover:text-[rgb(37,101,118)] transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[rgb(37,101,118)] transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-700">Legal</h4>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <Link href="#" className="hover:text-[rgb(37,101,118)] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[rgb(37,101,118)] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[rgb(37,101,118)] transition-colors">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[rgb(37,101,118)] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 text-sm mb-4 md:mb-0">© 2024 RK CoachingApp. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-500 hover:text-red-500 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-[rgb(37,101,118)] transition-colors">
                <Send className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-500 hover:text-pink-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-500 hover:from-[rgb(30,85,100)] hover:to-teal-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-4 text-lg font-semibold border-0"
        >
          <Download className="mr-2 h-5 w-5" />
          Start Free Trial
        </Button>
      </motion.div>
    </div>
  )
}

export default RKLandingPage

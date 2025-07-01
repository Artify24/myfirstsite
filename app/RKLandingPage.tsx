"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import {
  Download,
  Video,
  MessageCircle,
  FileText,
  Target,
  Clock,
  Phone,
  Mail,
  Youtube,
  Instagram,
  Facebook,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const stats = [
    {
      number: 10,
      suffix: "K+",
      label: "Downloads",
      icon: Users,
      color: "text-[rgb(37,101,118)]",
    },
    {
      number: 95,
      suffix: "%",
      label: "Success Rate",
      icon: TrendingUp,
      color: "text-orange-500",
    },
    {
      number: 500,
      suffix: "+",
      label: "Expert Educators",
      icon: GraduationCap,
      color: "text-amber-500",
    },
    {
      number: 10,
      suffix: "L+",
      label: "Students",
      icon: BookOpen,
      color: "text-teal-500",
    },
  ]

  const testimonials = [
    {
      name: "Arjun Patel",
      exam: "B.Tech Final Year (CSE)",
      rank: "CGPA 9.8",
      image: "/images/cand1.png?height=80&width=80",
      quote:
        "This app transformed my preparation completely. The personalized study plans and project guidance helped me secure top grades and ace campus placements!",
      location: "Mumbai, Maharashtra",
    },
    {
      name: "Sneha Reddy",
      exam: "B.Tech 3rd Year (ECE)",
      rank: "CGPA 9.6",
      image: "/images/cad2.png?height=80&width=80",
      quote:
        "The mock interviews and live classes boosted my confidence for internships. I cracked a core role thanks to their structured prep!",
      location: "Mumbai, Maharashtra",
    },
    {
      name: "Rohit Kumar",
      exam: "B.E. Final Year (Mechanical)",
      rank: "CGPA 9.5",
      image: "/images/cad3.png?height=80&width=80",
      quote:
        "Thanks to the app's expert mentorship and placement resources, I landed a job in a top MNC straight out of college.",
      location: "Mumbai, Maharashtra",
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
    // JEE Subjects
    {
      name: "Physics",
      icon: "⚛️",
      tag: "JEE Core",
      color: "bg-blue-100 text-blue-700",
      students: "5L+",
    },
    {
      name: "Chemistry",
      icon: "🧪",
      tag: "JEE Core",
      color: "bg-yellow-100 text-yellow-700",
      students: "4.8L+",
    },
    {
      name: "Mathematics",
      icon: "📐",
      tag: "JEE Core",
      color: "bg-green-100 text-green-700",
      students: "5.5L+",
    },
    {
      name: "Aptitude",
      icon: "🧠",
      tag: "JEE Advanced",
      color: "bg-purple-100 text-purple-700",
      students: "3.2L+",
    },
    // NEET Subjects
    {
      name: "Physics",
      icon: "⚛️",
      tag: "NEET Core",
      color: "bg-blue-100 text-blue-700",
      students: "6L+",
    },
    {
      name: "Chemistry",
      icon: "🧪",
      tag: "NEET Core",
      color: "bg-orange-100 text-orange-700",
      students: "5.9L+",
    },
    {
      name: "Biology (Botany)",
      icon: "🌿",
      tag: "NEET Core",
      color: "bg-green-100 text-green-700",
      students: "6.2L+",
    },
    {
      name: "Biology (Zoology)",
      icon: "🧬",
      tag: "NEET Core",
      color: "bg-pink-100 text-pink-700",
      students: "5.8L+",
    },
    {
      name: "Environmental Science",
      icon: "🌱",
      tag: "Boards + NEET",
      color: "bg-lime-100 text-lime-700",
      students: "3.1L+",
    },
    // CET Subjects
    {
      name: "Mathematics",
      icon: "📐",
      tag: "CET Core",
      color: "bg-amber-100 text-amber-700",
      students: "4.4L+",
    },
    {
      name: "Biology",
      icon: "🧬",
      tag: "CET Bio",
      color: "bg-teal-100 text-teal-700",
      students: "3.7L+",
    },
    {
      name: "Physics",
      icon: "⚛️",
      tag: "CET Core",
      color: "bg-sky-100 text-sky-700",
      students: "4L+",
    },
    {
      name: "Chemistry",
      icon: "🧪",
      tag: "CET Core",
      color: "bg-red-100 text-red-700",
      students: "3.9L+",
    },
    {
      name: "English",
      icon: "📖",
      tag: "CET Optional",
      color: "bg-slate-100 text-slate-700",
      students: "2.5L+",
    },
    // Engineering Subjects
    {
      name: "Engineering Mathematics",
      icon: "📊",
      tag: "First Year",
      color: "bg-indigo-100 text-indigo-700",
      students: "2L+",
    },
    {
      name: "Computer Programming",
      icon: "💻",
      tag: "CSE/IT",
      color: "bg-violet-100 text-violet-700",
      students: "2.7L+",
    },
    {
      name: "Mechanics",
      icon: "⚙️",
      tag: "Mech/Electrical",
      color: "bg-gray-100 text-gray-700",
      students: "1.9L+",
    },
    {
      name: "Electronics",
      icon: "🔌",
      tag: "ECE/EEE",
      color: "bg-cyan-100 text-cyan-700",
      students: "1.5L+",
    },
    {
      name: "Communication Skills",
      icon: "🗣️",
      tag: "Soft Skill",
      color: "bg-rose-100 text-rose-700",
      students: "2.3L+",
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
        "Our mock tests are meticulously designed by subject experts who analyze previous years' papers and current exam trends. They follow the exact pattern, difficulty level, and time constraints of actual exams.",
    },
    {
      question: "How quickly can I get my doubts resolved?",
      answer:
        "Our doubt-solving feature provides instant responses. You can ask questions through text, voice, or image, and our AI system or expert educators will respond within minutes.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 7-day money-back guarantee for all premium subscriptions. If you're not satisfied with our services, you can request a full refund within 7 days of purchase.",
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
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <Link href="/" className="text-[rgb(37,101,118)] font-medium text-sm xl:text-base">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[rgb(37,101,118)] text-sm xl:text-base">
                About
              </Link>
              <Link href="/success-stories" className="text-gray-600 hover:text-[rgb(37,101,118)] text-sm xl:text-base">
                Success Stories
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[rgb(37,101,118)] text-sm xl:text-base">
                Contact
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-[rgb(37,101,118)] text-sm xl:text-base">
                Blog
              </Link>
              <Button className="bg-[rgb(37,101,118)] hover:bg-[rgb(30,85,100)] text-white text-sm px-4 py-2" onClick={() => window.open("https://yheiw.courses.store/")}>
                Download App
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link
                  href="/"
                  className="block px-3 py-2 text-[rgb(37,101,118)] font-medium text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)] text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/success-stories"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)] text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)] text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)] text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <div className="px-3 py-2">
                  <Button
                    className="w-full bg-[rgb(37,101,118)] hover:bg-[rgb(30,85,100)] text-white text-sm"
                    onClick={() => {setMobileMenuOpen(false); window.open("https://yheiw.courses.store/")} }
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
        <GlowingOrb
          color="bg-orange-300"
          size="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
          top="top-32 sm:top-40"
          left="right-10 sm:right-20"
          delay={1}
        />
        <GlowingOrb
          color="bg-amber-300"
          size="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
          top="bottom-32 sm:bottom-40"
          left="left-1/4"
          delay={2}
        />
        <GlowingOrb
          color="bg-teal-300"
          size="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          top="top-1/3"
          left="left-1/2"
          delay={1.5}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-8 pt-16 sm:pt-20">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <FloatingElement>
              <div className="mx-auto w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 mb-6 sm:mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(37,101,118)]/20 to-orange-200/30 rounded-full blur-2xl"></div>
                <Image
                  src="/images.jpg?height=288&width=288"
                  alt="LOGO"
                  width={288}
                  height={288}
                  className="relative z-10 rounded-full border-4 border-white/50 shadow-2xl backdrop-blur-sm w-full h-full object-cover"
                />
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl animate-bounce shadow-lg">
                  ✨
                </div>
                <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-500 rounded-full flex items-center justify-center text-sm sm:text-base lg:text-lg shadow-lg text-white">
                  📚
                </div>
              </div>
            </FloatingElement>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 via-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent leading-tight px-2"
          >
            EDUCATION BANAYE AASSAN!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-slate-600 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Join over 20 million students who achieved their dreams with our expert-led courses, personalized learning
            paths, and comprehensive exam preparation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download for Android
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[rgb(37,101,118)] text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto bg-transparent"
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download for iOS
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-slate-500 text-xs sm:text-sm px-4"
          >
            Trusted by millions • 4.8★ rating • Free to start
          </motion.p>

          {/* Floating Formula Elements */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <FloatingElement delay={0.5}>
              <div className="absolute top-1/4 left-4 sm:left-10 text-[rgb(37,101,118)] text-sm sm:text-lg lg:text-xl font-medium opacity-40">
                E = mc²
              </div>
            </FloatingElement>
            <FloatingElement delay={1.5}>
              <div className="absolute top-1/3 right-4 sm:right-10 text-orange-400 text-sm sm:text-lg lg:text-xl font-medium opacity-40">
                H₂SO₄
              </div>
            </FloatingElement>
            <FloatingElement delay={2.5}>
              <div className="absolute bottom-1/4 left-1/4 text-amber-400 text-sm sm:text-lg lg:text-xl font-medium opacity-40">
                ∫ f(x)dx
              </div>
            </FloatingElement>
            <FloatingElement delay={3}>
              <div className="absolute top-1/2 right-1/4 text-teal-400 text-sm sm:text-lg lg:text-xl font-medium opacity-40">
                DNA
              </div>
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent px-4">
              Why Students Choose Us
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Proven results, expert guidance, and innovative learning methods that make the difference
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 p-3 sm:p-4 lg:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 border-0">
                  <CardContent className="p-0">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 ${stat.color} bg-opacity-10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4`}
                      style={{
                        backgroundColor: stat.color.includes("rgb(37,101,118)") ? "rgba(37, 101, 118, 0.1)" : undefined,
                      }}
                    >
                      <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 ${stat.color}`} />
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 text-slate-700">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <p className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses & Subjects Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 to-amber-600 bg-clip-text text-transparent px-4">
              Comprehensive Course Library
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Expertly designed courses for JEE, NEET, UPSC, and Board examinations
            </p>
          </motion.div>

          <Tabs defaultValue="engineering" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-6 sm:mb-8 bg-white/60 backdrop-blur-lg rounded-xl sm:rounded-2xl p-1 sm:p-2 border-0 shadow-lg gap-1 sm:gap-0">
              <TabsTrigger
                value="engineering"
                className="rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-[rgb(37,101,118)] data-[state=active]:to-teal-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 text-xs sm:text-sm px-2 py-2"
              >
                ENGINEERING
              </TabsTrigger>
              <TabsTrigger
                value="jee"
                className="rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 text-xs sm:text-sm px-2 py-2"
              >
                JEE
              </TabsTrigger>
              <TabsTrigger
                value="neet"
                className="rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 text-xs sm:text-sm px-2 py-2"
              >
                NEET
              </TabsTrigger>
              <TabsTrigger
                value="cet"
                className="rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-teal-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 text-xs sm:text-sm px-2 py-2"
              >
                MHT-CET
              </TabsTrigger>
            </TabsList>

            {/* ENGINEERING TAB */}
            <TabsContent value="engineering">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {subjects
                  .filter((s) => ["First Year", "CSE/IT", "Mech/Electrical", "ECE/EEE", "Soft Skill"].includes(s.tag))
                  .map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl cursor-pointer border-0 overflow-hidden">
                        <CardContent className="p-4 sm:p-6 text-center">
                          <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{subject.icon}</div>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-slate-700">
                            {subject.name}
                          </h3>
                          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                            <Badge className={`${subject.color} border-0 rounded-lg text-xs`}>{subject.tag}</Badge>
                            <span className="text-xs sm:text-sm text-slate-500">{subject.students} students</span>
                          </div>
                          <Button
                            variant="ghost"
                            className="w-full text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 rounded-xl text-sm"
                          >
                            Explore Course
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            {/* JEE TAB */}
            <TabsContent value="jee">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {subjects
                  .filter((s) => s.tag === "JEE Core" || s.tag === "JEE Advanced")
                  .map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl cursor-pointer border-0 overflow-hidden">
                        <CardContent className="p-4 sm:p-6 text-center">
                          <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{subject.icon}</div>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-slate-700">
                            {subject.name}
                          </h3>
                          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                            <Badge className={`${subject.color} border-0 rounded-lg text-xs`}>{subject.tag}</Badge>
                            <span className="text-xs sm:text-sm text-slate-500">{subject.students} students</span>
                          </div>
                          <Button
                            variant="ghost"
                            className="w-full text-orange-600 hover:bg-orange-50 rounded-xl text-sm"
                          >
                            Explore Course
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            {/* NEET TAB */}
            <TabsContent value="neet">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {subjects
                  .filter((s) => s.tag.includes("NEET"))
                  .map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl cursor-pointer border-0 overflow-hidden">
                        <CardContent className="p-4 sm:p-6 text-center">
                          <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{subject.icon}</div>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-slate-700">
                            {subject.name}
                          </h3>
                          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                            <Badge className={`${subject.color} border-0 rounded-lg text-xs`}>{subject.tag}</Badge>
                            <span className="text-xs sm:text-sm text-slate-500">{subject.students} students</span>
                          </div>
                          <Button variant="ghost" className="w-full text-pink-600 hover:bg-pink-50 rounded-xl text-sm">
                            Explore Course
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>

            {/* CET TAB */}
            <TabsContent value="cet">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {subjects
                  .filter((s) => s.tag.includes("CET"))
                  .map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl cursor-pointer border-0 overflow-hidden">
                        <CardContent className="p-4 sm:p-6 text-center">
                          <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{subject.icon}</div>
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-slate-700">
                            {subject.name}
                          </h3>
                          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                            <Badge className={`${subject.color} border-0 rounded-lg text-xs`}>{subject.tag}</Badge>
                            <span className="text-xs sm:text-sm text-slate-500">{subject.students} students</span>
                          </div>
                          <Button variant="ghost" className="w-full text-teal-600 hover:bg-teal-50 rounded-xl text-sm">
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
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent px-4">
              Powerful Learning Features
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Everything you need to excel in your competitive exams, designed with care
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative mx-auto w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(37,101,118)]/10 to-orange-100/50 rounded-2xl sm:rounded-3xl backdrop-blur-lg border border-white/50 shadow-2xl">
                  <div className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-400 rounded-full"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[rgb(37,101,118)] rounded-full"></div>
                      </div>
                      <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
                    </div>
                    <div className="flex-1 bg-white/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm border border-white/30">
                      <Image
                        src="/app.jpg?height=300&width=200"
                        alt="App Screenshot"
                        width={200}
                        height={300}
                        className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl p-4 sm:p-6 border-0">
                    <CardContent className="p-0">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4`}
                      >
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-2 text-slate-700">{feature.title}</h3>
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
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent px-4">
              Success Stories That Inspire
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
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
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 border-0">
                  <CardContent className="p-0 text-center">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(37,101,118)]/20 to-orange-200/30 rounded-full blur-lg w-16 h-16 sm:w-20 sm:h-20 mx-auto"></div>
                      <Image
                        src={
                          testimonials[currentTestimonial].image ||
                          "/placeholder.svg?height=80&width=80" ||
                          "/placeholder.svg"
                        }
                        alt={testimonials[currentTestimonial].name}
                        width={80}
                        height={80}
                        className="relative z-10 rounded-full mx-auto border-4 border-white/70 shadow-lg w-16 h-16 sm:w-20 sm:h-20 object-cover"
                      />
                    </div>
                    <blockquote className="text-base sm:text-lg lg:text-xl italic mb-4 sm:mb-6 text-slate-600 leading-relaxed px-2">
                      &quot;{testimonials[currentTestimonial].quote}&quot;
                    </blockquote>
                    <div className="text-center">
                      <h4 className="text-lg sm:text-xl font-bold text-slate-700">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-[rgb(37,101,118)] font-semibold text-sm sm:text-base">
                        {testimonials[currentTestimonial].exam} - {testimonials[currentTestimonial].rank}
                      </p>
                      <p className="text-slate-500 text-xs sm:text-sm">{testimonials[currentTestimonial].location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-6 sm:mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="rounded-full border-[rgb(37,101,118)] text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 shadow-lg p-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="rounded-full border-[rgb(37,101,118)] text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 shadow-lg p-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-[rgb(37,101,118)]" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent px-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 px-4">
              Everything you need to know about our platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/60 backdrop-blur-lg border-white/50 rounded-xl sm:rounded-2xl px-4 sm:px-6 border-0 shadow-lg"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6 text-slate-700">
                    <span className="text-sm sm:text-base lg:text-lg font-medium pr-2">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-4 sm:pb-6 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent px-4">
              We&apos;re Here to Help
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Our dedicated support team is available 24/7 to assist you
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send/?phone=917304442913&text&type=phone_number&app_absent=0",
                    "_blank",
                  )
                }
                className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl p-3 sm:p-4 lg:p-6 text-center cursor-pointer border-0"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-700">WhatsApp</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">Click here to connect with</p>
                  <p className="text-[rgb(37,101,118)] text-xs sm:text-sm font-medium mt-1 sm:mt-2">+91 98765 43210</p>
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
              <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl p-3 sm:p-4 lg:p-6 text-center cursor-pointer border-0">
                <CardContent className="p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-100 text-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Phone className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-700">Call Us</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">Speak to our experts</p>
                  <p className="text-orange-600 text-xs sm:text-sm font-medium mt-1 sm:mt-2">+91 98765 43210</p>
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
              <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl p-3 sm:p-4 lg:p-6 text-center cursor-pointer border-0">
                <CardContent className="p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-amber-100 text-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Mail className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-700">Email</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">Send us a message</p>
                  <p className="text-amber-600 text-xs sm:text-sm font-medium mt-1 sm:mt-2">support@coachingapp.com</p>
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
              <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl p-3 sm:p-4 lg:p-6 text-center cursor-pointer border-0">
                <CardContent className="p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 text-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Zap className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 text-slate-700">Live Chat</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">24/7 instant support</p>
                  <p className="text-teal-600 text-xs sm:text-sm font-medium mt-1 sm:mt-2">Always available</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

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
                    className="w-24 sm:w-32 h-auto"
                    priority
                  />
                </Link>
              </h3>
              <p className="text-slate-600 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
                India&apos;s most trusted coaching app for competitive exams. Join millions of students who achieved
                their dreams with our expert guidance and innovative learning methods.
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
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-700">Quick Links</h4>
              <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
                <li>
                  <Link href="/about" className="hover:text-[rgb(37,101,118)] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="https://yheiw.courses.store/" className="hover:text-[rgb(37,101,118)] transition-colors">
                    Courses
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
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-700">Legal</h4>
              <ul className="space-y-2 text-slate-600 text-sm sm:text-base">
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

      {/* Floating CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50"
      >
        <Button
          onClick={() => window.open("https://www.youtube.com/watch?v=4hx2u8hoh6U", "_blank")}
          size="lg"
          className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-500 hover:from-[rgb(30,85,100)] hover:to-teal-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold border-0"
        >
          <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">Free Demo</span>
          <span className="sm:hidden">Demo</span>
        </Button>
      </motion.div>
    </div>
  )
}

export default RKLandingPage

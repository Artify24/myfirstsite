"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Download,
  Youtube,
  Instagram,
  Send,
  Users,
  BookOpen,
  TrendingUp,
  GraduationCap,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
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
function FloatingElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
}: { color: string; size: string; top: string; left: string; delay?: number }) {
  return (
    <FloatingElement delay={delay}>
      <div
        className={`absolute ${top} ${left} ${size} ${color} rounded-full blur-xl opacity-20`}
        style={{ filter: "blur(40px)" }}
      />
    </FloatingElement>
  )
}

export default function RKLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const stats = [
    { number: 20, suffix: "M+", label: "Downloads", icon: Users, color: "text-[rgb(37,101,118)]" },
    { number: 95, suffix: "%", label: "Success Rate", icon: TrendingUp, color: "text-orange-500" },
    { number: 500, suffix: "+", label: "Expert Educators", icon: GraduationCap, color: "text-amber-500" },
    { number: 10, suffix: "L+", label: "Students", icon: BookOpen, color: "text-teal-500" },
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 text-slate-800 overflow-hidden relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[rgb(37,101,118)] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                RK
              </div>
              <span className="text-lg font-bold text-[rgb(37,101,118)]">CoachingApp</span>
            </Link>

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

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </button>
          </div>

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

      {/* Rest of the sections remain the same but I&apos;ll include key ones for SEO */}

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

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  TrendingUp,
  GraduationCap,
  Target,
  Heart,
  Globe,
  Lightbulb,
  Shield,
  CheckCircle,
  Play,
  Download,
  Menu,
  Instagram,
  Facebook,
  Youtube,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { OurTeam } from "./OurTeam"
import { useRouter } from "next/navigation"

const stats = [
  { number: 20, suffix: "M+", label: "Students Served", icon: Users, color: "text-[rgb(37,101,118)]" },
  { number: 95, suffix: "%", label: "Success Rate", icon: TrendingUp, color: "text-orange-500" },
  { number: 500, suffix: "+", label: "Expert Educators", icon: GraduationCap, color: "text-amber-500" },
  { number: 25, suffix: "+", label: "States Covered", icon: Globe, color: "text-teal-500" },
]

const values = [
  {
    icon: Heart,
    title: "Student-First Approach",
    description: "Every decision we make is centered around what's best for our students' learning and success.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Shield,
    title: "Quality & Trust",
    description: "We maintain the highest standards in content quality and educational integrity.",
    color: "bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)]",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Making quality education accessible to students regardless of their geographical location.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously innovating with technology to enhance the learning experience.",
    color: "bg-amber-50 text-amber-600",
  },
]

// Educational SVG Component
function EducationalIllustration() {
  return (
    <svg viewBox="0 0 600 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Elements */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(37,101,118)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="rgb(245,158,11)" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(37,101,118)" />
          <stop offset="100%" stopColor="rgb(20,184,166)" />
        </linearGradient>
      </defs>
      {/* Background Circle */}
      <circle cx="300" cy="250" r="200" fill="url(#grad1)" />
      {/* Books Stack */}
      <rect x="100" y="350" width="80" height="12" rx="2" fill="rgb(37,101,118)" />
      <rect x="105" y="340" width="70" height="12" rx="2" fill="rgb(245,158,11)" />
      <rect x="110" y="330" width="60" height="12" rx="2" fill="rgb(20,184,166)" />
      <rect x="115" y="320" width="50" height="12" rx="2" fill="rgb(239,68,68)" />
      {/* Laptop/Computer */}
      <rect x="250" y="280" width="120" height="80" rx="8" fill="rgb(71,85,105)" />
      <rect x="260" y="290" width="100" height="60" rx="4" fill="rgb(248,250,252)" />
      <rect x="290" y="365" width="40" height="4" rx="2" fill="rgb(71,85,105)" />
      <rect x="280" y="369" width="60" height="8" rx="4" fill="rgb(71,85,105)" />
      {/* Screen Content - Graph */}
      <polyline
        points="270,330 280,320 290,325 300,315 310,320 320,310 330,315 340,305"
        stroke="rgb(37,101,118)"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="280" cy="320" r="2" fill="rgb(37,101,118)" />
      <circle cx="300" cy="315" r="2" fill="rgb(245,158,11)" />
      <circle cx="320" cy="310" r="2" fill="rgb(20,184,166)" />
      <circle cx="340" cy="305" r="2" fill="rgb(239,68,68)" />
      {/* Students/People */}
      {/* Student 1 */}
      <circle cx="150" cy="200" r="20" fill="rgb(254,215,170)" />
      <rect x="140" y="220" width="20" height="30" rx="10" fill="rgb(37,101,118)" />
      <rect x="135" y="235" width="30" height="15" rx="7" fill="rgb(245,158,11)" />
      {/* Student 2 */}
      <circle cx="450" cy="180" r="20" fill="rgb(254,215,170)" />
      <rect x="440" y="200" width="20" height="30" rx="10" fill="rgb(20,184,166)" />
      <rect x="435" y="215" width="30" height="15" rx="7" fill="rgb(239,68,68)" />
      {/* Graduation Cap */}
      <polygon points="300,120 280,130 320,130" fill="rgb(37,101,118)" />
      <rect x="295" y="115" width="10" height="15" rx="2" fill="rgb(37,101,118)" />
      <circle cx="300" cy="110" r="3" fill="rgb(245,158,11)" />
      {/* Floating Elements */}
      {/* Mathematical Symbols */}
      <text x="400" y="150" fontSize="24" fill="rgb(37,101,118)" opacity="0.6">
        ∑
      </text>
      <text x="180" y="120" fontSize="20" fill="rgb(245,158,11)" opacity="0.6">
        π
      </text>
      <text x="420" y="300" fontSize="18" fill="rgb(20,184,166)" opacity="0.6">
        ∫
      </text>
      <text x="80" y="180" fontSize="16" fill="rgb(239,68,68)" opacity="0.6">
        √
      </text>
      {/* Light Bulb */}
      <circle cx="480" cy="120" r="12" fill="rgb(245,158,11)" opacity="0.8" />
      <rect x="476" y="132" width="8" height="6" rx="1" fill="rgb(245,158,11)" opacity="0.8" />
      <line x1="470" y1="110" x2="490" y2="110" stroke="rgb(245,158,11)" strokeWidth="2" opacity="0.6" />
      <line x1="470" y1="130" x2="490" y2="130" stroke="rgb(245,158,11)" strokeWidth="2" opacity="0.6" />
      {/* Trophy */}
      <rect x="500" y="350" width="20" height="25" rx="2" fill="rgb(245,158,11)" />
      <ellipse cx="510" cy="345" rx="15" ry="8" fill="rgb(245,158,11)" />
      <rect x="505" y="375" width="10" height="8" rx="2" fill="rgb(120,113,108)" />
      <circle cx="510" cy="355" r="3" fill="rgb(37,101,118)" />
      {/* Connecting Lines/Network */}
      <line
        x1="150"
        y1="220"
        x2="250"
        y2="280"
        stroke="rgb(37,101,118)"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="5,5"
      />
      <line
        x1="450"
        y1="200"
        x2="370"
        y2="280"
        stroke="rgb(20,184,166)"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="5,5"
      />
      <line
        x1="300"
        y1="140"
        x2="300"
        y2="280"
        stroke="rgb(245,158,11)"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="5,5"
      />
      {/* Floating Particles */}
      <circle cx="120" cy="100" r="3" fill="rgb(37,101,118)" opacity="0.4" />
      <circle cx="520" cy="80" r="2" fill="rgb(245,158,11)" opacity="0.4" />
      <circle cx="80" cy="300" r="2" fill="rgb(20,184,166)" opacity="0.4" />
      <circle cx="550" cy="250" r="3" fill="rgb(239,68,68)" opacity="0.4" />
      <circle cx="50" cy="400" r="2" fill="rgb(37,101,118)" opacity="0.4" />
    </svg>
  )
}

export default function AboutPageComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // The header is fixed and its height is h-14 (56px) on mobile, h-16 (64px) on sm+ screens
  // Add padding-top to the main wrapper to prevent layout shift
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 text-slate-800 pt-14 sm:pt-16">
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
              <Link href="/" className=" text-gray-600 font-medium text-sm xl:text-base">
                Home
              </Link>
              <Link href="/about" className=" text-[rgb(37,101,118)] hover:text-[rgb(37,101,118)] text-sm xl:text-base">
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
              <Button className="bg-[rgb(37,101,118)] hover:bg-[rgb(30,85,100)] text-white text-sm px-4 py-2" onClick={()=> window.open("https://yheiw.courses.store/")}>
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
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)]  text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-[rgb(37,101,118)] font-medium  text-sm"
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

      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-3 sm:px-4 lg:px-8 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 via-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent px-4">
              About RK Coaching
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              We&rsquo;re on a mission to democratize quality education and make it accessible to every student across
              India. Since 2018, we&rsquo;ve been transforming lives through innovative learning solutions and expert
              guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-[rgb(37,101,118)]/5 to-orange-50/80 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8">
                  <EducationalIllustration />
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 text-white p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold">6+</div>
                    <div className="text-xs sm:text-sm">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-700">Our Story</h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                RKDEMY is a premier coaching institute dedicated to Empowering Youth Through Education by providing high-quality, simplified, and result-oriented learning experiences. With a legacy of 14+ years, we have successfully trained 5,00,000+ students across 11th/12th Science, JEE/MH-CET, Engineering Diploma/Degree, and SkillTech courses, helping them build strong academic foundations and achieve their career goals. Our team of expert faculty, innovative teaching methodologies, and cutting-edge E-Learning App make education accessible, engaging, and effective for students from all backgrounds.  
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
               With our expansion into Skill Development & Placement Solutions, RKDEMY now bridges the gap between campus and corporates, providing students with industry-relevant training, career guidance, and job placement opportunities. Whether through offline coaching, online learning, or career-focused programs, RKDEMY is committed to shaping the future of students and empowering them with knowledge, confidence, and success.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white rounded-xl text-sm sm:text-base w-full sm:w-auto">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Our Story
                </Button>
                <Button
                  variant="outline"
                  className="border-[rgb(37,101,118)] text-[rgb(37,101,118)] rounded-xl text-sm sm:text-base w-full sm:w-auto bg-transparent"
                >
                  Download App
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent px-4">
              Our Impact in Numbers
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              These numbers represent the trust millions of students and parents have placed in us
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
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 p-3 sm:p-4 lg:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl border-0">
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
                      {stat.number}
                      {stat.suffix}
                    </div>
                    <p className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[rgb(37,101,118)]/5 to-teal-50/80 backdrop-blur-lg border-[rgb(37,101,118)]/20 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 h-full border-2">
                <CardContent className="p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <Target className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-slate-700">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    To democratize quality education by making it accessible, affordable, and effective for every
                    student, regardless of their geographical location or economic background. We believe that every
                    student deserves the opportunity to achieve their dreams through quality education.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(37,101,118)] mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-slate-600 text-sm sm:text-base">Accessible quality education for all</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(37,101,118)] mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-slate-600 text-sm sm:text-base">Innovative learning methodologies</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(37,101,118)] mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-slate-600 text-sm sm:text-base">Personalized learning experiences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-orange-50/80 to-amber-50/80 backdrop-blur-lg border-orange-200/50 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 h-full border-2">
                <CardContent className="p-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-100 text-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-slate-700">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    To become the worlds most trusted and effective educational platform, empowering millions of
                    students to achieve their academic and career goals. We envision a future where quality education
                    knows no boundaries and every student can reach their full potential.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-slate-600 text-sm sm:text-base">Global educational leadership</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-slate-600 text-sm sm:text-base">Technology-driven learning solutions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 mr-2 sm:mr-3 flex-shrink-0" />
                      <span className="text-slate-600 text-sm sm:text-base">Transforming lives through education</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent px-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              These values guide every decision we make and every solution we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl p-4 sm:p-6 text-center border-0 h-full">
                  <CardContent className="p-0">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                    >
                      <value.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-slate-700">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <OurTeam />
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-[rgb(37,101,118)]/5 to-orange-50/80 backdrop-blur-lg border-[rgb(37,101,118)]/20 rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 border-2">
              <CardContent className="p-0">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-700">
                  Join Our Mission
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Be part of India&rsquo;s largest educational transformation. Download RK Coaching App today and start
                  your journey towards success.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button onClick={()=> window.open("https://yheiw.courses.store/")} className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-0 w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Download App
                  </Button>
                  <Button
                    onClick={()=> router.push("/contact")}
                    variant="outline"
                    className="border-[rgb(37,101,118)] text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto bg-transparent"
                  >
                    Contact Us
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
    </div>
  )
}

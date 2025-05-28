"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  TrendingUp,
  GraduationCap,
  Award,
  Target,
  Heart,
  Globe,
  Lightbulb,
  Shield,
  CheckCircle,
  Play,
  Download,
  Menu,
  X,
  Trophy,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { number: 20, suffix: "M+", label: "Students Served", icon: Users, color: "text-[rgb(37,101,118)]" },
  { number: 95, suffix: "%", label: "Success Rate", icon: TrendingUp, color: "text-orange-500" },
  { number: 500, suffix: "+", label: "Expert Educators", icon: GraduationCap, color: "text-amber-500" },
  { number: 25, suffix: "+", label: "States Covered", icon: Globe, color: "text-teal-500" },
]

const milestones = [
  {
    year: "2018",
    title: "RK Coaching Founded",
    description: "Started with a vision to democratize quality education across India",
    icon: Lightbulb,
    color: "bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)]",
  },
  {
    year: "2019",
    title: "1 Million Downloads",
    description: "Reached our first major milestone with students from 15 states",
    icon: Download,
    color: "bg-orange-100 text-orange-600",
  },
  {
    year: "2020",
    title: "AI Integration",
    description: "Launched AI-powered doubt solving and personalized learning paths",
    icon: Zap,
    color: "bg-amber-100 text-amber-600",
  },
  {
    year: "2021",
    title: "10 Million Users",
    description: "Expanded to cover all major competitive exams across India",
    icon: Users,
    color: "bg-teal-100 text-teal-600",
  },
  {
    year: "2022",
    title: "Top Educators Network",
    description: "Partnered with 500+ expert educators from premier institutions",
    icon: Award,
    color: "bg-blue-100 text-blue-600",
  },
  {
    year: "2024",
    title: "20 Million Strong",
    description: "Became India's most trusted educational platform with proven results",
    icon: Trophy,
    color: "bg-purple-100 text-purple-600",
  },
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

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    bio: "IIT Delhi alumnus with 20+ years in education technology. Former McKinsey consultant passionate about transforming education.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    achievements: ["Forbes 30 Under 30", "Education Innovation Award"],
  },
  {
    name: "Dr. Priya Sharma",
    role: "Chief Academic Officer",
    bio: "AIIMS graduate and former professor with expertise in curriculum design and educational psychology.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    achievements: ["National Teaching Excellence Award", "Published 50+ Research Papers"],
  },
  {
    name: "Amit Singh",
    role: "Chief Technology Officer",
    bio: "IIT Bombay graduate and former Google engineer leading our AI and technology initiatives.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    achievements: ["Google Innovation Award", "AI Research Pioneer"],
  },
  {
    name: "Sneha Reddy",
    role: "Head of Student Success",
    bio: "Harvard MBA with 15+ years in student counseling and career guidance across top institutions.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    achievements: ["Student Counselor of the Year", "Career Guidance Expert"],
  },
]

const achievements = [
  {
    title: "Best Educational App 2023",
    organization: "Google Play Awards",
    year: "2023",
    icon: Award,
  },
  {
    title: "EdTech Innovation Award",
    organization: "NASSCOM",
    year: "2022",
  },
  {
    title: "Top 10 Startups in Education",
    organization: "Economic Times",
    year: "2021",
  },
  {
    title: "Digital India Excellence Award",
    organization: "Government of India",
    year: "2020",
  },
]

export default function AboutPageComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 text-slate-800">
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-[rgb(37,101,118)]">
                Home
              </Link>
              <Link href="/about" className="text-[rgb(37,101,118)] font-medium">
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
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-[rgb(37,101,118)] font-medium"
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent">
              About RK Coaching
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              We&rsquo;re on a mission to democratize quality education and make it accessible to every student across India.
              Since 2018, we&rsquo;ve been transforming lives through innovative learning solutions and expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="RK Coaching Team"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">6+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-700">Our Story</h2>
              <p className="text-slate-600 leading-relaxed">
                RK Coaching was born from a simple yet powerful vision: to bridge the gap between quality education and
                accessibility. Founded by Rajesh Kumar, an IIT Delhi alumnus, our journey began when he realized that
                millions of talented students across India lacked access to quality coaching due to geographical and
                financial constraints.
              </p>
              <p className="text-slate-600 leading-relaxed">
                What started as a small initiative to help students in remote areas has now grown into India&rsquo;s most
                trusted educational platform, serving over 20 million students across 25+ states. Our success is
                measured not just in numbers, but in the dreams we&rsquo;ve helped fulfill and the lives we&rsquo;ve transformed.
              </p>
              <div className="flex items-center space-x-4">
                <Button className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white rounded-xl">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Our Story
                </Button>
                <Button variant="outline" className="border-[rgb(37,101,118)] text-[rgb(37,101,118)] rounded-xl">
                  Download App
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These numbers represent the trust millions of students and parents have placed in us
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
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 p-6 rounded-3xl shadow-lg hover:shadow-xl border-0">
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
                      {stat.number}
                      {stat.suffix}
                    </div>
                    <p className="text-slate-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[rgb(37,101,118)]/5 to-teal-50/80 backdrop-blur-lg border-[rgb(37,101,118)]/20 rounded-3xl shadow-xl p-8 h-full border-2">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] rounded-2xl flex items-center justify-center mb-6">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-slate-700">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    To democratize quality education by making it accessible, affordable, and effective for every
                    student, regardless of their geographical location or economic background. We believe that every
                    student deserves the opportunity to achieve their dreams through quality education.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Accessible quality education for all</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Innovative learning methodologies</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-[rgb(37,101,118)] mr-3" />
                      <span className="text-slate-600">Personalized learning experiences</span>
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
              <Card className="bg-gradient-to-br from-orange-50/80 to-amber-50/80 backdrop-blur-lg border-orange-200/50 rounded-3xl shadow-xl p-8 h-full border-2">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-slate-700">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    To become the worlds most trusted and effective educational platform, empowering millions of
                    students to achieve their academic and career goals. We envision a future where quality education
                    knows no boundaries and every student can reach their full potential.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                      <span className="text-slate-600">Global educational leadership</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                      <span className="text-slate-600">Technology-driven learning solutions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                      <span className="text-slate-600">Transforming lives through education</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-orange-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These values guide every decision we make and every solution we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl p-6 text-center border-0 h-full">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-700">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From a small startup to Indias most trusted educational platform
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[rgb(37,101,118)] to-orange-500 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl shadow-lg p-6 border-0">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-12 h-12 ${milestone.color} rounded-xl flex items-center justify-center`}>
                            <milestone.icon className="h-6 w-6" />
                          </div>
                          <Badge className="bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] border-0">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-700">{milestone.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-white border-4 border-[rgb(37,101,118)] rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-amber-600 bg-clip-text text-transparent">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visionary leaders with decades of experience in education and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl overflow-hidden border-0">
                  <div className="relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <Badge key={idx} className="bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] border-0 text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent">
              Awards & Recognition
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl p-6 text-center border-0">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-700">{achievement.title}</h3>
                    <p className="text-slate-600 text-sm mb-2">{achievement.organization}</p>
                    <Badge className="bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] border-0">
                      {achievement.year}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-[rgb(37,101,118)]/5 to-orange-50/80 backdrop-blur-lg border-[rgb(37,101,118)]/20 rounded-3xl shadow-xl p-12 border-2">
              <CardContent className="p-0">
                <h3 className="text-4xl font-bold mb-6 text-slate-700">Join Our Mission</h3>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                  Be part of India&rsquo;s largest educational transformation. Download RK Coaching App today and start your
                  journey towards success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white px-8 py-4 text-lg rounded-xl border-0">
                    <Download className="mr-2 h-5 w-5" />
                    Download App
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[rgb(37,101,118)] text-[rgb(37,101,118)] hover:bg-[rgb(37,101,118)]/5 px-8 py-4 text-lg rounded-xl"
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
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/30 bg-white/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              RK
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent">
              CoachingApp
            </span>
          </Link>
          <p className="text-slate-600 mb-4">© 2024 RK CoachingApp. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-slate-500 hover:text-[rgb(37,101,118)] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-slate-500 hover:text-[rgb(37,101,118)] transition-colors">
              About
            </Link>
            <Link href="/success-stories" className="text-slate-500 hover:text-[rgb(37,101,118)] transition-colors">
              Success Stories
            </Link>
            <Link href="/contact" className="text-slate-500 hover:text-[rgb(37,101,118)] transition-colors">
              Contact
            </Link>
            <Link href="/blog" className="text-slate-500 hover:text-[rgb(37,101,118)] transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

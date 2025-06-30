"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  GraduationCap,
  Youtube,
  Facebook,
  Instagram,
  Download,
  TrendingUp,
  Menu,
  X,
  Code,
  Cpu,
  Zap,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: 95, suffix: "%", label: "Success Rate", icon: TrendingUp },
  { number: 500, suffix: "+", label: "Top 100 Ranks", icon: Trophy },
  {
    number: 25000,
    suffix: "+",
    label: "Engineers Placed",
    icon: GraduationCap,
  },
  { number: 50, suffix: "+", label: "Top Companies", icon: Award },
];

// Video testimonials with actual YouTube video IDs
const videoTestimonials = [
  {
    id: 1,
    title: "RKDemy Student Testimonials 01",
    videoId: "1GwBouZSMQM",
    category: "Engineering Success",
  },
  {
    id: 2,
    title: "RKDemy Student Testimonials 02",
    videoId: "aMnSsaetsxU",
    category: "JEE Advanced",
  },
  {
    id: 3,
    title: "RKDemy Student Testimonials 03",
    videoId: "ppvnN750tDE",
    category: "GATE",
  },
  {
    id: 4,
    title: "RKDemy Student Testimonials 04",
    videoId: "nLxLeg5rPGw",
    category: "NEET",
  },
  {
    id: 5,
    title: "RKDemy Student Testimonials 05",
    videoId: "j4FCIL3My_k",
    category: "Engineering Entrance",
  },
  {
    id: 6,
    title: "RKDemy Student Testimonials 06",
    videoId: "rMSmmFI6I5c",
    category: "JEE Main",
  },
  {
    id: 7,
    title: "RKDemy Student Testimonials 07",
    videoId: "F1En4uAALtI",
    category: "JEE Advanced",
  },
  {
    id: 8,
    title: "RKDemy Student Testimonials 08",
    videoId: "xWbdgBm-Gto",
    category: "GATE",
  },
  {
    id: 9,
    title: "RKDemy Student Testimonials 09",
    videoId: "I1ldLT9TgAM",
    category: "Engineering Success",
  },
];

export default function SuccessStoriesComponent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchQuery, setSearchQuery] = useState(""); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) ;

  const filteredStories = videoTestimonials.filter((story) => {
    const matchesCategory =
      selectedCategory === "All" || story.category === selectedCategory;
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 text-slate-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
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

            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-[rgb(37,101,118)] text-sm xl:text-base"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-[rgb(37,101,118)] text-sm xl:text-base"
              >
                About
              </Link>
              <Link
                href="/success-stories"
                className="text-[rgb(37,101,118)] font-medium text-sm xl:text-base"
              >
                Success Stories
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-[rgb(37,101,118)] text-sm xl:text-base"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-[rgb(37,101,118)] text-sm xl:text-base"
              >
                Blog
              </Link>
              <Button className="bg-[rgb(37,101,118)] hover:bg-[rgb(30,85,100)] text-white text-sm px-4 py-2">
                Download App
              </Button>
            </nav>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
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
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)] text-sm"
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
                  className="block px-3 py-2 text-[rgb(37,101,118)] font-medium text-sm"
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
      <section className="py-16 sm:py-20 px-3 sm:px-4 lg:px-8 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 rounded-2xl flex items-center justify-center">
                  <Code className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                  <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 via-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent px-4">
              Student Testimonials
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
              Watch real students share their inspiring success stories and
              journey with RK Coaching App. From small towns to top engineering
              colleges, these testimonials showcase the transformative power of
              quality education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                      <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
                    </div>
                    <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 text-slate-700">
                      {stat.number}
                      {stat.suffix}
                    </div>
                    <p className="text-slate-600 font-medium text-xs sm:text-sm lg:text-base">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Grid */}
      <section className="px-3 sm:px-4 lg:px-8 mb-12 sm:mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-700 to-[rgb(37,101,118)] bg-clip-text text-transparent px-4">
              Watch Our Success Stories
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Real students, real results, real inspiration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStories.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl overflow-hidden border-0">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        className="w-full h-full rounded-2xl sm:rounded-3xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-bold text-slate-700">
                        {video.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
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
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-slate-700">
                  Your Success Story Awaits
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Join thousands of successful students who achieved their
                  dreams with RK Coaching App. Start your journey today and
                  become our next success story.
                </p>
                <Button className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-0 w-full sm:w-auto">
                  Start Your Journey
                </Button>
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
  );
}

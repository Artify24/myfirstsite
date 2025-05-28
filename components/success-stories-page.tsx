"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Star,
  Trophy,
  GraduationCap,
  Target,
  Calendar,
  MapPin,
  Search,
  Filter,
  Play,
  Quote,
  Award,
  TrendingUp,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const successStories = [
  {
    id: 1,
    name: "Arjun Patel",
    exam: "JEE Advanced",
    rank: "AIR 47",
    year: "2024",
    branch: "Mumbai",
    image: "/placeholder.svg?height=300&width=300",
    story:
      "I was struggling with Physics concepts until I joined RK Coaching App. The personalized study plans and instant doubt clearing helped me understand complex topics. The mock tests were exactly like the real exam pattern.",
    fullStory:
      "Coming from a middle-class family in Mumbai, I always dreamed of getting into IIT. When I discovered RK Coaching App, it was a game-changer. The AI-powered doubt solving feature helped me clear my concepts instantly, and the live classes with top educators gave me the confidence I needed. The regular mock tests and performance analysis helped me identify my weak areas and work on them systematically.",
    subjects: ["Physics", "Mathematics", "Chemistry"],
    score: "324/360",
    college: "IIT Bombay - Computer Science",
    videoTestimonial: true,
    featured: true,
    category: "JEE",
    location: "Mumbai, Maharashtra",
    studyDuration: "2 years",
  },
  {
    id: 2,
    name: "Sneha Reddy",
    exam: "NEET",
    rank: "AIR 156",
    year: "2024",
    branch: "Hyderabad",
    image: "/placeholder.svg?height=300&width=300",
    story:
      "The comprehensive study material and expert guidance from RK helped me achieve my dream of becoming a doctor. The biology section preparation was exceptional with detailed explanations.",
    fullStory:
      "As a girl from Hyderabad with dreams of becoming a doctor, I faced many challenges in my NEET preparation. RK Coaching App's structured approach and comprehensive study materials made all the difference. The biology section was particularly well-designed with detailed diagrams and explanations that helped me score 180/180 in biology.",
    subjects: ["Biology", "Chemistry", "Physics"],
    score: "695/720",
    college: "AIIMS Delhi - MBBS",
    videoTestimonial: true,
    featured: true,
    category: "NEET",
    location: "Hyderabad, Telangana",
    studyDuration: "18 months",
  },
  {
    id: 3,
    name: "Rohit Kumar",
    exam: "UPSC CSE",
    rank: "AIR 23",
    year: "2024",
    branch: "Delhi",
    image: "/placeholder.svg?height=300&width=300",
    story:
      "The current affairs updates and comprehensive GS preparation through RK helped me crack UPSC in my second attempt. The answer writing practice was invaluable.",
    fullStory:
      "After failing in my first UPSC attempt, I was demotivated. RK Coaching App's UPSC course gave me a structured approach to preparation. The daily current affairs updates, comprehensive general studies material, and answer writing practice sessions were instrumental in my success.",
    subjects: ["General Studies", "Current Affairs", "Optional Subject"],
    score: "1050/1750",
    college: "IAS - Indian Administrative Service",
    videoTestimonial: false,
    featured: true,
    category: "UPSC",
    location: "Delhi, India",
    studyDuration: "3 years",
  },
  {
    id: 4,
    name: "Priya Sharma",
    exam: "JEE Main",
    rank: "AIR 234",
    year: "2024",
    branch: "Pune",
    image: "/placeholder.svg?height=300&width=300",
    story:
      "Coming from a small town, RK gave me access to the same quality education as students in big cities. The live doubt sessions were incredibly helpful.",
    fullStory:
      "Being from a small town near Pune, I didn't have access to quality coaching institutes. RK Coaching App bridged this gap perfectly. The live interactive classes and doubt clearing sessions made me feel like I was studying in the best coaching institute in the country.",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    score: "297/300",
    college: "NIT Trichy - Electronics Engineering",
    videoTestimonial: true,
    featured: false,
    category: "JEE",
    location: "Pune, Maharashtra",
    studyDuration: "2 years",
  },
  {
    id: 5,
    name: "Karthik Menon",
    exam: "NEET",
    rank: "AIR 89",
    year: "2024",
    branch: "Bangalore",
    image: "/placeholder.svg?height=300&width=300",
    story:
      "The AI-powered personalized learning paths helped me focus on my weak areas. The regular assessments kept me motivated throughout my preparation.",
    fullStory:
      "I was weak in chemistry initially, but RK's AI-powered learning system identified my weak areas and created a personalized study plan. The adaptive learning technology helped me improve my chemistry score from 120 to 175 out of 180.",
    subjects: ["Biology", "Chemistry", "Physics"],
    score: "701/720",
    college: "JIPMER - MBBS",
    videoTestimonial: false,
    featured: false,
    category: "NEET",
    location: "Bangalore, Karnataka",
    studyDuration: "2 years",
  },
  {
    id: 6,
    name: "Ananya Singh",
    exam: "JEE Advanced",
    rank: "AIR 112",
    year: "2024",
    branch: "Kolkata",
    image: "/placeholder.svg?height=300&width=300",
    story:
      "The quality of questions in mock tests was outstanding. It prepared me well for the actual exam pattern and difficulty level.",
    fullStory:
      "The mock tests on RK were incredibly close to the actual JEE Advanced pattern. This helped me manage my time effectively during the real exam. The detailed solutions and video explanations for each question were extremely helpful.",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    score: "289/360",
    college: "IIT Delhi - Mechanical Engineering",
    videoTestimonial: true,
    featured: false,
    category: "JEE",
    location: "Kolkata, West Bengal",
    studyDuration: "2 years",
  },
]

const examCategories = ["All", "JEE", "NEET", "UPSC", "Board Exams"]

const stats = [
  { number: 95, suffix: "%", label: "Success Rate", icon: TrendingUp },
  { number: 500, suffix: "+", label: "Top 100 Ranks", icon: Trophy },
  { number: 50000, suffix: "+", label: "Success Stories", icon: GraduationCap },
  { number: 25, suffix: "+", label: "States Covered", icon: MapPin },
]

export default function SuccessStoriesComponent() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStory, setSelectedStory] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredStories = successStories.filter((story) => {
    const matchesCategory = selectedCategory === "All" || story.category === selectedCategory
    const matchesSearch =
      story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.exam.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredStories = filteredStories.filter((story) => story.featured)
  const regularStories = filteredStories.filter((story) => !story.featured)

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
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-[rgb(37,101,118)]">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[rgb(37,101,118)]">
                About
              </Link>
              <Link href="/success-stories" className="text-[rgb(37,101,118)] font-medium">
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
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/success-stories"
                  className="block px-3 py-2 text-[rgb(37,101,118)] font-medium"
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
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Inspiring journeys of students who achieved their dreams with RK Coaching App. From small towns to top
              ranks, these are the stories that motivate us every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                    <div className="w-16 h-16 bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8" />
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

      {/* Search and Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                placeholder="Search by name, exam, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/60 backdrop-blur-lg border-white/50 rounded-xl"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-500" />
              <div className="flex flex-wrap gap-2">
                {examCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full ${
                      selectedCategory === category
                        ? "bg-[rgb(37,101,118)] hover:bg-[rgb(30,85,100)] text-white"
                        : "border-slate-300 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      {featuredStories.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-700">Featured Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedStory(story.id)}
                >
                  <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl overflow-hidden border-0 h-full">
                    <div className="relative">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 text-white border-0">
                        Featured
                      </Badge>
                      {story.videoTestimonial && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                            <Play className="h-8 w-8 text-[rgb(37,101,118)] ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-orange-100 text-orange-700 border-0">{story.exam}</Badge>
                        <div className="flex items-center text-amber-500">
                          <Trophy className="h-4 w-4 mr-1" />
                          <span className="text-sm font-semibold">{story.rank}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-slate-700">{story.name}</h3>
                      <p className="text-slate-600 text-sm mb-3">{story.college}</p>
                      <div className="flex items-center text-sm text-slate-500 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{story.location}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{story.year}</span>
                      </div>
                      <blockquote className="text-slate-600 italic text-sm leading-relaxed">
                        <Quote className="h-4 w-4 text-slate-400 inline mr-1" />
                        {story.story}
                      </blockquote>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Success Stories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-slate-700">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => setSelectedStory(story.id)}
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl overflow-hidden border-0 h-full">
                  <div className="relative">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={300}
                      height={150}
                      className="w-full h-40 object-cover"
                    />
                    {story.videoTestimonial && (
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="h-4 w-4 text-[rgb(37,101,118)]" />
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] border-0">{story.exam}</Badge>
                      <div className="flex items-center text-amber-500">
                        <Award className="h-4 w-4 mr-1" />
                        <span className="text-sm font-semibold">{story.rank}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-700">{story.name}</h3>
                    <p className="text-slate-600 text-sm mb-3">{story.college}</p>
                    <div className="flex items-center text-sm text-slate-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{story.branch}</span>
                      <span className="mx-2">•</span>
                      <span>{story.year}</span>
                    </div>
                    <p className="text-slate-600 text-sm line-clamp-3">{story.story}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const story = successStories.find((s) => s.id === selectedStory)
                if (!story) return null

                return (
                  <div className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        width={120}
                        height={120}
                        className="rounded-2xl"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-3xl font-bold text-slate-700">{story.name}</h2>
                          <Badge className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 text-white border-0">
                            {story.rank}
                          </Badge>
                        </div>
                        <p className="text-xl text-[rgb(37,101,118)] font-semibold mb-2">{story.college}</p>
                        <div className="flex items-center gap-4 text-slate-600">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {story.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {story.year}
                          </span>
                          <span className="flex items-center">
                            <Target className="h-4 w-4 mr-1" />
                            {story.score}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card className="bg-[rgb(37,101,118)]/5 border-0 p-4">
                        <CardContent className="p-0 text-center">
                          <Trophy className="h-8 w-8 text-[rgb(37,101,118)] mx-auto mb-2" />
                          <p className="font-semibold text-slate-700">Rank Achieved</p>
                          <p className="text-[rgb(37,101,118)] font-bold">{story.rank}</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-orange-50 border-0 p-4">
                        <CardContent className="p-0 text-center">
                          <GraduationCap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                          <p className="font-semibold text-slate-700">Study Duration</p>
                          <p className="text-orange-600 font-bold">{story.studyDuration}</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-amber-50 border-0 p-4">
                        <CardContent className="p-0 text-center">
                          <Star className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                          <p className="font-semibold text-slate-700">Branch</p>
                          <p className="text-amber-600 font-bold">{story.branch}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 text-slate-700">Success Story</h3>
                      <p className="text-slate-600 leading-relaxed">{story.fullStory}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3 text-slate-700">Subjects Mastered</h3>
                      <div className="flex flex-wrap gap-2">
                        {story.subjects.map((subject, index) => (
                          <Badge key={index} className="bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)] border-0">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        onClick={() => setSelectedStory(null)}
                        className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white rounded-xl border-0"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                <h3 className="text-4xl font-bold mb-6 text-slate-700">Your Success Story Awaits</h3>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of successful students who achieved their dreams with RK Coaching App. Start your
                  journey today and become our next success story.
                </p>
                <Button className="bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white px-8 py-4 text-lg rounded-xl border-0">
                  Start Your Journey
                </Button>
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

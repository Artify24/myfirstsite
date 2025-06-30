"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MessageCircle,
  Send,
  Globe,
  Menu,
  X,
  Youtube,
  Instagram,
  Facebook,
  Download,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const branches = [
  {
    id: 1,
    name: "Mumbai Headquarters",
    type: "Headquarters",
    address: "RK Tower, 15th Floor, Bandra Kurla Complex, Mumbai - 400051",
    phone: "+91 98765 43210",
    email: "mumbai@rkcoaching.com",
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    manager: "Rajesh Kumar",
    students: "25,000+",
    established: "2018",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Live Classes", "Doubt Solving", "Mock Tests", "Counseling"],
    coordinates: { lat: 19.0596, lng: 72.8295 },
    rating: 4.9,
    reviews: 1250,
  },
  {
    id: 2,
    name: "Delhi Branch",
    type: "Regional Office",
    address: "RK Education Hub, Connaught Place, New Delhi - 110001",
    phone: "+91 98765 43211",
    email: "delhi@rkcoaching.com",
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    manager: "Priya Sharma",
    students: "18,000+",
    established: "2019",
    image: "/placeholder.svg?height=300&width=400",
    features: ["UPSC Coaching", "Live Classes", "Study Material", "Mentoring"],
    coordinates: { lat: 28.6139, lng: 77.209 },
    rating: 4.8,
    reviews: 980,
  },
  {
    id: 3,
    name: "Bangalore Branch",
    type: "Tech Center",
    address: "RK Tech Park, Electronic City, Bangalore - 560100",
    phone: "+91 98765 43212",
    email: "bangalore@rkcoaching.com",
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    manager: "Amit Singh",
    students: "22,000+",
    established: "2020",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "AI Learning",
      "Tech Support",
      "App Development",
      "Innovation Lab",
    ],
    coordinates: { lat: 12.9716, lng: 77.5946 },
    rating: 4.9,
    reviews: 1100,
  },
  {
    id: 4,
    name: "Hyderabad Branch",
    type: "Regional Office",
    address: "RK Learning Center, HITEC City, Hyderabad - 500081",
    phone: "+91 98765 43213",
    email: "hyderabad@rkcoaching.com",
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    manager: "Sneha Reddy",
    students: "15,000+",
    established: "2021",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "NEET Coaching",
      "Medical Entrance",
      "Biology Lab",
      "Career Guidance",
    ],
    coordinates: { lat: 17.385, lng: 78.4867 },
    rating: 4.7,
    reviews: 750,
  },
  {
    id: 5,
    name: "Pune Branch",
    type: "Regional Office",
    address: "RK Campus, Koregaon Park, Pune - 411001",
    phone: "+91 98765 43214",
    email: "pune@rkcoaching.com",
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    manager: "Karthik Menon",
    students: "12,000+",
    established: "2021",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "JEE Coaching",
      "Engineering Prep",
      "Physics Lab",
      "Mathematics Center",
    ],
    coordinates: { lat: 18.5204, lng: 73.8567 },
    rating: 4.8,
    reviews: 650,
  },
  {
    id: 6,
    name: "Kolkata Branch",
    type: "Regional Office",
    address: "RK Education Center, Salt Lake, Kolkata - 700064",
    phone: "+91 98765 43215",
    email: "kolkata@rkcoaching.com",
    timings: "Mon-Sat: 9:00 AM - 8:00 PM",
    manager: "Ananya Singh",
    students: "10,000+",
    established: "2022",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Board Exams",
      "Competitive Exams",
      "Language Support",
      "Cultural Programs",
    ],
    coordinates: { lat: 22.5726, lng: 88.3639 },
    rating: 4.6,
    reviews: 420,
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    contact: "+91 98765 43210",
    availability: "Mon-Sat: 9 AM - 8 PM",
    color: "bg-[rgb(37,101,118)]/10 text-[rgb(37,101,118)]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick support via WhatsApp",
    contact: "+91 98765 43210",
    availability: "24/7 Available",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Detailed queries and support",
    contact: "support@rkcoaching.com",
    availability: "Response within 24 hours",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Globe,
    title: "Live Chat",
    description: "Instant help on our website",
    contact: "Available on website",
    availability: "24/7 Available",
    color: "bg-blue-50 text-blue-600",
  },
];

export default function ContactPageComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/50 text-slate-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-[rgb(37,101,118)]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-[rgb(37,101,118)]"
              >
                About
              </Link>
              <Link
                href="/success-stories"
                className="text-gray-600 hover:text-[rgb(37,101,118)]"
              >
                Success Stories
              </Link>
              <Link
                href="/contact"
                className="text-[rgb(37,101,118)] font-medium"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-[rgb(37,101,118)]"
              >
                Blog
              </Link>
              <Button className="bg-[rgb(37,101,118)] hover:bg-[rgb(30,85,100)] text-white">
                Download App
              </Button>
            </nav>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
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
                  className="block px-3 py-2 text-gray-600 hover:text-[rgb(37,101,118)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Success Stories
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-[rgb(37,101,118)] font-medium"
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-[rgb(37,101,118)] to-orange-600 bg-clip-text text-transparent">
              Contact RK Coaching
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Get in touch with us for any queries, support, or to visit our
              branches across India. We&rsquo;re here to help you succeed in
              your educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-700">
              Get in Touch
            </h2>
            <p className="text-slate-600">
              Choose your preferred way to contact us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 hover:bg-white/80 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-xl p-6 text-center cursor-pointer border-0 h-full">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <method.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-700">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      {method.description}
                    </p>
                    <p className="font-semibold text-slate-700 mb-2">
                      {method.contact}
                    </p>
                    <p className="text-xs text-slate-500">
                      {method.availability}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-700">
              Send us a Message
            </h2>
            <p className="text-slate-600">
              Fill out the form below and we&aposll get back to you within 24
              hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-3xl shadow-xl p-8 border-0">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="bg-white/50 border-white/50 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="bg-white/50 border-white/50 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="bg-white/50 border-white/50 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Branch
                      </label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/50 border border-white/50 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-[rgb(37,101,118)]"
                      >
                        <option value="">Select a branch</option>
                        {branches.map((branch) => (
                          <option key={branch.id} value={branch.name}>
                            {branch.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      className="bg-white/50 border-white/50 rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your query..."
                      rows={5}
                      className="bg-white/50 border-white/50 rounded-xl"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[rgb(37,101,118)] to-teal-600 hover:from-[rgb(30,85,100)] hover:to-teal-700 text-white py-3 rounded-xl border-0"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-700">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Quick answers to common questions about contacting us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What are your support hours?",
                answer:
                  "Our support team is available Monday to Saturday, 9:00 AM to 8:00 PM. WhatsApp and live chat are available 24/7.",
              },
              {
                question: "Can I visit your branches without appointment?",
                answer:
                  "Yes, you can visit any of our branches during working hours. However, we recommend calling ahead for personalized counseling sessions.",
              },
              {
                question: "How quickly do you respond to emails?",
                answer:
                  "We typically respond to all emails within 24 hours. For urgent queries, please call us or use WhatsApp for faster response.",
              },
              {
                question: "Do you provide support in regional languages?",
                answer:
                  "Yes, our support team can assist you in Hindi, English, and several regional languages depending on the branch location.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/60 backdrop-blur-lg border-white/50 rounded-2xl shadow-lg p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-bold mb-4 text-slate-700">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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

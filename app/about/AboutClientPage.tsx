"use client"
import {
  Users,
  TrendingUp,
  GraduationCap,
  Award,
  Heart,
  Globe,
  Lightbulb,
  Shield,
  Download,
  Trophy,
  Zap,
} from "lucide-react"
import AboutPageComponent from "@/components/about-page"

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

export default function AboutClientPage() {
  return <AboutPageComponent />
}

export interface TeamMember {
  id: string
  name: string
  role: string
  qualification: string
  experience: string
  description: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "rk-sir",
    name: "RK SIR",
    role: "Founder & Director of RKDEMY",
    qualification: "B.E. in Electrical Engineering",
    experience: "14+ years of experience",
    description:
      "He started teaching during his own engineering days. His unique math teaching style, blending concepts with 'Life ke funde,' has made him a student favorite.",
    image: "/images/Rk.png?height=200&width=200",
  },
  {
    id: "nitin-sir",
    name: "NITIN SIR",
    role: "CEO of RKDEMY",
    qualification: "Master's in Information Technology",
    experience: "13+ years of experience",
    description: "He has worked with MNCs in software development & now shares his industry expertise with students.",
    image: "/images/Ni.png?height=200&width=200",
  },
  {
    id: "ajit-sir",
    name: "AJIT SIR",
    role: "Senior Faculty (Electronics & Electrical) since 2010",
    qualification: "B.E. in Electrical Engineering",
    experience: "13+ years of experience",
    description: "He has been a faculty member in many Engineering Colleges in Mumbai & beyond.",
    image: "/images/Aj.png?height=200&width=200",
  },
]

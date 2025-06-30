import type { TeamMember } from "@/data/team"
import Image from "next/image"

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100">
      <div className="relative mb-6">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={`${member.name} photo`}
          width={150}
          height={150}
          className="rounded-full mx-auto shadow-lg"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-[rgb(37,101,118)] font-semibold mb-3">{member.role}</p>
      <div className="space-y-2 text-sm text-gray-600 mb-4">
        <p>
          <span className="font-medium">Qualification:</span> {member.qualification}
        </p>
        <p>
          <span className="font-medium">Experience:</span> {member.experience}
        </p>
      </div>
      <p className="text-gray-700 leading-relaxed text-sm">{member.description}</p>
    </div>
  )
}

import { teamMembers } from "@/data/team"
import { TeamMemberCard } from "@/components/ui/TeamMemberCard"

export function OurTeam() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">OUR PILLARS</h2>
          <p className="text-xl text-gray-600 mb-8">MEET OUR TEAM</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            &quot;A visionary leader dedicated to bridging the gap between talent and opportunity in the IT industry.&quot;
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

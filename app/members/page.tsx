/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { INTERNS, PRINCIPAL_INVESTIGATOR, initials, type TeamMember } from "@/lib/team";

export const metadata = {
  title: "Members",
  description: "The IKS interns and Principal Investigator behind DESINAAP, an IKS Internship Project (2025) of the Ministry of Education.",
};

function Avatar({ person, size }: { person: TeamMember; size: "lg" | "xl" }) {
  const box = size === "xl" ? "w-28 h-28 text-3xl" : "w-20 h-20 text-xl";
  if (person.photo) {
    return <img src={person.photo} alt={person.name} className={`${box} rounded-full object-cover border-4 border-white shadow-md`} />;
  }
  return (
    <div aria-hidden className={`${box} rounded-full bg-[#6F4E37] text-[#FAF7F2] font-serif font-bold flex items-center justify-center border-4 border-white shadow-md`}>
      {initials(person.name)}
    </div>
  );
}

/** The person's name – a link to their LinkedIn profile when one has been added in lib/team.ts. */
function PersonName({ person, className }: { person: TeamMember; className: string }) {
  if (!person.linkedin) return <h3 className={className}>{person.name}</h3>;
  return (
    <h3 className={className}>
      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 hover:text-[#0A66C2] underline decoration-[#B88646]/50 underline-offset-4 hover:decoration-[#0A66C2] transition-colors"
        title={`${person.name} on LinkedIn`}
      >
        {person.name}
        <Linkedin className="w-4 h-4 text-[#0A66C2]" aria-label="LinkedIn profile" />
      </a>
    </h3>
  );
}

export default function MembersPage() {
  const pi = PRINCIPAL_INVESTIGATOR;
  return (
    <div>
      <section className="bg-[#4A3426] text-white px-4 py-14">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-[#D9B77E] mb-3">IKS Internship Project, 2025 · Ministry of Education</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">The people behind DESINAAP</h1>
          <p className="text-[#E3D6C3] text-lg max-w-2xl leading-relaxed">
            Four interns collected, checked and organised India&apos;s traditional measurements into this
            archive, guided by their Principal Investigator.
          </p>
        </div>
      </section>

      {/* Interns */}
      <section className="px-4 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-2">Interns</h2>
          <p className="text-sm text-[#7A6E65] mb-8">Click a name to open that person&apos;s LinkedIn profile.</p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERNS.map((p) => (
              <li key={p.name} className="bg-white border border-[#E8DED1] rounded-2xl p-6 text-center flex flex-col items-center">
                <Avatar person={p} size="lg" />
                <PersonName person={p} className="font-serif text-lg font-bold text-[#2E2A26] mt-4" />
                <p className="text-sm text-[#B88646] font-medium mt-1">{p.role}</p>
                {p.details && <p className="text-xs text-[#7A6E65] mt-2">{p.details}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-8">Principal Investigator</h2>
          <div className="bg-[#F3EBDD] border border-[#E8DED1] rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <Avatar person={pi} size="xl" />
            <div>
              <PersonName person={pi} className="font-serif text-2xl font-bold text-[#2E2A26]" />
              <p className="text-[#B88646] font-medium mt-1">{pi.role}</p>
              {pi.details ? (
                <p className="text-[#5E534B] mt-3 leading-relaxed">{pi.details}</p>
              ) : (
                <p className="text-[#7A6E65] text-sm mt-3">Further details will be added soon.</p>
              )}
            </div>
          </div>

          <div className="mt-10 text-sm text-[#7A6E65]">
            Want to know what we built?{" "}
            <Link href="/about" className="text-[#6F4E37] font-medium underline underline-offset-2">Read about the project</Link>.
          </div>
        </div>
      </section>
    </div>
  );
}

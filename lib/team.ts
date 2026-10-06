/**
 * PEOPLE SHOWN ON THE MEMBERS PAGE (/members)
 *
 * To add a LinkedIn profile, paste the full URL between the quotes, e.g.
 *   linkedin: "https://www.linkedin.com/in/your-profile-name/",
 * When a URL is present the person's name becomes a link to it.
 * Optional: put a photo in public/images/team/ and set photo: "/images/team/name.jpg".
 */
export interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
  photo?: string;
  details?: string; // short line under the name (department, institution …)
}

export const INTERNS: TeamMember[] = [
  { name: "D. Srinithya Reddy", role: "IKS Intern", linkedin: "" },
  { name: "Reshman K", role: "IKS Intern", linkedin: "" },
  { name: "G. Sanjana", role: "IKS Intern", linkedin: "" },
  { name: "A. Prasanna", role: "IKS Intern", linkedin: "" },
];

export const PRINCIPAL_INVESTIGATOR: TeamMember = {
  name: "Neeraja Rani",
  role: "Principal Investigator",
  linkedin: "",
  details: "", // e.g. "Professor, Department of …, <Institution>" – to be added
};

export function initials(name: string): string {
  return name
    .replace(/\./g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0].toUpperCase())
    .slice(0, 3)
    .join("");
}

import { SECTORS } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Sectors" };

const EMOJI: Record<string, string> = {
  agriculture: "🌾", "trade-commerce": "⚖️", "currency-money": "🪙",
  architecture: "🏛️", medicine: "🌿", "textile-handloom": "🧵",
  household: "🏠", "storage-transport": "📦"
};

export default function SectorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="font-serif text-3xl font-bold text-[#2E2A26] mb-2">Sectors</h1>
        <p className="text-[#7A6E65]">Traditional measurement systems organised by domain of practice</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SECTORS.map((s) => (
          <Link key={s.id} href={`/sectors/${s.slug}`}
            className="group bg-white border border-[#E8DED1] rounded-xl p-6 hover:border-[#6F4E37] hover:shadow-lg transition-all"
          >
            <div className="text-4xl mb-4">{EMOJI[s.slug] || "📐"}</div>
            <h2 className="font-serif text-lg font-bold text-[#2E2A26] mb-2 group-hover:text-[#6F4E37] transition-colors">{s.name}</h2>
            <p className="text-sm text-[#7A6E65] leading-relaxed mb-4">{s.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#A09080]">{s.measurement_count} measurements</span>
              <ArrowRight className="w-4 h-4 text-[#A09080] group-hover:text-[#6F4E37] group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

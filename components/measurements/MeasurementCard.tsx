import Link from "next/link";
import { Measurement } from "@/types";
import { getCategoryColor } from "@/lib/data";
import { ArrowRight, MapPin } from "lucide-react";

export default function MeasurementCard({ m }: { m: Measurement }) {
  return (
    <div className="bg-white border border-[#E8DED1] rounded-lg p-5 hover:border-[#B88646] hover:shadow-md transition-all group">
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCategoryColor(m.category)}`}>
          {m.category}
        </span>
        <span className="text-xs text-[#A09080]">{m.sector}</span>
      </div>
      <h3 className="font-serif text-xl font-bold text-[#2E2A26] mb-1">{m.name_english}</h3>
      {m.name_sanskrit && (
        <p className="text-sm text-[#7A6E65] mb-2">{m.name_sanskrit}</p>
      )}
      {m.meaning && (
        <p className="text-sm text-[#7A6E65] leading-relaxed mb-3 line-clamp-2">{m.meaning}</p>
      )}
      {m.modern_equivalent && (
        <p className="text-xs text-[#2E2A26] bg-[#FAF7F2] px-2 py-1 rounded mb-3 font-mono">
          ≈ {m.modern_equivalent}
        </p>
      )}
      {m.states && m.states.length > 0 && (
        <div className="flex items-center gap-1 mb-3">
          <MapPin className="w-3 h-3 text-[#A09080]" />
          <span className="text-xs text-[#7A6E65]">{m.states.slice(0, 2).join(", ")}{m.states.length > 2 ? ` +${m.states.length - 2}` : ""}</span>
        </div>
      )}
      <Link href={`/measurements/${m.slug}`}
        className="flex items-center gap-1 text-xs font-medium text-[#6F4E37] group-hover:gap-2 transition-all"
      >
        View details <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}

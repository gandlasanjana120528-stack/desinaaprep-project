import Link from "next/link";
import { Measurement } from "@/types";
import { getCategoryColor } from "@/lib/data";
import { ArrowRight, MapPin } from "lucide-react";
import { MeasurementThumb } from "./MeasurementImage";

export default function MeasurementCard({ m }: { m: Measurement }) {
  return (
    <div className="bg-white border border-[#E8DED1] rounded-lg p-5 hover:border-[#B88646] hover:shadow-md transition-all group overflow-hidden flex flex-col justify-between">
      <div>
        <MeasurementThumb m={m} />
        <div className="flex items-start justify-between mb-3">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${getCategoryColor(m.category)}`}>
            {m.category}
          </span>
          <span className="text-xs text-[#A09080] capitalize">{m.sector?.replace(/-/g, " ")}</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-[#2E2A26] mb-1">{m.name_english}</h3>
        {(m.name_sanskrit || m.name_telugu) && (
          <div className="flex flex-wrap items-center gap-1.5 text-sm text-[#7A6E65] mb-2 font-serif">
            {m.name_sanskrit && <span className="font-semibold text-[#6F4E37]">{m.name_sanskrit}</span>}
            {m.name_sanskrit && m.name_telugu && <span className="text-[#A09080] text-xs">•</span>}
            {m.name_telugu && <span className="text-xs text-[#7A6E65]">{m.name_telugu}</span>}
          </div>
        )}
        {m.meaning && (
          <p className="text-sm text-[#7A6E65] leading-relaxed mb-3 line-clamp-2">{m.meaning}</p>
        )}
        {m.conversion_formula && (
          <p className="text-xs text-[#6F4E37] bg-amber-50/60 border border-[#E8DED1] px-2.5 py-1.5 rounded mb-2 font-mono">
            📐 {m.conversion_formula}
          </p>
        )}
        {m.modern_equivalent && (
          <p className="text-xs text-[#2E2A26] bg-[#FAF7F2] px-2.5 py-1.5 rounded mb-3 font-mono">
            ≈ {m.modern_equivalent}
          </p>
        )}
        {m.states && m.states.length > 0 && (
          <div className="flex items-center gap-1 mb-3">
            <MapPin className="w-3 h-3 text-[#A09080]" />
            <span className="text-xs text-[#7A6E65]">{m.states.slice(0, 2).join(", ")}{m.states.length > 2 ? ` +${m.states.length - 2}` : ""}</span>
          </div>
        )}
      </div>
      <div className="pt-2 border-t border-[#F5EFE6]">
        <Link href={`/measurements/${m.slug}`}
          className="flex items-center gap-1 text-xs font-medium text-[#6F4E37] group-hover:gap-2 transition-all"
        >
          View details <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { SAMPLE_REFERENCES } from "@/lib/data";
import { Search, BookOpen, FileText, Scroll, Building } from "lucide-react";
import { Reference, ReferenceType } from "@/types";

const TYPE_ICONS: Record<ReferenceType, React.ReactNode> = {
  book: <BookOpen className="w-4 h-4" />,
  research_paper: <FileText className="w-4 h-4" />,
  ancient_text: <Scroll className="w-4 h-4" />,
  government_source: <Building className="w-4 h-4" />,
  journal: <FileText className="w-4 h-4" />,
  website: <FileText className="w-4 h-4" />,
  other: <FileText className="w-4 h-4" />
};

const TYPE_LABELS: Record<ReferenceType, string> = {
  book: "Book", research_paper: "Research Paper", ancient_text: "Ancient Text",
  government_source: "Government Source", journal: "Journal", website: "Website", other: "Other"
};

const TYPE_COLORS: Record<ReferenceType, string> = {
  book: "bg-blue-100 text-blue-800",
  research_paper: "bg-green-100 text-green-800",
  ancient_text: "bg-amber-100 text-amber-800",
  government_source: "bg-purple-100 text-purple-800",
  journal: "bg-teal-100 text-teal-800",
  website: "bg-gray-100 text-gray-800",
  other: "bg-gray-100 text-gray-800"
};

const REF_TYPES: Array<ReferenceType | "all"> = ["all", "book", "research_paper", "ancient_text", "government_source"];

export default function ReferencesPage() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<ReferenceType | "all">("all");

  const filtered: Reference[] = SAMPLE_REFERENCES.filter((r) => {
    const matchType = typeFilter === "all" || r.type === typeFilter;
    const matchQ = !query || r.title.toLowerCase().includes(query.toLowerCase()) ||
      (r.author && r.author.toLowerCase().includes(query.toLowerCase()));
    return matchType && matchQ;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#2E2A26] mb-2">References</h1>
        <p className="text-[#7A6E65]">Academic sources, ancient texts and research documenting traditional Indian measurement systems</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09080]" />
          <input value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, author…"
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {REF_TYPES.map((t) => (
            <button key={t} onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${typeFilter === t ? "bg-[#6F4E37] text-white border-[#6F4E37]" : "bg-white text-[#7A6E65] border-[#E8DED1] hover:border-[#6F4E37]"}`}
            >
              {t === "all" ? "All" : TYPE_LABELS[t]}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-[#A09080] mb-6">{filtered.length} reference{filtered.length !== 1 ? "s" : ""}</p>

      <div className="space-y-4">
        {filtered.map((ref) => (
          <div key={ref.id} className="bg-white border border-[#E8DED1] rounded-lg p-6 hover:border-[#B88646] transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="w-10 h-10 bg-[#FAF7F2] rounded-lg flex items-center justify-center text-[#6F4E37] flex-shrink-0">
                {TYPE_ICONS[ref.type]}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${TYPE_COLORS[ref.type]}`}>
                    {TYPE_LABELS[ref.type]}
                  </span>
                  {ref.year && <span className="text-xs text-[#A09080]">{ref.year < 0 ? `${Math.abs(ref.year)} BCE` : ref.year}</span>}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2E2A26] mb-1">{ref.title}</h3>
                {ref.author && <p className="text-sm text-[#6F4E37] mb-2">— {ref.author}</p>}
                {ref.publisher && <p className="text-xs text-[#A09080] mb-2">{ref.publisher}</p>}
                {ref.description && <p className="text-sm text-[#7A6E65] leading-relaxed">{ref.description}</p>}
                {ref.tags && ref.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {ref.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 bg-[#FAF7F2] text-[#7A6E65] rounded border border-[#E8DED1]">#{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { SAMPLE_INFOGRAPHICS } from "@/lib/data";
import { Search, ZoomIn } from "lucide-react";

const INFOGRAPHIC_CATEGORIES = ["All", "length", "volume", "weight", "area", "time", "currency"];

const COLORS = ["bg-blue-100", "bg-green-100", "bg-purple-100", "bg-orange-100", "bg-yellow-100", "bg-red-100"];

export default function InfographicsPage() {
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const filtered = SAMPLE_INFOGRAPHICS.filter((i) => {
    const matchCat = selected === "All" || i.category === selected;
    const matchQ = !query || i.title.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#2E2A26] mb-2">Infographics</h1>
        <p className="text-[#7A6E65]">Visual guides to India's traditional measurement hierarchies and systems</p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09080]" />
          <input value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search infographics…"
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {INFOGRAPHIC_CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setSelected(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${selected === cat ? "bg-[#6F4E37] text-white border-[#6F4E37]" : "bg-white text-[#7A6E65] border-[#E8DED1] hover:border-[#6F4E37]"}`}
            >
              {cat === "All" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-[#A09080] mb-6">{filtered.length} infographic{filtered.length !== 1 ? "s" : ""}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((inf, idx) => (
          <div key={inf.id} className="bg-white border border-[#E8DED1] rounded-lg overflow-hidden hover:shadow-md transition-all group cursor-pointer"
            onClick={() => setPreview(inf.id)}
          >
            {/* Placeholder image area */}
            <div className={`${COLORS[idx % COLORS.length]} h-48 flex flex-col items-center justify-center p-6 relative`}>
              <div className="text-3xl mb-2">📊</div>
              <p className="text-center text-sm font-medium text-[#4A3426] leading-tight">{inf.title}</p>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-[#6F4E37] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-[#FAF7F2] text-[#6F4E37] px-2 py-0.5 rounded-full border border-[#E8DED1]">{inf.category}</span>
                {inf.state && <span className="text-xs text-[#A09080]">{inf.state}</span>}
                {inf.sector && <span className="text-xs text-[#A09080]">{inf.sector}</span>}
              </div>
              <h3 className="font-medium text-sm text-[#2E2A26]">{inf.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {preview && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setPreview(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full p-8 text-center" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const inf = SAMPLE_INFOGRAPHICS.find((i) => i.id === preview);
              return inf ? (
                <>
                  <div className="bg-[#FAF7F2] rounded-lg h-72 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="text-6xl mb-3">📊</div>
                      <p className="text-[#6F4E37] font-medium">{inf.title}</p>
                      <p className="text-xs text-[#A09080] mt-1">Full infographic artwork — to be uploaded</p>
                    </div>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-2">{inf.title}</h2>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs bg-[#FAF7F2] text-[#6F4E37] px-2 py-0.5 rounded border border-[#E8DED1]">{inf.category}</span>
                  </div>
                  <button onClick={() => setPreview(null)} className="mt-6 px-4 py-2 text-sm text-[#7A6E65] hover:text-[#2E2A26]">Close</button>
                </>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

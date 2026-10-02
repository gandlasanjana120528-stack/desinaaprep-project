"use client";

import { useState } from "react";
import { INFOGRAPHICS_DATA } from "@/lib/infographicsData";
import { Infographic } from "@/types";
import InfographicCardPreview from "@/components/infographics/InfographicCardPreview";
import InfographicFlowchart from "@/components/infographics/InfographicFlowchart";
import { Search, RotateCcw, Filter } from "lucide-react";

const CATEGORY_TABS = [
  { id: "All", label: "All" },
  { id: "length", label: "Length" },
  { id: "weight", label: "Weight" },
  { id: "volume", label: "Volume" },
  { id: "time", label: "Time" },
  { id: "area", label: "Area" },
  { id: "currency", label: "Currency" },
  { id: "medicine", label: "Medicine" },
];

export default function InfographicsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [activeInfographic, setActiveInfographic] = useState<Infographic | null>(null);

  const filtered = INFOGRAPHICS_DATA.filter((i) => {
    const matchCat = selectedCategory === "All" || i.category === selectedCategory;
    const matchQ =
      !query ||
      i.title.toLowerCase().includes(query.toLowerCase()) ||
      (i.subtitle && i.subtitle.toLowerCase().includes(query.toLowerCase())) ||
      (i.tags && i.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())));

    return matchCat && matchQ;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Clean, Elegant Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E2A26] mb-2">
          Infographics & Flowcharts
        </h1>
        <p className="text-[#7A6E65] text-base">
          Visual guides to India's traditional measurement hierarchies and conversion flowcharts.
        </p>
      </div>

      {/* Clean Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09080]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search infographics (e.g. Hasta, Tola, Yojana, Bigha, Ghatika)..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8DED1] rounded-lg text-sm text-[#2E2A26] placeholder-[#A09080] focus:outline-none focus:border-[#6F4E37] transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A09080] hover:text-[#2E2A26]"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex gap-1.5 flex-wrap items-center">
          {CATEGORY_TABS.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-all ${
                  isSelected
                    ? "bg-[#6F4E37] text-white border-[#6F4E37] shadow-sm"
                    : "bg-white text-[#7A6E65] border-[#E8DED1] hover:border-[#6F4E37] hover:text-[#2E2A26]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Count & Reset indicator */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs text-[#A09080]">
          Showing {filtered.length} infographic{filtered.length !== 1 ? "s" : ""}
        </p>
        {(selectedCategory !== "All" || query) && (
          <button
            onClick={() => {
              setSelectedCategory("All");
              setQuery("");
            }}
            className="text-xs text-[#6F4E37] hover:underline flex items-center gap-1 font-medium"
          >
            <RotateCcw className="w-3 h-3" /> Reset filter
          </button>
        )}
      </div>

      {/* Clean Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((infographic) => (
            <InfographicCardPreview
              key={infographic.id}
              infographic={infographic}
              onSelect={() => setActiveInfographic(infographic)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-[#E8DED1] rounded-xl p-12 text-center max-w-md mx-auto my-12">
          <p className="text-sm text-[#7A6E65] mb-4">No infographics found matching your search.</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setQuery("");
            }}
            className="px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-xs font-medium hover:bg-[#4A3426] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Interactive Modal */}
      {activeInfographic && (
        <InfographicFlowchart
          infographic={activeInfographic}
          onClose={() => setActiveInfographic(null)}
        />
      )}
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Sector, Measurement } from "@/types";
import { getCategoryColor, MEASUREMENT_HEADLINE } from "@/lib/data";
import MeasurementCard from "@/components/measurements/MeasurementCard";
import Link from "next/link";
import BackButton from "@/components/ui/BackButton";
import { Search, ChevronRight, Layers, Filter } from "lucide-react";

interface SectorDetailViewProps {
  sector: Sector;
  measurements: Measurement[];
  emoji: string;
  overview?: string;
}

export default function SectorDetailView({
  sector,
  measurements,
  emoji,
  overview,
}: SectorDetailViewProps) {
  // If sector is Vedic Measurements, default to "Length" or "all"
  const isVedic = sector.slug === "vedic-measurements";
  
  // Extract distinct categories in fixed order for Vedic or dynamic for others
  const categories = useMemo(() => {
    if (isVedic) {
      return ["Length", "Weight", "Capacity", "Time"];
    }
    const set = new Set<string>();
    measurements.forEach((m) => {
      if (m.category) {
        // Capitalize first letter
        const cat = m.category.charAt(0).toUpperCase() + m.category.slice(1);
        set.add(cat);
      }
    });
    return Array.from(set);
  }, [isVedic, measurements]);

  // The chosen category is kept in the URL so Back returns to the same filter
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";
  const setSelectedCategory = (c: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (c === "all") params.delete("category");
    else params.set("category", c);
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredMeasurements = useMemo(() => {
    return measurements.filter((m) => {
      const matchesCategory =
        selectedCategory === "all" ||
        m.category?.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesQuery =
        m.name_english?.toLowerCase().includes(query) ||
        m.name_sanskrit?.toLowerCase().includes(query) ||
        m.name_telugu?.toLowerCase().includes(query) ||
        m.meaning?.toLowerCase().includes(query) ||
        m.modern_equivalent?.toLowerCase().includes(query) ||
        m.conversion_formula?.toLowerCase().includes(query) ||
        m.historical_context?.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [measurements, selectedCategory, searchQuery]);

  // Grouped measurements by category when "all" is selected on Vedic Measurements
  const groupedByCategory = useMemo(() => {
    if (!isVedic) return null;
    const groups: Record<string, Measurement[]> = {
      Length: [],
      Weight: [],
      Capacity: [],
      Time: [],
    };
    filteredMeasurements.forEach((m) => {
      const catKey =
        m.category?.toLowerCase() === "length"
          ? "Length"
          : m.category?.toLowerCase() === "weight"
          ? "Weight"
          : m.category?.toLowerCase() === "capacity"
          ? "Capacity"
          : m.category?.toLowerCase() === "time"
          ? "Time"
          : "Other";
      if (groups[catKey]) {
        groups[catKey].push(m);
      }
    });
    return groups;
  }, [isVedic, filteredMeasurements]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#A09080] mb-8">
        <Link href="/" className="hover:text-[#6F4E37]">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/sectors" className="hover:text-[#6F4E37]">Sectors</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#2E2A26] font-medium">{sector.name}</span>
      </nav>

      {/* Sector Banner */}
      <div className="bg-[#4A3426] text-white rounded-2xl p-6 sm:p-8 mb-10 shadow-lg border border-[#36251B] relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-4xl sm:text-5xl shadow-inner flex-shrink-0">
            {emoji}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-[11px] font-bold text-[#B88646] uppercase tracking-wider bg-black/20 px-2.5 py-0.5 rounded-full border border-white/10">
                Official Sector
              </span>
              <span className="text-xs text-[#C8B8A2]">
                • {measurements.length} Measurements Documented
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              {sector.name}
            </h1>
            <p className="text-[#C8B8A2] text-sm sm:text-base leading-relaxed max-w-3xl">
              {sector.description}
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      {overview && (
        <div className="mb-10 bg-white border border-[#E8DED1] rounded-2xl p-6 sm:p-7 shadow-sm">
          <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-3 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#6F4E37]" />
            Overview
          </h2>
          <p className="text-sm text-[#4A3E39] leading-relaxed">
            {overview}
          </p>
        </div>
      )}

      {/* Sector Category Filters & Search Controls */}
      <div className="bg-white border border-[#E8DED1] rounded-2xl p-4 sm:p-5 mb-8 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-[#6F4E37] text-white shadow-sm scale-100"
                  : "bg-[#FAF7F2] text-[#7A6E65] border border-[#E8DED1] hover:border-[#6F4E37] hover:text-[#2E2A26]"
              }`}
            >
              <span>All Categories</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === "all" ? "bg-white/20 text-white" : "bg-[#E8DED1] text-[#7A6E65]"}`}>
                {measurements.length}
              </span>
            </button>

            {categories.map((cat) => {
              const count = measurements.filter(
                (m) => m.category?.toLowerCase() === cat.toLowerCase()
              ).length;
              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    isSelected
                      ? "bg-[#6F4E37] text-white shadow-sm"
                      : "bg-[#FAF7F2] text-[#7A6E65] border border-[#E8DED1] hover:border-[#6F4E37] hover:text-[#2E2A26]"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-[#E8DED1] text-[#7A6E65]"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09080]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${sector.name}…`}
              className="w-full pl-9 pr-3 py-2 bg-[#FAF7F2] border border-[#E8DED1] rounded-xl text-xs text-[#2E2A26] placeholder-[#A09080] focus:outline-none focus:border-[#6F4E37] transition-colors"
            />
          </div>
        </div>

        {/* Active Filter Indicators */}
        {(selectedCategory !== "all" || searchQuery) && (
          <div className="flex items-center justify-between pt-3 border-t border-[#F0EAE0] text-xs">
            <div className="flex items-center gap-2 text-[#7A6E65]">
              <Filter className="w-3.5 h-3.5 text-[#6F4E37]" />
              <span>Showing <strong>{filteredMeasurements.length}</strong> matching measurement{filteredMeasurements.length === 1 ? "" : "s"}</span>
            </div>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-xs text-[#6F4E37] hover:underline font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Measurements Display */}
      {filteredMeasurements.length > 0 ? (
        // When user is viewing Vedic Measurements with "all" selected and no active text search, present grouped by category!
        isVedic && selectedCategory === "all" && !searchQuery.trim() && groupedByCategory ? (
          <div className="space-y-12 mb-12">
            {categories.map((catName) => {
              const catItems = groupedByCategory[catName] || [];
              if (catItems.length === 0) return null;

              return (
                <section key={catName} className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b-2 border-[#E8DED1]">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${getCategoryColor(catName.toLowerCase())}`}>
                        {catName}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#2E2A26]">
                        {catName} Measurements
                      </h3>
                    </div>
                    <span className="text-xs font-medium text-[#7A6E65]">
                      {catItems.length} units
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {catItems.map((m) => (
                      <MeasurementCard key={m.id || m.slug} m={m} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {filteredMeasurements.map((m) => (
              <MeasurementCard key={m.id || m.slug} m={m} />
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-16 bg-white border border-[#E8DED1] rounded-2xl mb-12">
          <p className="text-[#A09080] text-sm mb-2">
            No measurements found matching your selection.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-xs text-[#6F4E37] underline font-medium"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="border-t border-[#E8DED1] pt-8 flex items-center justify-between">
        <BackButton fallbackHref="/sectors" />
        <Link
          href="/measurements"
          className="text-xs text-[#7A6E65] hover:text-[#6F4E37] transition-colors"
        >
          Explore all {MEASUREMENT_HEADLINE} measurements
        </Link>
      </div>
    </div>
  );
}

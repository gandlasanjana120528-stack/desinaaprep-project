"use client";

import { useState, useMemo, useEffect } from "react";
import { Measurement, Sector } from "@/types";
import MeasurementCard from "@/components/measurements/MeasurementCard";
import { Table, LayoutGrid, Sparkles } from "lucide-react";

interface StateSectorViewProps {
  stateName: string;
  measurements: Measurement[];
  sectors: Sector[];
}

export default function StateSectorView({
  stateName,
  measurements,
  sectors,
}: StateSectorViewProps) {
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"table" | "card">("table");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sector name lookup map
  const sectorNameMap = useMemo(() => {
    const map = new Map<string, string>();
    sectors.forEach((s) => {
      map.set(s.slug, s.name);
      map.set(s.id, s.name);
      map.set(s.name.toLowerCase(), s.name);
    });
    // Explicit overrides for exact sector titles
    map.set("land-measurement", "Land Measurement");
    map.set("livestock-dairy", "Livestock & Dairy");
    map.set("household", "Household & Daily Life");
    map.set("gold-jewellery", "Gold & Jewellery");
    map.set("agriculture", "Seed & Crop (Agriculture)");
    map.set("trade-commerce", "Trade & Commerce");
    map.set("textile-handloom", "Textile & Handloom");
    map.set("medicine", "Medicine (Ayurveda)");
    map.set("architecture", "Construction & Architecture");
    map.set("transportation-distance", "Transportation & Distance");
    map.set("currency-money", "Currency & Money");
    map.set("storage-transport", "Storage & Transportation");
    map.set("religious-cultural", "Religious & Cultural");
    return map;
  }, [sectors]);

  // Group measurements by sector
  const sectorGroups = useMemo(() => {
    const map = new Map<string, Measurement[]>();

    // Create a helper to find the canonical slug for a sector
    const getCanonicalKey = (rawKey: string) => {
      const found = sectors.find(s =>
        s.slug === rawKey ||
        s.id === rawKey ||
        s.name.toLowerCase() === rawKey.toLowerCase()
      );
      return found ? found.slug : rawKey;
    };

    measurements.forEach((m) => {
      const rawKey = m.sector || "other";
      const key = getCanonicalKey(rawKey);

      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)!.push(m);
    });
    return map;
  }, [measurements, sectors]);

  // Active sector keys
  const activeSectorKeys = useMemo(() => {
    return Array.from(sectorGroups.keys());
  }, [sectorGroups]);

  // Filtered measurements list
  const filtered = useMemo(() => {
    if (selectedSector === "all") {
      return measurements;
    }
    return sectorGroups.get(selectedSector) || [];
  }, [selectedSector, measurements, sectorGroups]);

  return (
    <div className="space-y-6 w-full">
      {/* Sector Filter & View Switcher Box */}
      <div className="bg-white border border-[#E8DED1] rounded-xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F0E6D8] pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#6F4E37]" />
            <h3 className="font-serif font-bold text-base text-[#2E2A26]">
              Sectors in {stateName}
            </h3>
          </div>

          {/* View Mode Switcher Button (Top-Right) */}
          <div className="flex items-center gap-1 bg-[#FAF7F2] border border-[#E8DED1] p-1 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${viewMode === "table"
                  ? "bg-[#6F4E37] text-white shadow-sm font-semibold"
                  : "text-[#7A6E65] hover:text-[#2E2A26] hover:bg-[#EAE2D5]"
                }`}
              title="Switch to Excel Table View"
            >
              <Table className="w-3.5 h-3.5" />
              <span>Excel Table</span>
            </button>

            <button
              onClick={() => setViewMode("card")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${viewMode === "card"
                  ? "bg-[#6F4E37] text-white shadow-sm font-semibold"
                  : "text-[#7A6E65] hover:text-[#2E2A26] hover:bg-[#EAE2D5]"
                }`}
              title="Switch to Cards View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
          </div>
        </div>

        {/* Rounded Sector Pills */}
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setSelectedSector("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${selectedSector === "all"
                ? "bg-[#6F4E37] text-white shadow-sm font-semibold border border-[#6F4E37]"
                : "bg-[#FAF7F2] text-[#6F4E37] border border-[#E8DED1] hover:border-[#6F4E37] hover:bg-[#6F4E37] hover:text-white"
              }`}
          >
            All Sectors ({measurements.length})
          </button>

          {activeSectorKeys.map((secKey) => {
            const count = sectorGroups.get(secKey)?.length || 0;
            const displayName = sectorNameMap.get(secKey) || secKey;

            return (
              <button
                key={secKey}
                onClick={() => setSelectedSector(secKey)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${selectedSector === secKey
                    ? "bg-[#6F4E37] text-white shadow-sm font-semibold border border-[#6F4E37]"
                    : "bg-[#FAF7F2] text-[#6F4E37] border border-[#E8DED1] hover:border-[#6F4E37] hover:bg-[#6F4E37] hover:text-white"
                  }`}
              >
                {displayName} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Showing count indicator */}
      <div className="text-xs text-[#7A6E65] font-medium flex items-center justify-between px-1">
        <span>
          Showing <strong className="text-[#2E2A26]">{filtered.length}</strong> of{" "}
          <strong className="text-[#2E2A26]">{measurements.length}</strong> units
          {selectedSector !== "all" && (
            <span>
              {" "}
              in <strong className="text-[#6F4E37]">{sectorNameMap.get(selectedSector) || selectedSector}</strong>
            </span>
          )}
        </span>
      </div>

      {/* Main Measurements Display (Excel Data Table vs Cards) */}
      {filtered.length > 0 ? (
        viewMode === "table" ? (
          /* Excel Data Table Matching Uploaded Spreadsheets (9 Styled Columns) */
          <div className="bg-white border border-[#E8DED1] rounded-xl shadow-sm overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[760px]">
                <thead>
                  <tr className="bg-[#4A3426] text-white font-semibold border-b border-[#36251B]">
                    <th className="py-3.5 px-3 w-10 text-center border-r border-[#5C4232]">#</th>
                    <th className="py-3.5 px-4 font-bold border-r border-[#5C4232]">Unit Name</th>
                    <th className="py-3.5 px-4 border-r border-[#5C4232]">Sanskrit Name</th>
                    <th className="py-3.5 px-4 border-r border-[#5C4232]">
                      Local Language Name <br />
                      <span className="text-[10px] text-[#D8C8B8] font-normal">(Nagpuri/Sadri)</span>
                    </th>
                    <th className="py-3.5 px-4 border-r border-[#5C4232]">Hindi Name</th>
                    <th className="py-3.5 px-3 border-r border-[#5C4232]">Type / Category</th>
                    <th className="py-3.5 px-4 border-r border-[#5C4232]">Approx. Modern Equivalent</th>
                    <th className="py-3.5 px-4 border-r border-[#5C4232]">Relation / Hierarchy</th>
                    <th className="py-3.5 px-4">Used In / Context and Reference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DED1] text-[#2E2A26]">
                  {filtered.map((m, idx) => (
                    <tr
                      key={m.id}
                      className={`${idx % 2 === 0 ? "bg-white" : "bg-[#FDFBF7]"
                        } hover:bg-[#F5EFE6] transition-colors`}
                    >
                      {/* # */}
                      <td className="py-3.5 px-3 text-center font-semibold text-[#8B7355] border-r border-[#E8DED1]">
                        {idx + 1}
                      </td>

                      {/* Unit Name */}
                      <td className="py-3.5 px-4 font-bold text-[#2E2A26] border-r border-[#E8DED1]">
                        {m.name_english}
                      </td>

                      {/* Sanskrit Name */}
                      <td className="py-3.5 px-4 text-[#5C5248] border-r border-[#E8DED1]">
                        {m.name_sanskrit || "—"}
                      </td>

                      {/* Local Language Name */}
                      <td className="py-3.5 px-4 text-[#2E2A26] font-medium border-r border-[#E8DED1]">
                        {m.local_names && m.local_names.length > 0
                          ? m.local_names.join(", ")
                          : "—"}
                      </td>

                      {/* Hindi Name */}
                      <td className="py-3.5 px-4 text-[#2E2A26] border-r border-[#E8DED1]">
                        {m.name_hindi || "—"}
                      </td>

                      {/* Type / Category */}
                      <td className="py-3.5 px-3 capitalize border-r border-[#E8DED1]">
                        <span className="inline-block px-2.5 py-0.5 rounded bg-[#FAF7F2] text-[#6F4E37] font-medium border border-[#E8DED1]">
                          {m.category}
                        </span>
                      </td>

                      {/* Approx. Modern Equivalent */}
                      <td className="py-3.5 px-4 text-[#4A3426] font-mono text-[11px] border-r border-[#E8DED1]">
                        {m.modern_equivalent || "—"}
                      </td>

                      {/* Relation / Hierarchy */}
                      <td className="py-3.5 px-4 text-[#5C5248] border-r border-[#E8DED1]">
                        {m.conversion_formula ||
                          (m.hierarchy && m.hierarchy.length > 0
                            ? m.hierarchy.map((h) => h.unit).join("; ")
                            : "—")}
                      </td>

                      {/* Used In / Context and Reference */}
                      <td className="py-3.5 px-4 text-[#4A423A] leading-relaxed max-w-xs">
                        {m.meaning || (m.used_in && m.used_in.join(", ")) || "—"}
                        {m.references && m.references.length > 0 && (
                          <div className="mt-1 text-[#8B7355] text-[10px]">
                            <span className="font-semibold">Ref: </span>
                            {m.references.join(", ")}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Cards View */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {filtered.map((m) => (
              <MeasurementCard key={m.id} m={m} />
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-12 bg-white border border-[#E8DED1] rounded-xl w-full">
          <p className="text-[#A09080] text-sm">
            No measurements found for this sector.
          </p>
        </div>
      )}
    </div>
  );
}

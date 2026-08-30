"use client";
import { useState, useEffect, useMemo } from "react";
import { Search, Filter, LayoutGrid, List, X } from "lucide-react";
import { CATEGORIES, SECTORS, getCategoryColor } from "@/lib/data";
import MeasurementCard from "@/components/measurements/MeasurementCard";
import Link from "next/link";
import { Measurement } from "@/types";
import Fuse from "fuse.js";
import { db } from "@/lib/firebase/client";
import { collection, getDocs } from "firebase/firestore";

const PER_PAGE = 12;

export default function MeasurementsPage() {
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sector, setSector] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function fetchMeasurements() {
      try {
        const querySnapshot = await getDocs(collection(db, "measurements"));
        const data: Measurement[] = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() } as Measurement);
        });
        setMeasurements(data);
      } catch (error) {
        console.error("Error fetching measurements:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMeasurements();
  }, []);

  const fuse = useMemo(() => new Fuse(measurements, {
    keys: ["name_english", "name_sanskrit", "name_telugu", "meaning", "category", "sector", "tags"],
    threshold: 0.4
  }), [measurements]);

  const filtered: Measurement[] = useMemo(() => {
    let results = query.length >= 2
      ? fuse.search(query).map((r) => r.item)
      : [...measurements];
    if (category) results = results.filter((m) => m.category === category);
    if (sector) results = results.filter((m) => m.sector === sector);
    return results;
  }, [query, category, sector, measurements, fuse]);

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  useEffect(() => { setPage(1); }, [query, category, sector]);

  const clearFilters = () => { setQuery(""); setCategory(""); setSector(""); };
  const hasFilters = query || category || sector;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#2E2A26] mb-2">Measurements</h1>
        <p className="text-[#7A6E65]">Browse the complete catalogue of traditional Indian measurement units</p>
      </div>

      {/* Search + Filters Row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09080]" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by English, Sanskrit, Telugu name…"
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]"
          />
        </div>
        <button onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2.5 border rounded-lg text-sm transition-colors ${showFilters ? "bg-[#6F4E37] text-white border-[#6F4E37]" : "bg-white text-[#2E2A26] border-[#E8DED1] hover:border-[#6F4E37]"}`}
        >
          <Filter className="w-4 h-4" />
          Filters {hasFilters && <span className="w-5 h-5 bg-[#B88646] text-white rounded-full text-xs flex items-center justify-center">!</span>}
        </button>
        <div className="flex border border-[#E8DED1] rounded-lg overflow-hidden">
          <button onClick={() => setView("grid")} className={`px-3 py-2 ${view === "grid" ? "bg-[#6F4E37] text-white" : "bg-white text-[#7A6E65] hover:bg-[#FAF7F2]"}`}>
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button onClick={() => setView("list")} className={`px-3 py-2 ${view === "list" ? "bg-[#6F4E37] text-white" : "bg-white text-[#7A6E65] hover:bg-[#FAF7F2]"}`}>
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white border border-[#E8DED1] rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#7A6E65] mb-1.5">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DED1] rounded text-sm focus:outline-none focus:border-[#6F4E37]"
              >
                <option value="">All categories</option>
                {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#7A6E65] mb-1.5">Sector</label>
              <select value={sector} onChange={(e) => setSector(e.target.value)}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DED1] rounded text-sm focus:outline-none focus:border-[#6F4E37]"
              >
                <option value="">All sectors</option>
                {SECTORS.map((s) => <option key={s.id} value={s.slug}>{s.name}</option>)}
              </select>
            </div>
            {hasFilters && (
              <div className="flex items-end">
                <button onClick={clearFilters} className="flex items-center gap-1 px-3 py-2 text-sm text-[#6F4E37] hover:bg-[#FAF7F2] rounded transition-colors">
                  <X className="w-4 h-4" /> Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-[#7A6E65]">
          {filtered.length} measurement{filtered.length !== 1 ? "s" : ""} found
        </p>
        {hasFilters && (
          <div className="flex flex-wrap gap-2">
            {category && <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(category)}`}>{category}</span>}
            {sector && <span className="text-xs px-2 py-0.5 bg-[#FAF7F2] text-[#6F4E37] rounded-full border border-[#E8DED1]">{sector}</span>}
          </div>
        )}
      </div>

      {/* Grid / List View */}
      {paginated.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-[#A09080] mb-2">No measurements found</p>
          <button onClick={clearFilters} className="text-sm text-[#6F4E37] underline">Clear filters</button>
        </div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginated.map((m) => <MeasurementCard key={m.id} m={m} />)}
        </div>
      ) : (
        <div className="bg-white border border-[#E8DED1] rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#FAF7F2] border-b border-[#E8DED1]">
              <tr>
                {["Name", "Sanskrit", "Category", "Sector", "Modern Equivalent", "States", ""].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#7A6E65]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0EAE0]">
              {paginated.map((m) => (
                <tr key={m.id} className="hover:bg-[#FAF7F2]">
                  <td className="px-4 py-3 font-medium text-[#2E2A26]">{m.name_english}</td>
                  <td className="px-4 py-3 text-[#7A6E65]">{m.name_sanskrit || "—"}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(m.category)}`}>{m.category}</span>
                  </td>
                  <td className="px-4 py-3 text-[#7A6E65] capitalize">{m.sector}</td>
                  <td className="px-4 py-3 text-[#7A6E65] font-mono text-xs">{m.modern_equivalent || "—"}</td>
                  <td className="px-4 py-3 text-[#7A6E65] text-xs">{m.states?.slice(0, 2).join(", ")}</td>
                  <td className="px-4 py-3">
                    <Link href={`/measurements/${m.slug}`} className="text-xs text-[#6F4E37] font-medium hover:underline">View →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
            className="px-3 py-1.5 text-sm border border-[#E8DED1] rounded disabled:opacity-40 hover:border-[#6F4E37] transition-colors"
          >← Prev</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button key={p} onClick={() => setPage(p)}
              className={`w-8 h-8 text-sm rounded transition-colors ${p === page ? "bg-[#6F4E37] text-white" : "border border-[#E8DED1] hover:border-[#6F4E37]"}`}
            >{p}</button>
          ))}
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="px-3 py-1.5 text-sm border border-[#E8DED1] rounded disabled:opacity-40 hover:border-[#6F4E37] transition-colors"
          >Next →</button>
        </div>
      )}
    </div>
  );
}

"use client";
import { useState, useEffect, useMemo, useCallback, useRef, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, Filter, LayoutGrid, List, X } from "lucide-react";
import { CATEGORIES, SECTORS, SAMPLE_MEASUREMENTS, getCategoryColor, isExcludedMeasurement, normalizeMeasurement } from "@/lib/data";
import { displayMeasurementType } from "@/lib/format";
import MeasurementCard from "@/components/measurements/MeasurementCard";
import Link from "next/link";
import { Measurement } from "@/types";
import Fuse from "fuse.js";
import { db } from "@/lib/firebase/client";
import { collection, getDocs } from "firebase/firestore";

const PER_PAGE = 12;

export default function MeasurementsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-[#7A6E65]">Loading measurements…</div>}>
      <MeasurementsBrowser />
    </Suspense>
  );
}

function MeasurementsBrowser() {
  // Search text, filters, view and page are kept in the URL, so links like
  // /measurements?q=Tola work and the Back button returns to the same results.
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [measurements, setMeasurements] = useState<Measurement[]>(SAMPLE_MEASUREMENTS);
  const [loading, setLoading] = useState(true);
  const [query, setQueryState] = useState(searchParams.get("q") ?? "");
  const category = searchParams.get("category") ?? "";
  const sector = searchParams.get("sector") ?? "";
  const view: "grid" | "list" = searchParams.get("view") === "list" ? "list" : "grid";
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);
  const [showFilters, setShowFilters] = useState(Boolean(category || sector));

  const setParams = useCallback(
    (changes: Record<string, string | number | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [k, v] of Object.entries(changes)) {
        if (v === null || v === "" || (k === "page" && v === 1) || (k === "view" && v === "grid")) params.delete(k);
        else params.set(k, String(v));
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );
  const setCategory = (v: string) => setParams({ category: v, page: 1 });
  const setSector = (v: string) => setParams({ sector: v, page: 1 });
  const setView = (v: "grid" | "list") => setParams({ view: v });
  const setPage = (v: number | ((p: number) => number)) =>
    setParams({ page: typeof v === "function" ? v(page) : v });

  // Keep the search box and the URL in step (debounced so typing stays smooth)
  const lastPushedQ = useRef(searchParams.get("q") ?? "");
  useEffect(() => {
    // Only react to URL changes we did not make ourselves (e.g. Back/Forward, a new ?q= link)
    const urlQ = searchParams.get("q") ?? "";
    if (urlQ !== lastPushedQ.current) {
      lastPushedQ.current = urlQ;
      setQueryState(urlQ);
    }
  }, [searchParams]);
  const setQuery = (v: string) => setQueryState(v);
  useEffect(() => {
    if (query === lastPushedQ.current) return;
    const t = setTimeout(() => {
      lastPushedQ.current = query;
      setParams({ q: query, page: 1 });
    }, 300);
    return () => clearTimeout(t);
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // Local dataset is shown immediately. Firestore data (if any) is merged in
    // afterwards, with a timeout so a missing/mock Firebase never blocks the page.
    let cancelled = false;
    async function fetchMeasurements() {
      try {
        const snap = await Promise.race([
          getDocs(collection(db, "measurements")),
          new Promise<null>((resolve) => setTimeout(() => resolve(null), 4000)),
        ]);
        if (!snap || cancelled) return;
        const remote: Measurement[] = [];
        snap.forEach((d) => {
          const item = normalizeMeasurement({ id: d.id, ...d.data() } as Measurement);
          if (!isExcludedMeasurement(item)) remote.push(item);
        });
        if (remote.length === 0) return;
        const seen = new Set(SAMPLE_MEASUREMENTS.map((m) => m.slug || m.id));
        const extra = remote.filter((m) => !seen.has(m.slug || m.id));
        if (extra.length > 0) setMeasurements([...SAMPLE_MEASUREMENTS, ...extra]);
      } catch (error) {
        console.error("Firestore unavailable, using local dataset:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchMeasurements();
    return () => { cancelled = true; };
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

  const clearFilters = () => { setQueryState(""); lastPushedQ.current = ""; setParams({ q: null, category: null, sector: null, page: 1 }); };
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
            {sector && <span className="text-xs px-2 py-0.5 bg-[#FAF7F2] text-[#6F4E37] rounded-full border border-[#E8DED1]">{SECTORS.find((s) => s.slug === sector)?.name ?? sector}</span>}
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
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(m.category)}`}>{displayMeasurementType(m.measurement_type, m.category)}</span>
                  </td>
                  <td className="px-4 py-3 text-[#7A6E65]">{SECTORS.find((s) => s.slug === m.sector)?.name ?? m.sector}</td>
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
          {(() => {
            const size = Math.min(5, totalPages);
            const start = Math.min(Math.max(1, page - Math.floor(size / 2)), totalPages - size + 1);
            return Array.from({ length: size }, (_, i) => start + i);
          })().map((p) => (
            <button key={p} onClick={() => setPage(p)}
              className={`w-8 h-8 text-sm rounded transition-colors ${p === page ? "bg-[#6F4E37] text-white" : "border border-[#E8DED1] hover:border-[#6F4E37]"}`}
            >{p}</button>
          ))}
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
            className="px-3 py-1.5 text-sm border border-[#E8DED1] rounded disabled:opacity-40 hover:border-[#6F4E37] transition-colors"
          >Next →</button>
          <span className="hidden sm:inline ml-2 text-xs text-[#A09080]">Page {page} of {totalPages}</span>
        </div>
      )}
    </div>
  );
}

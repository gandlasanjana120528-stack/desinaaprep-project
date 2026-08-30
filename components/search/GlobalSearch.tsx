"use client";
import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SAMPLE_MEASUREMENTS } from "@/lib/data";
import Fuse from "fuse.js";

const fuse = new Fuse(SAMPLE_MEASUREMENTS, {
  keys: ["name_english", "name_sanskrit", "name_telugu", "name_hindi", "meaning", "category", "tags"],
  threshold: 0.4
});

export default function GlobalSearch({ large = false }: { large?: boolean }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof SAMPLE_MEASUREMENTS>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length < 2) { setResults([]); return; }
    const r = fuse.search(query).slice(0, 6).map((r) => r.item);
    setResults(r);
    setOpen(true);
  }, [query]);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`relative ${large ? "w-full max-w-2xl" : "w-full max-w-sm"}`}>
      <div className={`flex items-center gap-3 bg-white border-2 ${open && results.length ? "border-[#6F4E37]" : "border-[#E8DED1]"} rounded-lg px-4 ${large ? "py-3" : "py-2"} shadow-sm transition-colors`}>
        <Search className={`text-[#7A6E65] flex-shrink-0 ${large ? "w-5 h-5" : "w-4 h-4"}`} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setOpen(true)}
          placeholder="Search measurements, units, regions…"
          className={`flex-1 bg-transparent outline-none text-[#2E2A26] placeholder-[#A09080] ${large ? "text-base" : "text-sm"}`}
        />
        {query && (
          <button onClick={() => { setQuery(""); setResults([]); }} className="text-[#A09080] hover:text-[#2E2A26]">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E8DED1] rounded-lg shadow-xl z-50 overflow-hidden">
          {results.map((m) => (
            <Link key={m.id} href={`/measurements/${m.slug}`}
              onClick={() => { setOpen(false); setQuery(""); }}
              className="flex items-center justify-between px-4 py-3 hover:bg-[#FAF7F2] border-b border-[#F0EAE0] last:border-0 group"
            >
              <div>
                <div className="text-sm font-medium text-[#2E2A26]">{m.name_english}</div>
                <div className="text-xs text-[#7A6E65]">{m.name_sanskrit} · {m.category}</div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#A09080] group-hover:text-[#6F4E37] transition-colors" />
            </Link>
          ))}
          <Link href={`/measurements?q=${query}`}
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-xs text-[#6F4E37] font-medium hover:bg-[#FAF7F2] text-center border-t border-[#E8DED1]"
          >
            View all results for "{query}"
          </Link>
        </div>
      )}
    </div>
  );
}

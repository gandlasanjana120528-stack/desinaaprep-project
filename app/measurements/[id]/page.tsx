"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getCategoryColor } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, MapPin, BookOpen, ChevronRight, Scale, Layers } from "lucide-react";
import { db } from "@/lib/firebase/client";
import { collection, doc, getDoc, getDocs, query, where, limit } from "firebase/firestore";
import { Measurement } from "@/types";

export default function MeasurementDetailPage() {
  const params = useParams();
  const slug = params?.id as string;
  const [m, setM] = useState<Measurement | null>(null);
  const [related, setRelated] = useState<Measurement[]>([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    async function fetchData() {
      try {
        let measurement: Measurement | null = null;

        try {
          const docRef = doc(db, "measurements", slug);
          const snap = await getDoc(docRef);
          if (snap.exists()) {
            measurement = { id: snap.id, ...snap.data() } as Measurement;
          }
        } catch (e) {
          console.warn("Firestore fetch error, falling back to local dataset:", e);
        }

        if (!measurement) {
          const { SAMPLE_MEASUREMENTS } = await import("@/lib/data");
          measurement =
            SAMPLE_MEASUREMENTS.find(
              (item) => item.slug === slug || item.id === slug
            ) || null;
        }

        if (!measurement) {
          setNotFound(true);
          return;
        }

        setM(measurement);

        // Fetch related measurements
        try {
          const { SAMPLE_MEASUREMENTS } = await import("@/lib/data");
          const localRelated = SAMPLE_MEASUREMENTS.filter(
            (item) =>
              item.category === measurement!.category &&
              item.slug !== measurement!.slug &&
              item.id !== measurement!.id
          ).slice(0, 3);
          setRelated(localRelated);
        } catch (e) {
          console.error("Error fetching related measurements:", e);
        }
      } catch (err) {
        console.error("Error fetching measurement:", err);
        setNotFound(true);
      }
    }

    fetchData();
  }, [slug]);

  if (notFound) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-[#2E2A26] mb-4">404 - Not Found</h1>
        <p className="text-[#7A6E65] mb-6">This measurement doesn't exist.</p>
        <Link href="/measurements" className="px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm">Browse Measurements</Link>
      </div>
    );
  }

  if (!m) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-[#7A6E65]">
        Loading measurement...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-[#A09080] mb-8">
        <Link href="/" className="hover:text-[#6F4E37]">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/measurements" className="hover:text-[#6F4E37]">Measurements</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#2E2A26]">{m.name_english}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ── Main Content ── */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getCategoryColor(m.category)}`}>{m.category}</span>
              <span className="text-xs text-[#7A6E65] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E8DED1] capitalize">{m.sector}</span>
            </div>
            <h1 className="font-serif text-4xl font-bold text-[#2E2A26] mb-2">{m.name_english}</h1>
            {m.name_sanskrit && <p className="text-xl text-[#6F4E37] font-serif mb-1">{m.name_sanskrit}</p>}
            {m.name_telugu && <p className="text-lg text-[#7A6E65]">{m.name_telugu}</p>}
          </div>

          {/* Local names */}
          {m.local_names && m.local_names.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xs font-medium text-[#A09080] uppercase tracking-wider mb-2">Also known as</h3>
              <div className="flex flex-wrap gap-2">
                {m.local_names.map((n) => (
                  <span key={n} className="px-3 py-1 bg-white border border-[#E8DED1] rounded-full text-sm text-[#2E2A26]">{n}</span>
                ))}
              </div>
            </div>
          )}

          {/* Meaning */}
          {m.meaning && (
            <div className="mb-8 p-5 bg-[#FAF7F2] border-l-4 border-[#6F4E37] rounded-r-lg">
              <p className="text-[#2E2A26] leading-relaxed italic">{m.meaning}</p>
            </div>
          )}

          {/* Historical Context */}
          {m.historical_context && (
            <section className="mb-8">
              <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#6F4E37]" />
                Historical Context
              </h2>
              <p className="text-[#2E2A26] leading-relaxed">{m.historical_context}</p>
            </section>
          )}

          {/* Conversion */}
          {(m.modern_equivalent || m.conversion_formula) && (
            <section className="mb-8">
              <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#6F4E37]" />
                Conversion & Modern Equivalent
              </h2>
              <div className="bg-white border border-[#E8DED1] rounded-lg p-5 space-y-3">
                {m.modern_equivalent && (
                  <div>
                    <span className="text-xs font-medium text-[#A09080] uppercase tracking-wider">Modern Equivalent</span>
                    <p className="font-mono text-lg text-[#2E2A26] mt-1">{m.modern_equivalent}</p>
                  </div>
                )}
                {m.conversion_formula && (
                  <div>
                    <span className="text-xs font-medium text-[#A09080] uppercase tracking-wider">Formula</span>
                    <p className="font-mono text-sm text-[#2E2A26] bg-[#FAF7F2] px-3 py-2 rounded mt-1">{m.conversion_formula}</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Hierarchy */}
          {m.hierarchy && m.hierarchy.length > 0 && (
            <section className="mb-8">
              <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#6F4E37]" />
                Measurement Hierarchy
              </h2>
              <div className="space-y-2">
                {m.hierarchy.map((h: any, i: number) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${h.relation === "smaller" ? "bg-[#FAF7F2] border-[#E8DED1]" : "bg-white border-[#B88646]/30"}`}>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${h.relation === "smaller" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>
                      {h.relation}
                    </span>
                    <span className="font-medium text-sm text-[#2E2A26]">{h.name}</span>
                    <span className="text-sm text-[#7A6E65] font-mono ml-auto">{h.unit}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Used In */}
          {m.used_in && m.used_in.length > 0 && (
            <section className="mb-8">
              <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-4">Used In</h2>
              <div className="flex flex-wrap gap-2">
                {m.used_in.map((u: string) => (
                  <span key={u} className="px-3 py-1.5 bg-white border border-[#E8DED1] rounded text-sm text-[#2E2A26]">{u}</span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ── Sidebar ── */}
        <div className="space-y-6">
          {/* Quick Facts */}
          <div className="bg-white border border-[#E8DED1] rounded-lg p-5">
            <h3 className="font-semibold text-[#2E2A26] mb-4">Quick Facts</h3>
            <dl className="space-y-3">
              {[
                { label: "Category", value: m.category },
                { label: "Sector", value: m.sector },
                { label: "Origin", value: (m as any).origin || "Ancient India" },
                { label: "English", value: m.name_english },
                { label: "Sanskrit", value: m.name_sanskrit || "—" },
                { label: "Telugu", value: m.name_telugu || "—" },
                { label: "Hindi", value: m.name_hindi || "—" }
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-2">
                  <dt className="text-xs text-[#A09080] w-20 flex-shrink-0 pt-0.5">{label}</dt>
                  <dd className="text-sm text-[#2E2A26] capitalize">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* States */}
          {m.states && m.states.length > 0 && (
            <div className="bg-white border border-[#E8DED1] rounded-lg p-5">
              <h3 className="font-semibold text-[#2E2A26] mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#6F4E37]" />
                States
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {m.states.map((s: string) => (
                  <Link key={s} href={`/regions/${s.toLowerCase().replace(" ", "-")}`}
                    className="px-2.5 py-1 bg-[#FAF7F2] text-xs text-[#6F4E37] border border-[#E8DED1] rounded hover:border-[#6F4E37] transition-colors"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {m.tags && m.tags.length > 0 && (
            <div className="bg-white border border-[#E8DED1] rounded-lg p-5">
              <h3 className="font-semibold text-[#2E2A26] mb-3">Tags</h3>
              <div className="flex flex-wrap gap-1.5">
                {m.tags.map((t: string) => (
                  <span key={t} className="px-2.5 py-1 text-xs text-[#7A6E65] bg-[#FAF7F2] rounded border border-[#E8DED1]">#{t}</span>
                ))}
              </div>
            </div>
          )}

          <Link href="/measurements" className="flex items-center gap-1 text-sm text-[#6F4E37] font-medium px-5">
            <ArrowLeft className="w-4 h-4" /> Back to Measurements
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-14 pt-10 border-t border-[#E8DED1]">
          <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-6">Related Measurements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link key={r.id} href={`/measurements/${r.slug}`}
                className="block p-5 bg-white border border-[#E8DED1] rounded-lg hover:border-[#6F4E37] transition-colors"
              >
                <h3 className="font-semibold text-[#2E2A26]">{r.name_english}</h3>
                {r.name_sanskrit && <p className="text-sm text-[#6F4E37]">{r.name_sanskrit}</p>}
                <p className="text-xs text-[#A09080] mt-2 capitalize">{r.category} · {r.sector}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

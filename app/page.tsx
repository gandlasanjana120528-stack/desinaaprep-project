import Link from "next/link";
import { ArrowRight, BookOpen, Map, Layers, Image } from "lucide-react";
import GlobalSearch from "@/components/search/GlobalSearch";
import { SECTORS, SAMPLE_MEASUREMENTS, INDIAN_STATES, SITE_STATS, MEASUREMENT_HEADLINE } from "@/lib/data";
import IndiaMap from "@/components/IndiaMap";
import MeasurementCard from "@/components/measurements/MeasurementCard";

const QUICK_LINKS = [
  { icon: BookOpen, label: "Browse Measurements", href: "/measurements", desc: `${MEASUREMENT_HEADLINE} traditional units documented` },
  { icon: Map, label: "Explore Regions", href: "/regions", desc: "Coverage across all Indian states" },
  { icon: Layers, label: "Browse by Sector", href: "/sectors", desc: "8 major sectors – Agriculture, Trade, Architecture & more" },
  { icon: Image, label: "Infographics", href: "/infographics", desc: "Visual guides to measurement hierarchies" }
];

const SECTOR_EMOJI: Record<string, string> = {
  "vedic-measurements": "📜", agriculture: "🌾", "trade-commerce": "⚖️", architecture: "🏛️",
  medicine: "🌿", "textile-handloom": "🧵", "currency-money": "🪙", household: "🏠",
  "transportation-distance": "🧭", "land-measurement": "🗺️", "livestock-dairy": "🐄",
  "gold-jewellery": "💍", "religious-cultural": "🪔",
};

export default function HomePage() {
  // Hand-picked, different unit types that have accurate photos
  const FEATURED_SLUGS = [
    "ratti-trade-commerce-telangana",   // weight – Abrus (gunja) seeds
    "padi-household-telangana",         // volume – traditional grain measure
    "cowrie-kaudi-currency-telangana",  // currency – cowrie shell
  ];
  const picked = FEATURED_SLUGS
    .map((slug) => SAMPLE_MEASUREMENTS.find((m) => m.slug === slug))
    .filter((m): m is (typeof SAMPLE_MEASUREMENTS)[number] => Boolean(m));
  const featuredMeasurements = picked.length === 3 ? picked : SAMPLE_MEASUREMENTS.slice(0, 3);
  const featuredSectors = SECTORS.filter((s) => s.kind !== "classical");

  return (
    <div>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-[#4A3426] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-[#B88646] mb-4">
            Indian Knowledge Systems Initiative · MoE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            India's Traditional<br />
            <span className="text-[#B88646]">Measurement Systems</span>
          </h1>
          <p className="text-[#C8B8A2] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            From the Angula of Vedic architecture to the Mana of Telangana's grain markets — 
            documenting and preserving the indigenous measurement heritage of India.
          </p>
          <div className="flex justify-center mb-8">
            <GlobalSearch large />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#C8B8A2]">
            <span>Try searching:</span>
            {["Angula", "Mana", "Tola", "Hasta", "Khanduga"].map((term) => (
              <Link key={term} href={`/measurements?q=${encodeURIComponent(term)}`}
                className="px-3 py-1 bg-white/10 hover:bg-[#B88646] rounded-full transition-colors text-xs"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#E8DED1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E8DED1]">
            {[
              { value: MEASUREMENT_HEADLINE, label: "Measurements Documented" },
              { value: String(SITE_STATS.states), label: "States Covered" },
              { value: String(SITE_STATS.sectors), label: "Occupational Sectors" },
              { value: "6", label: "Languages Indexed" }
            ].map(({ value, label }) => (
              <div key={label} className="py-6 px-6 text-center">
                <div className="font-serif text-3xl font-bold text-[#6F4E37] mb-1">{value}</div>
                <div className="text-xs text-[#7A6E65]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Navigation ────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-2">Explore the Archive</h2>
            <p className="text-[#7A6E65]">Navigate by category, region, or sector</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_LINKS.map(({ icon: Icon, label, href, desc }) => (
              <Link key={href} href={href}
                className="group bg-white border border-[#E8DED1] rounded-lg p-6 hover:border-[#6F4E37] hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-[#FAF7F2] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#6F4E37] transition-colors">
                  <Icon className="w-5 h-5 text-[#6F4E37] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[#2E2A26] mb-1">{label}</h3>
                <p className="text-xs text-[#7A6E65]">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Measurements ───────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-2">Featured Measurements</h2>
              <p className="text-[#7A6E65]">Foundational units of traditional Indian metrology</p>
            </div>
            <Link href="/measurements" className="flex items-center gap-1 text-sm text-[#6F4E37] font-medium hover:gap-2 transition-all">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMeasurements.map((m) => (
              <MeasurementCard key={m.id} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Regions Preview ─────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-2">Regions</h2>
              <p className="text-[#7A6E65]">Explore measurement traditions by state</p>
            </div>
            <Link href="/regions" className="flex items-center gap-1 text-sm text-[#6F4E37] font-medium">
              All states <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive map – click a state to open it */}
          <div className="bg-white border border-[#E8DED1] rounded-xl p-4 sm:p-6 mb-8">
            <IndiaMap />
            <p className="text-center text-xs text-[#7A6E65] mt-3">Click a state on the map to see its measurements</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {INDIAN_STATES.slice(0, 12).map((state) => (
              <Link key={state.id} href={`/regions/${state.slug}`}
                className="bg-white border border-[#E8DED1] rounded-lg p-3 text-center hover:border-[#B88646] hover:shadow-sm transition-all group"
              >
                <div className="font-medium text-sm text-[#2E2A26] group-hover:text-[#6F4E37]">{state.name}</div>
                <div className="text-xs text-[#A09080] mt-1">{state.measurement_count} units</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sectors ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-2">By Sector</h2>
              <p className="text-[#7A6E65]">Measurement systems organized by domain of practice</p>
            </div>
            <Link href="/sectors" className="flex items-center gap-1 text-sm text-[#6F4E37] font-medium">
              All sectors <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {featuredSectors.map((s) => (
              <Link key={s.id} href={`/sectors/${s.slug}`}
                className="bg-[#FAF7F2] border border-[#E8DED1] rounded-lg p-4 text-center hover:bg-white hover:border-[#B88646] hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">
                  {SECTOR_EMOJI[s.slug] ?? "📐"}
                </div>
                <div className="font-medium text-sm text-[#2E2A26] group-hover:text-[#6F4E37]">{s.name}</div>
                <div className="text-xs text-[#A09080] mt-1">{s.measurement_count} units</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-4">
            A Living Archive of Indian Metrology
          </h2>
          <p className="text-[#7A6E65] leading-relaxed mb-8">
            This platform is part of an ongoing Indian Knowledge Systems research initiative. 
            Data is being continuously added across all states, districts, and sectors.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/measurements" className="px-6 py-2.5 bg-[#6F4E37] text-white rounded-lg hover:bg-[#4A3426] transition-colors text-sm font-medium">
              Browse Measurements
            </Link>
            <Link href="/references" className="px-6 py-2.5 border border-[#E8DED1] text-[#2E2A26] rounded-lg hover:border-[#6F4E37] hover:text-[#6F4E37] transition-colors text-sm font-medium">
              View References
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

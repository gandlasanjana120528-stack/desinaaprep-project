import { SECTORS, SAMPLE_MEASUREMENTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MeasurementCard from "@/components/measurements/MeasurementCard";

const EMOJI: Record<string, string> = {
  agriculture: "🌾", "trade-commerce": "⚖️", "currency-money": "🪙",
  architecture: "🏛️", medicine: "🌿", "textile-handloom": "🧵",
  household: "🏠", "storage-transport": "📦"
};

const OVERVIEWS: Record<string, string> = {
  agriculture: "Agriculture was the backbone of ancient Indian civilisation. An intricate system of measurement governed every aspect of farming — from the amount of seed sown to the harvest stored, the land assessed for revenue, and the water allocated through irrigation channels. Each region developed its own vocabulary of units, many of which persisted through the Mughal and British periods.",
  architecture: "Temple construction, domestic architecture, and urban planning in ancient India operated through a precise body-based measurement system rooted in the Angula (finger breadth). The Manasara, Mayamata, and Vastu Shastra treatises codified these systems into canonical standards that guided craftsmen for centuries.",
  "trade-commerce": "Markets across India developed standardised weights and measures for fair exchange. From the Tola of the jeweller's scale to the Khanduga of the grain market, each domain developed specialised units that were regulated by local guilds and royal authorities.",
  medicine: "Ayurvedic pharmacology required precise measurement of drugs and ingredients. A dedicated system of weights — from the Ratti (a single red gunja seed) to the Prastha — ensured accurate compounding of formulations. These units are still referenced in traditional Ayurvedic practice.",
  "currency-money": "Monetary systems in India were tightly linked to the weight of precious metals. Coin weights — from the ancient Nishka to the Mughal-era Tola — defined value and facilitated long-distance trade across the subcontinent.",
  "textile-handloom": "The weaving industries of India — from Banarasi silk to Pochampally ikat — developed specialised length and count measures for threads, fabrics, and looms. These ensured consistent quality across master weavers and their apprentices.",
  household: "Daily domestic life in traditional India was measured by hand, cup, and pot. Units for rice, oil, milk, and fuel were calibrated to the human body and the community's needs, making measurement an embodied and shared practice.",
  "storage-transport": "Bulk goods — grain, salt, cotton, spices — required large-scale measures for storage and transport. Units were designed to match the capacity of standard vessels, carts, and human carrying loads."
};

export async function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export default async function SectorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = SECTORS.find((s) => s.slug === slug);
  if (!sector) notFound();

  const measurements = SAMPLE_MEASUREMENTS.filter((m) => m.sector === slug || m.sector === sector.name.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="flex items-center gap-2 text-xs text-[#A09080] mb-8">
        <Link href="/" className="hover:text-[#6F4E37]">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/sectors" className="hover:text-[#6F4E37]">Sectors</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#2E2A26]">{sector.name}</span>
      </nav>

      <div className="bg-[#4A3426] text-white rounded-xl p-8 mb-10">
        <div className="flex items-start gap-5">
          <div className="text-5xl">{EMOJI[slug] || "📐"}</div>
          <div>
            <span className="text-xs font-medium text-[#B88646] uppercase tracking-wider">Sector</span>
            <h1 className="font-serif text-3xl font-bold mt-1 mb-2">{sector.name}</h1>
            <p className="text-[#C8B8A2]">{sector.description}</p>
            <p className="text-[#B88646] text-sm mt-2">{sector.measurement_count} measurements documented</p>
          </div>
        </div>
      </div>

      {OVERVIEWS[slug] && (
        <div className="mb-10 max-w-3xl">
          <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-4">Overview</h2>
          <p className="text-[#2E2A26] leading-relaxed">{OVERVIEWS[slug]}</p>
        </div>
      )}

      <section className="mb-10">
        <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-5">Measurements in {sector.name}</h2>
        {measurements.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {measurements.map((m) => <MeasurementCard key={m.id} m={m} />)}
          </div>
        ) : (
          <div className="text-center py-14 bg-white border border-[#E8DED1] rounded-xl">
            <p className="text-[#A09080] text-sm mb-1">Measurements for this sector are being documented.</p>
            <p className="text-xs text-[#C8B8A2]">Additional data will be added progressively.</p>
          </div>
        )}
      </section>

      <div className="border-t border-[#E8DED1] pt-8">
        <Link href="/sectors" className="text-sm text-[#6F4E37] font-medium hover:underline">← All Sectors</Link>
      </div>
    </div>
  );
}

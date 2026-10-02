import { SECTORS, SAMPLE_MEASUREMENTS } from "@/lib/data";
import { notFound } from "next/navigation";
import SectorDetailView from "@/components/measurements/SectorDetailView";

const EMOJI: Record<string, string> = {
  "vedic-measurements": "📜",
  agriculture: "🌾",
  "trade-commerce": "⚖️",
  "currency-money": "🪙",
  architecture: "🏛️",
  medicine: "🌿",
  "textile-handloom": "🧵",
  household: "🏠",
  "storage-transport": "📦",
};

const OVERVIEWS: Record<string, string> = {
  "vedic-measurements":
    "Ancient Indian metrology codified comprehensive systems of measurement across foundational domains: Length (from minute Yava grains to cosmic Yojanas), Weight (from delicate Guñjā seeds to commercial Tulā), Capacity (from cupped-hand Añjali to granary Khāri), and Time (from the blink of an eye in Nimeṣa to cyclical Saṃvatsara years). Documented in foundational texts including the Arthaśāstra, Charaka Saṃhitā, and Vedic treatises, these units formed the mathematical and cosmological scaffolding of traditional Indian science.",
  agriculture:
    "Agriculture was the backbone of ancient Indian civilisation. An intricate system of measurement governed every aspect of farming — from the amount of seed sown to the harvest stored, the land assessed for revenue, and the water allocated through irrigation channels. Each region developed its own vocabulary of units, many of which persisted through the Mughal and British periods.",
  architecture:
    "Temple construction, domestic architecture, and urban planning in ancient India operated through a precise body-based measurement system rooted in the Angula (finger breadth). The Manasara, Mayamata, and Vastu Shastra treatises codified these systems into canonical standards that guided craftsmen for centuries.",
  "trade-commerce":
    "Markets across India developed standardised weights and measures for fair exchange. From the Tola of the jeweller's scale to the Khanduga of the grain market, each domain developed specialised units that were regulated by local guilds and royal authorities.",
  medicine:
    "Ayurvedic pharmacology required precise measurement of drugs and ingredients. A dedicated system of weights — from the Ratti (a single red gunja seed) to the Prastha — ensured accurate compounding of formulations. These units are still referenced in traditional Ayurvedic practice.",
  "currency-money":
    "Monetary systems in India were tightly linked to the weight of precious metals. Coin weights — from the ancient Nishka to the Mughal-era Tola — defined value and facilitated long-distance trade across the subcontinent.",
  "textile-handloom":
    "The weaving industries of India — from Banarasi silk to Pochampally ikat — developed specialised length and count measures for threads, fabrics, and looms. These ensured consistent quality across master weavers and their apprentices.",
  household:
    "Daily domestic life in traditional India was measured by hand, cup, and pot. Units for rice, oil, milk, and fuel were calibrated to the human body and the community's needs, making measurement an embodied and shared practice.",
  "storage-transport":
    "Bulk goods — grain, salt, cotton, spices — required large-scale measures for storage and transport. Units were designed to match the capacity of standard vessels, carts, and human carrying loads.",
};

export async function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = SECTORS.find((s) => s.slug === slug);
  if (!sector) notFound();

  const measurements = SAMPLE_MEASUREMENTS.filter(
    (m) =>
      m.sector === slug ||
      m.sector?.toLowerCase() === sector.name.toLowerCase() ||
      (slug === "vedic-measurements" && m.sector === "vedic-measurements")
  );

  return (
    <SectorDetailView
      sector={sector}
      measurements={measurements}
      emoji={EMOJI[slug] || "📐"}
      overview={OVERVIEWS[slug]}
    />
  );
}

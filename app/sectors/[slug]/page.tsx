import { SECTORS, SAMPLE_MEASUREMENTS, SECTOR_ALIASES } from "@/lib/data";
import { notFound, permanentRedirect } from "next/navigation";
import SectorDetailView from "@/components/measurements/SectorDetailView";
import { Suspense } from "react";

const EMOJI: Record<string, string> = {
  "vedic-measurements": "📜",
  agriculture: "🌾",
  "trade-commerce": "⚖️",
  "currency-money": "🪙",
  architecture: "🏛️",
  medicine: "🌿",
  "textile-handloom": "🧵",
  household: "🏠",
  "transportation-distance": "🧭",
  "land-measurement": "🗺️",
  "livestock-dairy": "🐄",
  "gold-jewellery": "💍",
  "religious-cultural": "🪔",
};

const OVERVIEWS: Record<string, string> = {
  "vedic-measurements":
    "Ancient Indian metrology codified comprehensive systems of measurement across foundational domains: Length (from minute Yava grains to cosmic Yojanas), Weight (from delicate Guñjā seeds to commercial Tulā), Capacity (from cupped-hand Añjali to granary Khāri), and Time (from the blink of an eye in Nimeṣa to cyclical Saṃvatsara years). Documented in foundational texts including the Arthaśāstra, Charaka Saṃhitā, and Vedic treatises, these units formed the mathematical and cosmological scaffolding of traditional Indian science.",
  agriculture:
    "Agriculture was the backbone of ancient Indian civilisation. An intricate system of measurement governed every aspect of farming – from the seed sown and the harvest stored to the land assessed for revenue. Herding and dairy belonged to the same village economy, with their own measures for milk, ghee and fodder, and cattle themselves counted as wealth.",
  architecture:
    "Temple construction, domestic architecture, and urban planning in ancient India operated through a precise body-based measurement system rooted in the Angula (finger breadth). The Manasara, Mayamata, and Vastu Shastra treatises codified these systems into canonical standards that guided craftsmen for centuries.",
  "trade-commerce":
    "Markets across India developed standardised weights and measures for fair exchange. From the goldsmith's scale – the Ratti seed, the Masha and the Tola, the weight of a silver rupee – to the Seer and Maund of the grain market, each trade had specialised units regulated by guilds and royal authorities.",
  medicine:
    "Ayurvedic pharmacology required precise measurement of drugs and ingredients. A dedicated system of weights — from the Ratti (a single red gunja seed) to the Prastha — ensured accurate compounding of formulations. These units are still referenced in traditional Ayurvedic practice.",
  "currency-money":
    "Monetary systems in India were tightly linked to the weight of precious metals. Coin weights — from the ancient Nishka to the Mughal-era Tola — defined value and facilitated long-distance trade across the subcontinent.",
  "textile-handloom":
    "The weaving industries of India — from Banarasi silk to Pochampally ikat — developed specialised length and count measures for threads, fabrics, and looms. These ensured consistent quality across master weavers and their apprentices.",
  household:
    "Daily domestic life in traditional India was measured by hand, cup and pot. Units for rice, oil, milk and fuel were calibrated to the body and the community's needs. Ritual life followed its own reckoning too – the Ghati and Muhurta of the Panchang and the measured offerings of festivals.",
  "transportation-distance":
    "Before milestones and odometers, India measured roads by the Kos, the stage of a day's march and the time it took a bullock cart to travel. Mughal Kos Minars still mark the old imperial highways, and pilgrim routes are counted in Kos to this day.",
  "land-measurement":
    "Land was measured for ownership and for revenue. Bigha, Guntha, Kani, Biswa and Dhur varied from district to district, and chains and rods fixed field boundaries in village records. Beyond the village, roads were reckoned in Kos and Yojana – the Mughal Kos Minars still mark the old highways.",
  "livestock-dairy":
    "Milk, ghee and fodder had their own measures: the herder's pot, the ser of milk, and loads counted by the animal. Cattle themselves served as a measure of wealth in many communities.",
  "gold-jewellery":
    "The goldsmith's scale runs from the single Ratti seed to the Masha and the Tola – the weight of a silver rupee. These units are still used by jewellers across India today.",
  "religious-cultural":
    "Ritual time and sacred space have their own units – the Ghati, Pal and Muhurta of the Panchang, the measured altar of the Vedic yajna, and the offerings counted out in temple practice.",
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
  // Old sector pages (e.g. /sectors/gold-jewellery) now live inside a major sector
  if (SECTOR_ALIASES[slug]) permanentRedirect(`/sectors/${SECTOR_ALIASES[slug]}`);
  const sector = SECTORS.find((s) => s.slug === slug);
  if (!sector) notFound();

  const measurements = SAMPLE_MEASUREMENTS.filter(
    (m) =>
      m.sector === slug ||
      m.sector?.toLowerCase() === sector.name.toLowerCase() ||
      (slug === "vedic-measurements" && m.sector === "vedic-measurements")
  );

  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-[#7A6E65]">Loading…</div>}>
      <SectorDetailView
        sector={sector}
        measurements={measurements}
        emoji={EMOJI[slug] || "📐"}
        overview={OVERVIEWS[slug]}
      />
    </Suspense>
  );
}

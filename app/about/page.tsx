import Link from "next/link";
import { Search, Map, Layers, Languages, Ruler, MessageCircle, BookMarked, Workflow } from "lucide-react";
import { SITE_STATS, MEASUREMENT_HEADLINE } from "@/lib/data";

export const metadata = {
  title: "About the Project",
  description:
    "DESINAAP is an Indian Knowledge Systems (IKS) internship project, 2025, under the Ministry of Education, documenting India's traditional measurement systems.",
};

// One real chain from the archive, used as the page's centrepiece:
// how the goldsmith's scale climbs from a single seed to a silver coin.
const LADDER = [
  { unit: "Ratti", note: "one red-and-black Gunja seed", value: "≈ 0.12 g" },
  { unit: "Masha", note: "8 Ratti", value: "≈ 0.97 g" },
  { unit: "Tola", note: "12 Masha – the weight of a silver rupee", value: "≈ 11.66 g" },
  { unit: "Seer", note: "80 Tola", value: "≈ 0.93 kg" },
  { unit: "Maund", note: "40 Seer", value: "≈ 37.3 kg" },
];

const FEATURES = [
  { icon: Map, title: "State by state, sector by sector", text: `Every unit is filed under its state and one of ${SITE_STATS.sectors} sectors of life – farming, trade, building, medicine, weaving, money, the home and more – so you can see how one region measured its whole world. A separate Vedic collection holds the classical units of the Shastras.` },
  { icon: Languages, title: "In the languages people used", text: "Units carry their Sanskrit name alongside Telugu, Hindi, Tamil, Kannada, Marathi, Konkani and other local names, so a Tola is recognisable whether it was called Tulam, Tolā or Bhori." },
  { icon: Ruler, title: "Connected to modern units", text: "Each traditional unit is given its approximate metric equivalent and its place in its own ladder – how many of the smaller unit make it, and what it adds up to." },
  { icon: Workflow, title: "Infographics and converters", text: "Flowcharts trace whole systems, from the Paramanu to the Yojana, with a calculator that converts between traditional and metric units." },
  { icon: Search, title: "Search across the archive", text: "Fuzzy search finds a unit from any of its names, even when the spelling differs from region to region." },
  { icon: MessageCircle, title: "An assistant that answers and quizzes", text: "The DESINAAP assistant answers questions in the visitor's own language and can quiz learners on what they have just read." },
  { icon: BookMarked, title: "Grounded in sources", text: "Entries point back to classical texts such as the Arthashastra and Manasara, colonial surveys, archaeology and present-day law." },
  { icon: Layers, title: "Open for the archive to grow", text: "An admin area lets the team add and correct units without touching code, so the record keeps improving." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#4A3426] text-white px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <p className="text-sm text-[#D9B77E] mb-4">IKS Internship Project, 2025 · Ministry of Education</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.1] mb-6">
              Re-coding the ways India measured its world
            </h1>
            <p className="text-[#E3D6C3] text-lg leading-relaxed max-w-xl">
              DESINAAP – from <em>desi</em>, native, and <em>naap</em>, measure – is a digital archive of
              India&apos;s traditional units of length, weight, volume, area, time and money. It gathers{" "}
              {MEASUREMENT_HEADLINE} documented units from {SITE_STATS.states} states
              into one place that anyone can search, compare and learn from.
            </p>
          </div>

          {/* Centrepiece: a real measurement ladder */}
          <figure className="bg-[#FAF7F2] text-[#2E2A26] rounded-2xl p-6 shadow-xl">
            <figcaption className="font-serif text-lg font-bold mb-1">From a seed to a sack of grain</figcaption>
            <p className="text-xs text-[#7A6E65] mb-5">The weight ladder used by goldsmiths and grain traders</p>
            <ol className="relative border-l-2 border-[#B88646] ml-2 space-y-4">
              {LADDER.map((step) => (
                <li key={step.unit} className="pl-5 relative">
                  <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#6F4E37] ring-4 ring-[#FAF7F2]" />
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-serif text-xl font-bold">{step.unit}</span>
                    <span className="text-sm tabular-nums text-[#6F4E37]">{step.value}</span>
                  </div>
                  <p className="text-xs text-[#7A6E65]">{step.note}</p>
                </li>
              ))}
            </ol>
          </figure>
        </div>
      </section>

      {/* Why it matters */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#2E2A26] mb-6">Why this project</h2>
          <div className="space-y-5 text-[#3D3531] text-[17px] leading-[1.8]">
            <p>
              Long before the metric system, Indians measured with the body, with seeds and with everyday
              vessels. A temple was planned in Angulas and Hastas, gold was weighed against Ratti seeds, grain
              was sold by the Padi and the Mana, and a journey was counted in Kos. These systems were precise,
              local and deeply tied to how people worked.
            </p>
            <p>
              When India adopted metric units in the 1950s and 60s, most of this knowledge stopped being
              written down. It survives today in old revenue records, in classical treatises, and in the
              memory of farmers, weavers, goldsmiths and Ayurvedic practitioners – scattered, and fading.
            </p>
            <p>
              DESINAAP was built as part of the Indian Knowledge Systems (IKS) internship programme of the
              Ministry of Education in 2025 to collect this knowledge before it is lost, check it against
              sources, and present it in a form students, teachers and researchers can actually use.
            </p>
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section className="px-4 py-16 bg-white border-y border-[#E8DED1]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#2E2A26] mb-3">What makes DESINAAP different</h2>
          <p className="text-[#7A6E65] mb-10 max-w-2xl">
            Most sources cover a handful of famous units. DESINAAP treats traditional measurement as a whole
            system, region by region.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <Icon className="w-6 h-6 text-[#B88646] flex-shrink-0 mt-1" aria-hidden />
                <div>
                  <h3 className="font-semibold text-[#2E2A26] mb-1">{title}</h3>
                  <p className="text-sm text-[#5E534B] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-10">
          <h2 className="font-serif text-3xl font-bold text-[#2E2A26]">The impact we are aiming for</h2>
          <dl className="space-y-6">
            {[
              ["For students", "A clear, visual way to learn how Indian units relate to one another and to SI units – useful for IKS courses under NEP 2020."],
              ["For researchers", "One searchable record of regional variants, with names in local scripts and pointers to the original sources."],
              ["For communities", "Recognition of the measuring knowledge of farmers, artisans and traders, recorded in their own terms."],
              ["For heritage", "A digital record that keeps these systems available long after they have left everyday use."],
            ].map(([who, what]) => (
              <div key={who} className="border-l-4 border-[#B88646] pl-5">
                <dt className="font-serif text-lg font-bold text-[#2E2A26]">{who}</dt>
                <dd className="text-[#5E534B] leading-relaxed mt-1">{what}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Next steps */}
      <section className="px-4 pb-8">
        <div className="max-w-5xl mx-auto bg-[#F3EBDD] rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-1">Meet the team behind it</h2>
            <p className="text-[#5E534B] text-sm">Four IKS interns and their Principal Investigator.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/members" className="px-5 py-2.5 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426] transition-colors">
              View members
            </Link>
            <Link href="/measurements" className="px-5 py-2.5 border border-[#6F4E37] text-[#6F4E37] rounded-lg text-sm font-medium hover:bg-white transition-colors">
              Browse measurements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

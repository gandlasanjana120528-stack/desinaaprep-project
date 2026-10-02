import { INDIAN_STATES, SAMPLE_MEASUREMENTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MeasurementCard from "@/components/measurements/MeasurementCard";

export default async function DistrictPage({ params }: { params: Promise<{ state: string; district: string }> }) {
  const { state: stateSlug, district: districtSlug } = await params;
  const state = INDIAN_STATES.find((s) => s.slug === stateSlug);
  if (!state) notFound();
  const district = state.districts?.find((d) => d.slug === districtSlug);
  if (!district) notFound();

  const measurements = SAMPLE_MEASUREMENTS.filter(
    (m) => m.districts?.some((d) => d.toLowerCase() === district.name.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="flex items-center gap-2 text-xs text-[#A09080] mb-8">
        <Link href="/" className="hover:text-[#6F4E37]">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/regions" className="hover:text-[#6F4E37]">Regions</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href={`/regions/${state.slug}`} className="hover:text-[#6F4E37]">{state.name}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#2E2A26]">{district.name}</span>
      </nav>

      <div className="bg-[#4A3426] text-white rounded-xl p-8 mb-10">
        <span className="text-xs font-medium text-[#B88646] uppercase tracking-wider">{state.name} · District</span>
        <h1 className="font-serif text-3xl font-bold mt-1 mb-2">{district.name}</h1>
        <p className="text-[#C8B8A2] text-sm">{district.measurement_count || 0} measurements documented</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <section className="mb-10">
            <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-5">Measurements from {district.name}</h2>
            {measurements.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {measurements.map((m) => <MeasurementCard key={m.id} m={m} />)}
              </div>
            ) : (
              <div className="text-center py-12 bg-white border border-[#E8DED1] rounded-lg">
                <p className="text-[#A09080] text-sm">Measurements for {district.name} are being compiled.</p>
              </div>
            )}
          </section>

          {/* Regional Vocabulary */}
          {district.regional_vocabulary && district.regional_vocabulary.length > 0 && (
            <section className="mb-10">
              <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-5">Regional Vocabulary</h2>
              <div className="bg-white border border-[#E8DED1] rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#FAF7F2] border-b border-[#E8DED1]">
                    <tr>
                      {["Term", "Meaning", "Language"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#7A6E65]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0EAE0]">
                    {district.regional_vocabulary.map((v, i) => (
                      <tr key={i} className="hover:bg-[#FAF7F2]">
                        <td className="px-4 py-3 font-medium text-[#2E2A26]">{v.term}</td>
                        <td className="px-4 py-3 text-[#7A6E65]">{v.meaning}</td>
                        <td className="px-4 py-3 text-[#A09080] text-xs">{v.language}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>

        <div>
          <div className="bg-white border border-[#E8DED1] rounded-lg p-5">
            <h3 className="font-semibold text-[#2E2A26] mb-4">District Info</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between"><dt className="text-[#A09080]">District</dt><dd className="text-[#2E2A26] font-medium">{district.name}</dd></div>
              <div className="flex justify-between"><dt className="text-[#A09080]">State</dt><dd className="text-[#2E2A26] font-medium">{state.name}</dd></div>
              <div className="flex justify-between"><dt className="text-[#A09080]">Measurements</dt><dd className="text-[#2E2A26] font-medium">{district.measurement_count || 0}</dd></div>
            </dl>
            <Link href={`/regions/${state.slug}`} className="block mt-4 text-xs text-[#6F4E37] font-medium hover:underline">
              ← Back to {state.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

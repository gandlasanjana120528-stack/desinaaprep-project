import { INDIAN_STATES, SAMPLE_MEASUREMENTS, SECTORS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";
import StateSectorView from "@/components/measurements/StateSectorView";

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;

  const state = INDIAN_STATES.find((s) => s.slug === stateSlug);

  if (!state) {
    notFound();
  }

  const stateMeasurements = SAMPLE_MEASUREMENTS.filter((m) =>
    m.states?.includes(state.name)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[#8B7355] mb-8">
        <Link href="/" className="hover:text-[#6F4E37]">
          Home
        </Link>

        <span>/</span>

        <Link href="/regions" className="hover:text-[#6F4E37]">
          Regions
        </Link>

        <span>/</span>

        <span className="text-[#2E2A26] font-medium">
          {state.name}
        </span>
      </div>

      {/* Header */}
      <div className="bg-[#4A3426] text-white rounded-xl p-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">

          <div>
            <span className="text-xs font-medium text-[#B88646] uppercase tracking-wider">
              {state.region}
            </span>

            <h1 className="font-serif text-3xl font-bold mt-1 mb-2">
              {state.name}
            </h1>

            <div className="flex items-center gap-4 text-[#C8B8A2] text-sm">

              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                Capital: {state.capital}
              </span>

              {state.language && (
                <span>
                  Language: {state.language}
                </span>
              )}

            </div>
          </div>

          <div className="text-right">
            <div className="font-serif text-3xl font-bold text-[#B88646]">
              {state.measurement_count || stateMeasurements.length || 0}
            </div>

            <div className="text-xs text-[#C8B8A2]">
              measurements documented
            </div>
          </div>

        </div>
      </div>

      {/* Description */}
      {state.description && (
        <div className="mb-10 max-w-3xl">
          <p className="text-[#2E2A26] leading-relaxed">
            {state.description}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Main Content */}
        <div className="lg:col-span-2">

          {/* Measurements & Sector Table View */}
          <section className="mb-10">

            <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-5">
              Measurements from {state.name}
            </h2>

            <StateSectorView
              stateName={state.name}
              measurements={stateMeasurements}
              sectors={SECTORS}
            />

          </section>

          {/* Districts */}
          {state.districts && state.districts.length > 0 && (

            <section className="mb-10">

              <h2 className="font-serif text-xl font-bold text-[#2E2A26] mb-5">
                Districts
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

                {state.districts.map((district) => (

                  <Link
                    key={district.id}
                    href={`/regions/${state.slug}/${district.slug}`}
                    className="bg-white border border-[#E8DED1] rounded-lg p-3 hover:border-[#6F4E37] hover:shadow-sm transition-all group"
                  >

                    <div className="font-medium text-sm text-[#2E2A26] group-hover:text-[#6F4E37]">
                      {district.name}
                    </div>

                    <div className="text-xs text-[#A09080] mt-1">
                      {district.measurement_count || 0} units
                    </div>

                  </Link>

                ))}

              </div>

            </section>

          )}

        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* State Overview */}
          <div className="bg-white border border-[#E8DED1] rounded-lg p-5">

            <h3 className="font-semibold text-[#2E2A26] mb-4">
              State Overview
            </h3>

            <dl className="space-y-3 text-sm">

              {[
                {
                  label: "Capital",
                  value: state.capital,
                },
                {
                  label: "Region",
                  value: state.region,
                },
                {
                  label: "Language",
                  value: state.language || "—",
                },
                {
                  label: "Districts",
                  value: state.districts?.length || "—",
                },
                {
                  label: "Measurements",
                  value: state.measurement_count || 0,
                },
              ].map(({ label, value }) => (

                <div
                  key={label}
                  className="flex justify-between"
                >

                  <dt className="text-[#A09080]">
                    {label}
                  </dt>

                  <dd className="text-[#2E2A26] font-medium">
                    {value}
                  </dd>

                </div>

              ))}

            </dl>

          </div>

          {/* Sectors */}
          <div className="bg-white border border-[#E8DED1] rounded-lg p-5">

            <h3 className="font-semibold text-[#2E2A26] mb-3 flex items-center gap-2">

              <Building2 className="w-4 h-4 text-[#6F4E37]" />

              Sectors Present

            </h3>

            <div className="flex flex-wrap gap-2">

              {SECTORS.slice(0, 5).map((sector) => (

                <Link
                  key={sector.id}
                  href={`/sectors/${sector.slug}`}
                  className="text-xs px-2.5 py-1 bg-[#FAF7F2] text-[#6F4E37] border border-[#E8DED1] rounded hover:border-[#6F4E37] transition-colors"
                >
                  {sector.name}
                </Link>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
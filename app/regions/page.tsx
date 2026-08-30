import { INDIAN_STATES } from "@/lib/data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import IndiaMap from "@/components/IndiaMap";

const REGIONS = [
  {
    name: "South India",
    states: [
      "Telangana",
      "Andhra Pradesh",
      "Tamil Nadu",
      "Karnataka",
      "Kerala",
    ],
  },
  {
    name: "West India",
    states: ["Maharashtra", "Gujarat", "Rajasthan"],
  },
  {
    name: "North India",
    states: ["Uttar Pradesh", "Punjab"],
  },
  {
    name: "East India",
    states: ["West Bengal", "Odisha"],
  },
];

export const metadata = {
  title: "Regions",
};

export default function RegionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Page heading */}
      <div className="mb-10">
        <h1 className="font-serif text-3xl font-bold text-[#2E2A26]">
          Regions
        </h1>

        <p className="mt-2 text-[#7A6E65]">
          Explore traditional measurement systems by state and district
        </p>
      </div>

      {/* INDIA MAP */}
      <IndiaMap />

      {/* By Region */}
      {REGIONS.map((region) => {
        const regionStates = INDIAN_STATES.filter((s) =>
          region.states.includes(s.name)
        );

        return (
          <section key={region.name} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="font-serif text-xl font-bold text-[#2E2A26]">
                {region.name}
              </h2>

              <div className="flex-1 h-px bg-[#E8DED1]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {regionStates.map((state) => (
                <Link
                  key={state.id}
                  href={`/regions/${state.slug}`}
                  className="group bg-white border border-[#E8DED1] rounded-lg p-5 hover:border-[#6F4E37] hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-[#2E2A26] group-hover:text-[#6F4E37]">
                      {state.name}
                    </h3>

                    <ChevronRight className="w-4 h-4 text-[#A09080] group-hover:text-[#6F4E37]" />
                  </div>

                  <p className="text-xs text-[#A09080] mb-3">
                    Capital: {state.capital}
                  </p>

                  {state.language && (
                    <span className="text-xs bg-[#FAF7F2] text-[#6F4E37] px-2 py-0.5 rounded border border-[#E8DED1]">
                      {state.language}
                    </span>
                  )}

                  <div className="mt-3 pt-3 border-t border-[#F0EAE0]">
                    <span className="text-xs text-[#7A6E65]">
                      {state.measurement_count || 0} measurements documented
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* All States */}
      <section className="mt-8">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="font-serif text-xl font-bold text-[#2E2A26]">
            All States
          </h2>

          <div className="flex-1 h-px bg-[#E8DED1]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {INDIAN_STATES.map((state) => (
            <Link
              key={state.id}
              href={`/regions/${state.slug}`}
              className="bg-white border border-[#E8DED1] rounded-lg p-3 text-center hover:border-[#B88646] hover:shadow-sm transition-all group"
            >
              <div className="font-medium text-sm text-[#2E2A26] group-hover:text-[#6F4E37]">
                {state.name}
              </div>

              <div className="text-xs text-[#A09080] mt-1">
                {state.measurement_count || 0} units
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
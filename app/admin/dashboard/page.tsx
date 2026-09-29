import { BookOpen, Map, Layers, Image, BookMarked, Users, TrendingUp, Plus } from "lucide-react";
import Link from "next/link";
import { SAMPLE_MEASUREMENTS, INDIAN_STATES, SECTORS } from "@/lib/data";

const STATS = [
  { label: "Measurements", value: "6", total: "500+", icon: BookOpen, href: "/admin/measurements", color: "bg-blue-50 text-blue-700" },
  { label: "States", value: String(INDIAN_STATES.length), total: "28 states", icon: Map, href: "/admin/regions", color: "bg-green-50 text-green-700" },
  { label: "Sectors", value: String(SECTORS.length), total: "All sectors", icon: Layers, href: "/admin/sectors", color: "bg-purple-50 text-purple-700" },
  { label: "Infographics", value: "6", total: "planned", icon: Image, href: "/admin/infographics", color: "bg-orange-50 text-orange-700" },
  { label: "References", value: "6", total: "sources", icon: BookMarked, href: "/admin/references", color: "bg-red-50 text-red-700" },
  { label: "Users", value: "1", total: "admins", icon: Users, href: "/admin/users", color: "bg-gray-50 text-gray-700" }
];

const QUICK_ACTIONS = [
  { label: "Add Measurement", href: "/admin/measurements?action=new", icon: BookOpen },
  { label: "Add Region", href: "/admin/regions?action=new", icon: Map },
  { label: "Add Sector", href: "/admin/sectors?action=new", icon: Layers },
  { label: "Add Infographic", href: "/admin/infographics?action=new", icon: Image },
  { label: "Add Reference", href: "/admin/references?action=new", icon: BookMarked },
  { label: "Add User", href: "/admin/users?action=new", icon: Users }
];

export default function AdminDashboardPage() {
  const recent = SAMPLE_MEASUREMENTS.slice(0, 5);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[#2E2A26]">Dashboard Overview</h2>
        <p className="text-sm text-[#7A6E65]">Manage DESINAAP content and data</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {STATS.map(({ label, value, total, icon: Icon, href, color }) => (
          <Link key={href} href={href}
            className="bg-white border border-[#E8DED1] rounded-lg p-4 hover:border-[#6F4E37] hover:shadow-sm transition-all group"
          >
            <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center mb-3`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="text-2xl font-bold text-[#2E2A26] mb-0.5">{value}</div>
            <div className="text-xs font-medium text-[#2E2A26]">{label}</div>
            <div className="text-xs text-[#A09080]">{total}</div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Measurements */}
        <div className="lg:col-span-2 bg-white border border-[#E8DED1] rounded-lg">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8DED1]">
            <h3 className="font-semibold text-[#2E2A26]">Recent Measurements</h3>
            <Link href="/admin/measurements" className="text-xs text-[#6F4E37] font-medium hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-[#F0EAE0]">
            {recent.map((m) => (
              <div key={m.id} className="flex items-center justify-between px-5 py-3">
                <div>
                  <span className="text-sm font-medium text-[#2E2A26]">{m.name_english}</span>
                  <span className="text-xs text-[#A09080] ml-2">{m.name_sanskrit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#A09080]">{m.category}</span>
                  <Link href={`/admin/measurements`} className="text-xs text-[#6F4E37] hover:underline">Edit</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-[#E8DED1] rounded-lg">
          <div className="px-5 py-4 border-b border-[#E8DED1]">
            <h3 className="font-semibold text-[#2E2A26]">Quick Actions</h3>
          </div>
          <div className="p-4 space-y-2">
            {QUICK_ACTIONS.map(({ label, href, icon: Icon }) => (
              <Link key={href} href={href}
                className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-[#2E2A26] hover:bg-[#FAF7F2] rounded-lg transition-colors group"
              >
                <Icon className="w-4 h-4 text-[#6F4E37]" />
                {label}
                <Plus className="w-3 h-3 ml-auto text-[#A09080] group-hover:text-[#6F4E37]" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Activity / State Coverage */}
      <div className="mt-6 bg-white border border-[#E8DED1] rounded-lg">
        <div className="px-5 py-4 border-b border-[#E8DED1]">
          <h3 className="font-semibold text-[#2E2A26]">State Coverage</h3>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {INDIAN_STATES.map((s) => (
              <div key={s.id} className="text-center">
                <div className="text-xs font-medium text-[#2E2A26] mb-1">{s.name}</div>
                <div className="w-full bg-[#F0EAE0] rounded-full h-1.5 mb-1">
                  <div className="bg-[#6F4E37] h-1.5 rounded-full" style={{ width: `${Math.min(100, ((s.measurement_count || 0) / 65) * 100)}%` }} />
                </div>
                <div className="text-xs text-[#A09080]">{s.measurement_count || 0}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

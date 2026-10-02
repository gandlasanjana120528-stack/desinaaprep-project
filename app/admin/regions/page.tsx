"use client";
import { useState } from "react";
import { INDIAN_STATES } from "@/lib/data";
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";

export default function AdminRegionsPage() {
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = INDIAN_STATES.filter((s) =>
    !query || s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#2E2A26]">Regions / States</h2>
          <p className="text-sm text-[#7A6E65]">{filtered.length} states</p>
        </div>
        <button onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426] transition-colors"
        >
          <Plus className="w-4 h-4" /> Add State
        </button>
      </div>
      <div className="relative mb-5 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09080]" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search states…"
          className="w-full pl-10 pr-4 py-2 bg-white border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]"
        />
      </div>
      <div className="bg-white border border-[#E8DED1] rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAF7F2] border-b border-[#E8DED1]">
            <tr>
              {["State", "Capital", "Region", "Language", "Measurements", "Actions"].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#7A6E65]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0EAE0]">
            {filtered.map((s) => (
              <tr key={s.id} className="hover:bg-[#FAF7F2]">
                <td className="px-4 py-3 font-medium text-[#2E2A26]">{s.name}</td>
                <td className="px-4 py-3 text-[#7A6E65]">{s.capital}</td>
                <td className="px-4 py-3 text-[#7A6E65]">{s.region}</td>
                <td className="px-4 py-3 text-[#7A6E65]">{s.language || "—"}</td>
                <td className="px-4 py-3 text-[#7A6E65]">{s.measurement_count || 0}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link href={`/regions/${s.slug}`} className="p-1.5 text-[#A09080] hover:text-[#6F4E37]"><Eye className="w-3.5 h-3.5" /></Link>
                    <button className="p-1.5 text-[#A09080] hover:text-[#6F4E37]"><Edit className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 text-[#A09080] hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DED1]">
              <h3 className="font-semibold text-[#2E2A26]">Add New State</h3>
              <button onClick={() => setShowForm(false)} className="text-[#A09080]">✕</button>
            </div>
            <div className="p-6 space-y-4">
              {[["State Name *", "name", "e.g. Telangana"], ["Capital *", "capital", "e.g. Hyderabad"], ["Region", "region", "e.g. South India"], ["Primary Language", "language", "e.g. Telugu"], ["Slug *", "slug", "e.g. telangana"]].map(([label, name, placeholder]) => (
                <div key={name}>
                  <label className="block text-xs font-medium text-[#7A6E65] mb-1">{label}</label>
                  <input placeholder={placeholder} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" />
                </div>
              ))}
              <div>
                <label className="block text-xs font-medium text-[#7A6E65] mb-1">Description</label>
                <textarea rows={3} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37] resize-none" />
              </div>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426]">Save State</button>
                <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-[#E8DED1] text-[#7A6E65] rounded-lg text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

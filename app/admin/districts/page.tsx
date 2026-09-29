"use client";
import { useState } from "react";
import { INDIAN_STATES } from "@/lib/data";
import { Search, Plus, Edit, Trash2 } from "lucide-react";

const ALL_DISTRICTS = INDIAN_STATES.flatMap((s) =>
  (s.districts || []).map((d) => ({ ...d, state_name: s.name }))
);

export default function AdminDistrictsPage() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filtered = ALL_DISTRICTS.filter((d) => {
    const matchQ = !query || d.name.toLowerCase().includes(query.toLowerCase());
    const matchS = !stateFilter || d.state_name === stateFilter;
    return matchQ && matchS;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h2 className="text-xl font-bold text-[#2E2A26]">Districts</h2><p className="text-sm text-[#7A6E65]">{filtered.length} districts</p></div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426]">
          <Plus className="w-4 h-4" /> Add District
        </button>
      </div>
      <div className="flex gap-3 mb-5">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09080]" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search districts…"
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]"
          />
        </div>
        <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}
          className="px-3 py-2 bg-white border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]"
        >
          <option value="">All states</option>
          {INDIAN_STATES.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
        </select>
      </div>
      <div className="bg-white border border-[#E8DED1] rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAF7F2] border-b border-[#E8DED1]">
            <tr>{["District", "State", "Measurements", "Actions"].map((h) => <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#7A6E65]">{h}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-[#F0EAE0]">
            {filtered.map((d) => (
              <tr key={d.id} className="hover:bg-[#FAF7F2]">
                <td className="px-4 py-3 font-medium text-[#2E2A26]">{d.name}</td>
                <td className="px-4 py-3 text-[#7A6E65]">{d.state_name}</td>
                <td className="px-4 py-3 text-[#7A6E65]">{d.measurement_count || 0}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
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
          <div className="bg-white rounded-xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DED1]">
              <h3 className="font-semibold text-[#2E2A26]">Add New District</h3>
              <button onClick={() => setShowForm(false)} className="text-[#A09080]">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">District Name *</label><input placeholder="e.g. Warangal" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">State *</label>
                <select className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]">
                  <option value="">Select state</option>
                  {INDIAN_STATES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Slug</label><input placeholder="e.g. warangal" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium">Save District</button>
                <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-[#E8DED1] text-[#7A6E65] rounded-lg text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

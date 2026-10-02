"use client";
import { useState } from "react";
import { SAMPLE_REFERENCES } from "@/lib/data";
import { Search, Plus, Edit, Trash2 } from "lucide-react";

export default function AdminReferencesPage() {
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const filtered = SAMPLE_REFERENCES.filter((r) => !query || r.title.toLowerCase().includes(query.toLowerCase()));
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h2 className="text-xl font-bold text-[#2E2A26]">References</h2><p className="text-sm text-[#7A6E65]">{filtered.length} sources</p></div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426]">
          <Plus className="w-4 h-4" /> Add Reference
        </button>
      </div>
      <div className="relative mb-5 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09080]" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search references…" className="w-full pl-10 pr-4 py-2 bg-white border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" />
      </div>
      <div className="space-y-3">
        {filtered.map((r) => (
          <div key={r.id} className="bg-white border border-[#E8DED1] rounded-lg p-4 flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">{r.type.replace("_", " ")}</span>
                {r.year && <span className="text-xs text-[#A09080]">{r.year < 0 ? `${Math.abs(r.year)} BCE` : r.year}</span>}
              </div>
              <h3 className="font-medium text-[#2E2A26]">{r.title}</h3>
              {r.author && <p className="text-xs text-[#7A6E65] mt-0.5">— {r.author}</p>}
            </div>
            <div className="flex gap-1 flex-shrink-0">
              <button className="p-1.5 text-[#A09080] hover:text-[#6F4E37]"><Edit className="w-3.5 h-3.5" /></button>
              <button className="p-1.5 text-[#A09080] hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DED1]">
              <h3 className="font-semibold text-[#2E2A26]">Add Reference</h3>
              <button onClick={() => setShowForm(false)} className="text-[#A09080]">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Title *</label><input placeholder="Reference title" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Author</label><input placeholder="Author name" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Type *</label>
                  <select className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]">
                    {["book","research_paper","ancient_text","government_source","journal","website","other"].map((t) => <option key={t} value={t}>{t.replace("_"," ")}</option>)}
                  </select>
                </div>
                <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Year</label><input type="number" placeholder="e.g. 1947" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              </div>
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Description</label><textarea rows={3} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37] resize-none" /></div>
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">URL</label><input placeholder="https://..." className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium">Save Reference</button>
                <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-[#E8DED1] text-[#7A6E65] rounded-lg text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

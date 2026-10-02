"use client";
import { useState } from "react";
import { SECTORS } from "@/lib/data";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import Link from "next/link";

export default function AdminSectorsPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h2 className="text-xl font-bold text-[#2E2A26]">Sectors</h2><p className="text-sm text-[#7A6E65]">{SECTORS.length} sectors</p></div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426]">
          <Plus className="w-4 h-4" /> Add Sector
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {SECTORS.map((s) => (
          <div key={s.id} className="bg-white border border-[#E8DED1] rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-[#2E2A26]">{s.name}</h3>
                <p className="text-xs text-[#A09080]">{s.measurement_count} measurements</p>
              </div>
              <div className="flex gap-1">
                <Link href={`/sectors/${s.slug}`} className="p-1.5 text-[#A09080] hover:text-[#6F4E37]"><Eye className="w-3.5 h-3.5" /></Link>
                <button className="p-1.5 text-[#A09080] hover:text-[#6F4E37]"><Edit className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 text-[#A09080] hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
              </div>
            </div>
            <p className="text-sm text-[#7A6E65]">{s.description}</p>
          </div>
        ))}
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DED1]">
              <h3 className="font-semibold text-[#2E2A26]">Add New Sector</h3>
              <button onClick={() => setShowForm(false)} className="text-[#A09080]">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Sector Name *</label><input placeholder="e.g. Agriculture" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Slug *</label><input placeholder="e.g. agriculture" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Description</label><textarea rows={2} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37] resize-none" /></div>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium">Save Sector</button>
                <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-[#E8DED1] text-[#7A6E65] rounded-lg text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

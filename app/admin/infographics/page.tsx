"use client";
import { useState } from "react";
import { SAMPLE_INFOGRAPHICS } from "@/lib/data";
import { Plus, Edit, Trash2, Upload } from "lucide-react";

export default function AdminInfographicsPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h2 className="text-xl font-bold text-[#2E2A26]">Infographics</h2><p className="text-sm text-[#7A6E65]">{SAMPLE_INFOGRAPHICS.length} items</p></div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426]">
          <Plus className="w-4 h-4" /> Add Infographic
        </button>
      </div>
      <div className="bg-white border border-[#E8DED1] rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAF7F2] border-b border-[#E8DED1]">
            <tr>{["Title", "Category", "State/Sector", "Image", "Actions"].map((h) => <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#7A6E65]">{h}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-[#F0EAE0]">
            {SAMPLE_INFOGRAPHICS.map((i) => (
              <tr key={i.id} className="hover:bg-[#FAF7F2]">
                <td className="px-4 py-3 font-medium text-[#2E2A26]">{i.title}</td>
                <td className="px-4 py-3"><span className="text-xs bg-[#FAF7F2] text-[#6F4E37] px-2 py-0.5 rounded border border-[#E8DED1]">{i.category}</span></td>
                <td className="px-4 py-3 text-[#7A6E65] text-xs">{i.state || i.sector || "—"}</td>
                <td className="px-4 py-3"><span className="text-xs text-[#A09080]">{i.image_url ? "Uploaded" : "Pending"}</span></td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
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
              <h3 className="font-semibold text-[#2E2A26]">Add Infographic</h3>
              <button onClick={() => setShowForm(false)} className="text-[#A09080]">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Title *</label><input placeholder="Infographic title" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]">
                  {["length","weight","volume","area","time","currency"].map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#7A6E65] mb-1">Upload Image</label>
                <div className="border-2 border-dashed border-[#E8DED1] rounded-lg p-8 text-center cursor-pointer hover:border-[#6F4E37] transition-colors">
                  <Upload className="w-8 h-8 text-[#A09080] mx-auto mb-2" />
                  <p className="text-sm text-[#7A6E65]">Click to upload or drag & drop</p>
                  <p className="text-xs text-[#A09080]">PNG, JPG, SVG up to 10MB</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium">Save</button>
                <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-[#E8DED1] text-[#7A6E65] rounded-lg text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

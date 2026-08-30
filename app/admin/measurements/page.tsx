"use client";
import { useState, useEffect } from "react";
import { CATEGORIES, SECTORS, getCategoryColor } from "@/lib/data";
import { Search, Plus, Edit, Trash2, Eye, Filter } from "lucide-react";
import Link from "next/link";
import { db, auth } from "@/lib/firebase/client";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { Measurement } from "@/types";

const initialForm = {
  name_english: "",
  name_sanskrit: "",
  name_telugu: "",
  name_hindi: "",
  meaning: "",
  category: "",
  sector: "",
  modern_equivalent: "",
  conversion_formula: "",
  historical_context: "",
};

export default function AdminMeasurementsPage() {
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState(initialForm);
  const [isSaving, setIsSaving] = useState(false);

  async function fetchMeasurements() {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "measurements"));
      const data: Measurement[] = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as Measurement);
      });
      setMeasurements(data);
    } catch (error) {
      console.error("Error fetching measurements:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMeasurements();
  }, []);

  const filtered = measurements.filter((m) => {
    const matchQ = !query || m.name_english.toLowerCase().includes(query.toLowerCase()) ||
      (m.name_sanskrit && m.name_sanskrit.includes(query));
    const matchCat = !category || m.category === category;
    return matchQ && matchCat;
  });

  const handleSave = async () => {
    if (!formData.name_english || !formData.category || !formData.sector) {
      alert("Please fill in the required fields: English Name, Category, and Sector");
      return;
    }
    setIsSaving(true);
    try {
      // Create a URL-friendly slug
      const slug = formData.name_english.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      
      const newMeasurement = {
        ...formData,
        slug,
        id: slug, // Using slug as ID for simplicity
        created_at: new Date().toISOString(),
      };

      await setDoc(doc(db, "measurements", slug), newMeasurement);
      
      setShowForm(false);
      setFormData(initialForm);
      fetchMeasurements(); // Refresh list to show new data
    } catch (error) {
      console.error("Error saving measurement:", error);
      alert("Failed to save. Please check your connection.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (confirm("Are you sure you want to delete this measurement?")) {
      try {
        await deleteDoc(doc(db, "measurements", slug));
        fetchMeasurements(); // Refresh list after deletion
      } catch (error) {
        console.error("Error deleting:", error);
        alert("Failed to delete.");
      }
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#2E2A26]">Measurements</h2>
          <p className="text-sm text-[#7A6E65]">{filtered.length} records</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => { import('firebase/auth').then(({ signOut }) => signOut(auth)) }}
            className="px-4 py-2 text-[#7A6E65] text-sm hover:text-[#2E2A26] transition-colors"
          >
            Log out
          </button>
          <button onClick={() => setShowForm(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426] transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Measurement
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A09080]" />
          <input value={query} onChange={(e) => setQuery(e.target.value)}
            placeholder="Search measurements…"
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]"
          />
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 bg-white border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]"
        >
          <option value="">All categories</option>
          {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#E8DED1] rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAF7F2] border-b border-[#E8DED1]">
            <tr>
              {["English Name", "Sanskrit", "Category", "Sector", "States", "Actions"].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#7A6E65]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0EAE0]">
            {filtered.map((m) => (
              <tr key={m.id} className="hover:bg-[#FAF7F2]">
                <td className="px-4 py-3 font-medium text-[#2E2A26]">{m.name_english}</td>
                <td className="px-4 py-3 text-[#7A6E65]">{m.name_sanskrit || "—"}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(m.category)}`}>{m.category}</span>
                </td>
                <td className="px-4 py-3 text-[#7A6E65] capitalize">{m.sector}</td>
                <td className="px-4 py-3 text-[#7A6E65] text-xs">{m.states?.slice(0, 2).join(", ")}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Link href={`/measurements/${m.slug}`} className="p-1.5 text-[#A09080] hover:text-[#6F4E37] rounded transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                    <button className="p-1.5 text-[#A09080] hover:text-[#6F4E37] rounded transition-colors" title="Edit functionality coming soon">
                      <Edit className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => handleDelete(m.slug)} className="p-1.5 text-[#A09080] hover:text-red-600 rounded transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && !loading && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-[#7A6E65]">No measurements found.</td>
              </tr>
            )}
            {loading && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-[#7A6E65]">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DED1]">
              <h3 className="font-semibold text-[#2E2A26]">Add New Measurement</h3>
              <button onClick={() => setShowForm(false)} className="text-[#A09080] hover:text-[#2E2A26]">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#7A6E65] mb-1">English Name *</label>
                  <input placeholder="e.g. Angula" value={formData.name_english} onChange={e => setFormData({...formData, name_english: e.target.value})} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#7A6E65] mb-1">Sanskrit Name</label>
                  <input placeholder="e.g. अंगुल" value={formData.name_sanskrit} onChange={e => setFormData({...formData, name_sanskrit: e.target.value})} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#7A6E65] mb-1">Telugu Name</label>
                  <input placeholder="e.g. అంగుళం" value={formData.name_telugu} onChange={e => setFormData({...formData, name_telugu: e.target.value})} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#7A6E65] mb-1">Hindi Name</label>
                  <input placeholder="e.g. अंगुल" value={formData.name_hindi} onChange={e => setFormData({...formData, name_hindi: e.target.value})} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#7A6E65] mb-1">Meaning</label>
                <textarea rows={2} placeholder="Brief description of the unit" value={formData.meaning} onChange={e => setFormData({...formData, meaning: e.target.value})} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37] resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#7A6E65] mb-1">Category *</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]">
                    <option value="">Select category</option>
                    {CATEGORIES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#7A6E65] mb-1">Sector *</label>
                  <select value={formData.sector} onChange={e => setFormData({...formData, sector: e.target.value})} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]">
                    <option value="">Select sector</option>
                    {SECTORS.map((s) => <option key={s.id} value={s.slug}>{s.name}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#7A6E65] mb-1">Modern Equivalent</label>
                <input placeholder="e.g. ~1.763 cm" value={formData.modern_equivalent} onChange={e => setFormData({...formData, modern_equivalent: e.target.value})} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#7A6E65] mb-1">Conversion Formula</label>
                <input placeholder="e.g. 1 Angula ≈ 1.763 cm; 24 Angulas = 1 Hasta" value={formData.conversion_formula} onChange={e => setFormData({...formData, conversion_formula: e.target.value})} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#7A6E65] mb-1">Historical Context</label>
                <textarea rows={3} placeholder="Historical background of this measurement…" value={formData.historical_context} onChange={e => setFormData({...formData, historical_context: e.target.value})} className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37] resize-none" />
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleSave} disabled={isSaving} className="flex-1 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426] disabled:opacity-50 transition-colors">
                  {isSaving ? "Saving..." : "Save Measurement"}
                </button>
                <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-[#E8DED1] text-[#7A6E65] rounded-lg text-sm hover:border-[#6F4E37] transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

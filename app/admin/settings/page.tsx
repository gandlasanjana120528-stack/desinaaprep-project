"use client";
import { useState } from "react";
import { Save, Database, Globe, Bell, Shield } from "lucide-react";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="max-w-3xl">
      <div className="mb-6"><h2 className="text-xl font-bold text-[#2E2A26]">Settings</h2><p className="text-sm text-[#7A6E65]">Manage application configuration</p></div>

      <div className="space-y-6">
        {/* General */}
        <div className="bg-white border border-[#E8DED1] rounded-lg">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-[#E8DED1]">
            <Globe className="w-4 h-4 text-[#6F4E37]" /><h3 className="font-semibold text-[#2E2A26]">General</h3>
          </div>
          <div className="p-5 space-y-4">
            <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Site Name</label><input defaultValue="DESINAAP" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
            <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Site Description</label><textarea rows={2} defaultValue="Traditional Measurements Re-Coded" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37] resize-none" /></div>
            <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Contact Email</label><input type="email" defaultValue="contact@desinaap.in" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
          </div>
        </div>

        {/* Database */}
        <div className="bg-white border border-[#E8DED1] rounded-lg">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-[#E8DED1]">
            <Database className="w-4 h-4 text-[#6F4E37]" /><h3 className="font-semibold text-[#2E2A26]">Database (Supabase)</h3>
          </div>
          <div className="p-5 space-y-4">
            <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Supabase Project URL</label><input placeholder="https://xxx.supabase.co" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm font-mono focus:outline-none focus:border-[#6F4E37]" /></div>
            <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Supabase Anon Key</label><input type="password" placeholder="eyJ…" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm font-mono focus:outline-none focus:border-[#6F4E37]" /></div>
            <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg">
              <span className="text-xs text-green-700 font-medium">Connection status</span>
              <span className="text-xs text-green-700">● Not connected (configure above)</span>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white border border-[#E8DED1] rounded-lg">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-[#E8DED1]">
            <Bell className="w-4 h-4 text-[#6F4E37]" /><h3 className="font-semibold text-[#2E2A26]">Notifications</h3>
          </div>
          <div className="p-5 space-y-3">
            {[
              ["Email on new measurement added", true],
              ["Email on user signup", false],
              ["Weekly digest report", true]
            ].map(([label, def]) => (
              <div key={String(label)} className="flex items-center justify-between">
                <span className="text-sm text-[#2E2A26]">{String(label)}</span>
                <button className={`w-10 h-5 rounded-full transition-colors ${def ? "bg-[#6F4E37]" : "bg-[#E8DED1]"}`}>
                  <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform mx-0.5 ${def ? "translate-x-5" : ""}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white border border-[#E8DED1] rounded-lg">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-[#E8DED1]">
            <Shield className="w-4 h-4 text-[#6F4E37]" /><h3 className="font-semibold text-[#2E2A26]">Security</h3>
          </div>
          <div className="p-5 space-y-3">
            {[
              ["Require email confirmation for new users", true],
              ["Allow public read access", true],
              ["Enable audit logging", false]
            ].map(([label, def]) => (
              <div key={String(label)} className="flex items-center justify-between">
                <span className="text-sm text-[#2E2A26]">{String(label)}</span>
                <button className={`w-10 h-5 rounded-full transition-colors ${def ? "bg-[#6F4E37]" : "bg-[#E8DED1]"}`}>
                  <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform mx-0.5 ${def ? "translate-x-5" : ""}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleSave}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${saved ? "bg-green-600 text-white" : "bg-[#6F4E37] text-white hover:bg-[#4A3426]"}`}
        >
          <Save className="w-4 h-4" />
          {saved ? "Saved!" : "Save Settings"}
        </button>
      </div>
    </div>
  );
}

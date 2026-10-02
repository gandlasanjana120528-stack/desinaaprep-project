"use client";
import { useState } from "react";
import { Plus, Edit, Trash2, Shield } from "lucide-react";

const MOCK_USERS = [
  { id: "1", email: "admin@desinaap.in", full_name: "Admin User", role: "admin", created_at: "2024-01-01", last_sign_in: "2024-12-01" },
  { id: "2", email: "editor@desinaap.in", full_name: "Editor One", role: "editor", created_at: "2024-03-15", last_sign_in: "2024-11-28" }
];

const ROLE_COLORS: Record<string, string> = {
  admin: "bg-red-100 text-red-800",
  editor: "bg-blue-100 text-blue-800",
  viewer: "bg-gray-100 text-gray-800"
};

export default function AdminUsersPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><h2 className="text-xl font-bold text-[#2E2A26]">Users</h2><p className="text-sm text-[#7A6E65]">{MOCK_USERS.length} users</p></div>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426]">
          <Plus className="w-4 h-4" /> Invite User
        </button>
      </div>
      <div className="bg-white border border-[#E8DED1] rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#FAF7F2] border-b border-[#E8DED1]">
            <tr>{["User", "Email", "Role", "Created", "Last Sign In", "Actions"].map((h) => <th key={h} className="text-left px-4 py-3 text-xs font-medium text-[#7A6E65]">{h}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-[#F0EAE0]">
            {MOCK_USERS.map((u) => (
              <tr key={u.id} className="hover:bg-[#FAF7F2]">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#6F4E37] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {u.full_name?.charAt(0)}
                    </div>
                    <span className="font-medium text-[#2E2A26]">{u.full_name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[#7A6E65]">{u.email}</td>
                <td className="px-4 py-3"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${ROLE_COLORS[u.role]}`}>{u.role}</span></td>
                <td className="px-4 py-3 text-[#7A6E65] text-xs">{u.created_at}</td>
                <td className="px-4 py-3 text-[#7A6E65] text-xs">{u.last_sign_in}</td>
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
      <div className="mt-6 bg-[#FAF7F2] border border-[#E8DED1] rounded-lg p-5">
        <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-[#6F4E37]" /><h3 className="font-semibold text-[#2E2A26] text-sm">Role Permissions</h3></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#7A6E65]">
          <div><div className="font-medium text-[#2E2A26] mb-1">Admin</div><ul className="space-y-0.5"><li>• Full CRUD on all content</li><li>• Manage users</li><li>• Access all settings</li></ul></div>
          <div><div className="font-medium text-[#2E2A26] mb-1">Editor</div><ul className="space-y-0.5"><li>• Create & edit content</li><li>• Cannot delete records</li><li>• Cannot manage users</li></ul></div>
          <div><div className="font-medium text-[#2E2A26] mb-1">Viewer</div><ul className="space-y-0.5"><li>• Read-only access</li><li>• No edit permissions</li><li>• View reports</li></ul></div>
        </div>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DED1]">
              <h3 className="font-semibold text-[#2E2A26]">Invite User</h3>
              <button onClick={() => setShowForm(false)} className="text-[#A09080]">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Full Name</label><input placeholder="Full name" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Email *</label><input type="email" placeholder="email@example.com" className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]" /></div>
              <div><label className="block text-xs font-medium text-[#7A6E65] mb-1">Role *</label>
                <select className="w-full px-3 py-2 border border-[#E8DED1] rounded-lg text-sm focus:outline-none focus:border-[#6F4E37]">
                  <option value="viewer">Viewer</option><option value="editor">Editor</option><option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium">Send Invite</button>
                <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-[#E8DED1] text-[#7A6E65] rounded-lg text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

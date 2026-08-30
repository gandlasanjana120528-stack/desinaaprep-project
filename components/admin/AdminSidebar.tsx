"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, BookOpen, Map, Building2, Layers,
  Image, BookMarked, Users, Settings, Menu, X,
  ChevronRight, LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

const ADMIN_NAV = [
  { label: "Dashboard",    href: "/admin/dashboard",    icon: LayoutDashboard },
  { label: "Measurements", href: "/admin/measurements", icon: BookOpen },
  { label: "Regions",      href: "/admin/regions",      icon: Map },
  { label: "Districts",    href: "/admin/districts",    icon: Building2 },
  { label: "Sectors",      href: "/admin/sectors",      icon: Layers },
  { label: "Infographics", href: "/admin/infographics", icon: Image },
  { label: "References",   href: "/admin/references",   icon: BookMarked },
  { label: "Users",        href: "/admin/users",        icon: Users },
  { label: "Settings",     href: "/admin/settings",     icon: Settings }
];

export default function AdminSidebar({ userEmail: initialEmail }: { userEmail: string }) {
  const [open, setOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(initialEmail);
  const pathname = usePathname();
  const router = useRouter();

  // Fetch logged-in user email on client (safe even without Supabase configured)
  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl || supabaseUrl === "your_supabase_project_url") return;
    import("@/supabase/client").then(({ createClient }) => {
      createClient()
        .auth.getUser()
        .then(({ data }: any) => {
          if (data?.user?.email) setUserEmail(data.user.email);
        });
    });
  }, []);

  async function handleLogout() {
    const { createClient } = await import("@/supabase/client");
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-[#4A3426] text-white rounded-lg shadow"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-4 h-4" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-60 bg-[#4A3426] flex flex-col transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#B88646] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="font-bold text-sm text-white">DESINAAP Admin</span>
          </Link>
          <button className="lg:hidden text-white/60 hover:text-white" onClick={() => setOpen(false)}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {ADMIN_NAV.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                pathname === href
                  ? "bg-[#B88646] text-white"
                  : "text-[#C8B8A2] hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          ))}
        </nav>

        {/* User + logout */}
        <div className="px-4 py-4 border-t border-white/10 space-y-2">
          {userEmail && (
            <div className="flex items-center gap-2 px-1 mb-2">
              <div className="w-7 h-7 bg-[#B88646] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {userEmail.charAt(0).toUpperCase()}
              </div>
              <span className="text-xs text-[#C8B8A2] truncate">{userEmail}</span>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-[#C8B8A2] hover:bg-white/10 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-1 text-xs text-[#A09080] hover:text-white transition-colors"
          >
            <ChevronRight className="w-3 h-3 rotate-180" />
            Back to public site
          </Link>
        </div>
      </aside>
    </>
  );
}

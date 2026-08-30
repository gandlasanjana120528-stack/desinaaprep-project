"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Measurements", href: "/measurements" },
  { label: "Regions", href: "/regions" },
  {
    label: "Sectors",
    href: "/sectors",
    children: [
      { label: "Agriculture", href: "/sectors/agriculture" },
      { label: "Trade & Commerce", href: "/sectors/trade-commerce" },
      { label: "Architecture", href: "/sectors/architecture" },
      { label: "Medicine", href: "/sectors/medicine" },
      { label: "Textile & Handloom", href: "/sectors/textile-handloom" },
      { label: "Currency & Money", href: "/sectors/currency-money" },
      { label: "Household", href: "/sectors/household" },
      { label: "Storage & Transport", href: "/sectors/storage-transport" }
    ]
  },
  { label: "Infographics", href: "/infographics" },
  { label: "References", href: "/references" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8DED1] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#6F4E37] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <div>
              <span className="font-bold text-[#4A3426] text-lg tracking-tight">DESINAAP</span>
              <span className="hidden sm:block text-xs text-[#7A6E65] leading-none">Traditional Measurements Re-Coded</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative group"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors",
                    pathname.startsWith(link.href) && link.href !== "/"
                      ? "text-[#6F4E37] bg-[#FAF7F2]"
                      : "text-[#2E2A26] hover:text-[#6F4E37] hover:bg-[#FAF7F2]"
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-[#E8DED1] rounded-lg shadow-lg py-1 z-50">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href}
                        className="block px-4 py-2 text-sm text-[#2E2A26] hover:bg-[#FAF7F2] hover:text-[#6F4E37]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link href="/measurements" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#6F4E37] border border-[#E8DED1] rounded hover:bg-[#FAF7F2] transition-colors">
              <Search className="w-3.5 h-3.5" />
              <span>Search</span>
            </Link>
            <Link href="/admin/dashboard" className="hidden sm:block px-3 py-1.5 text-sm bg-[#6F4E37] text-white rounded hover:bg-[#4A3426] transition-colors">
              Admin
            </Link>
            <button className="lg:hidden p-2 rounded text-[#2E2A26]" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8DED1]">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link href={link.href} onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-[#2E2A26] hover:text-[#6F4E37] hover:bg-[#FAF7F2] rounded"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                        className="block px-3 py-1.5 text-xs text-[#7A6E65] hover:text-[#6F4E37]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-[#E8DED1]">
              <Link href="/admin/dashboard" onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#6F4E37]"
              >
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

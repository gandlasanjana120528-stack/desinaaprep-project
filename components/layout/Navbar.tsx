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
  const [showLogoModal, setShowLogoModal] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8DED1] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <button
            type="button"
            onClick={() => setShowLogoModal(true)}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer py-1"
            title="Click to view full DESINAAP branding"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-[#E8DED1] group-hover:border-[#6F4E37] shadow-sm transition-all flex-shrink-0 bg-white">
              <img
                src="/assets/logo-mark.jpg"
                alt="DESINAAP Logo Mark"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div>
              <span className="font-serif font-bold text-[#4A3426] text-xl sm:text-2xl tracking-tight leading-none block group-hover:text-[#6F4E37] transition-colors">
                DESINAAP
              </span>
              <span className="hidden sm:block text-[11px] text-[#7A6E65] leading-tight font-medium mt-0.5">
                Traditional Measurements Re-Coded
              </span>
            </div>
          </button>

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

      {/* Full Branding Modal */}
      {showLogoModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowLogoModal(false)}
        >
          <div
            className="bg-[#FAF7F2] border border-[#E8DED1] rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-center animate-in zoom-in-95 duration-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLogoModal(false)}
              className="absolute top-4 right-4 p-2 text-[#7A6E65] hover:text-[#2E2A26] hover:bg-[#E8DED1]/50 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="my-2 p-3 bg-white border border-[#E8DED1] rounded-xl shadow-inner max-w-xs mx-auto">
              <img
                src="/assets/logo-full.jpg"
                alt="DESINAAP Full Branding - Traditional Measurements Re-Coded"
                className="w-full h-auto rounded-lg object-contain shadow-sm"
              />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#4A3426] mt-4 mb-1">
              DESINAAP
            </h3>
            <p className="text-xs font-semibold text-[#B88646] uppercase tracking-wider mb-3">
              Traditional Measurements Re-Coded
            </p>
            <p className="text-xs text-[#7A6E65] leading-relaxed max-w-xs mx-auto mb-6">
              A digital platform for documenting, preserving, and exploring India&apos;s indigenous measurement systems & metrological heritage.
            </p>

            <div className="flex items-center justify-center gap-3">
              <Link
                href="/"
                onClick={() => setShowLogoModal(false)}
                className="px-5 py-2 bg-[#6F4E37] hover:bg-[#4A3426] text-white text-xs font-semibold rounded-lg shadow transition-colors"
              >
                Go to Home
              </Link>
              <button
                onClick={() => setShowLogoModal(false)}
                className="px-5 py-2 border border-[#E8DED1] hover:bg-[#E8DED1]/40 text-[#2E2A26] text-xs font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

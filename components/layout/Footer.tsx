import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#4A3426] text-[#E8DED1] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group inline-flex">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#B88646]/40 shadow-sm flex-shrink-0 bg-white">
                <img
                  src="/assets/logo-mark.jpg"
                  alt="DESINAAP Logo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-serif font-bold text-white text-xl tracking-tight">DESINAAP</span>
            </Link>
            <p className="text-sm text-[#C8B8A2] leading-relaxed mb-4">
              A digital platform for documenting, preserving, and exploring India's traditional measurement systems. Developed as part of the Indian Knowledge Systems (IKS) Internship.
            </p>
            <p className="text-xs text-[#A09080]">
              © 2025 DESINAAP · IKS Internship Project, Ministry of Education
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-[#C8B8A2]">
              {[["Measurements", "/measurements"], ["Regions", "/regions"], ["Sectors", "/sectors"], ["Infographics", "/infographics"], ["References", "/references"], ["About the Project", "/about"], ["Members", "/members"]].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-[#B88646] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Sectors</h4>
            <ul className="space-y-2 text-sm text-[#C8B8A2]">
              {[["Vedic Measurements", "/sectors/vedic-measurements"], ["Agriculture", "/sectors/agriculture"], ["Architecture", "/sectors/architecture"], ["Trade & Commerce", "/sectors/trade-commerce"], ["Medicine", "/sectors/medicine"], ["Textile & Handloom", "/sectors/textile-handloom"]].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-[#B88646] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

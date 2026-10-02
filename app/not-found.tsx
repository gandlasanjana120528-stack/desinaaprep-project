import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-serif text-8xl font-bold text-[#E8DED1] mb-4">404</div>
        <h1 className="font-serif text-2xl font-bold text-[#2E2A26] mb-3">Page Not Found</h1>
        <p className="text-[#7A6E65] mb-8 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="px-5 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426] transition-colors">Go Home</Link>
          <Link href="/measurements" className="px-5 py-2 border border-[#E8DED1] text-[#2E2A26] rounded-lg text-sm font-medium hover:border-[#6F4E37] transition-colors">Browse Measurements</Link>
        </div>
      </div>
    </div>
  );
}

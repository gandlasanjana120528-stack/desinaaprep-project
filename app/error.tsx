"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white border border-[#E8DED1] rounded-xl p-8 shadow-sm text-center">
        <div className="w-12 h-12 rounded-full bg-[#FAF0E4] border border-[#ECD1B8] flex items-center justify-center mx-auto mb-4 text-[#964B13]">
          <AlertTriangle className="w-6 h-6" />
        </div>
        
        <h2 className="font-serif text-2xl font-bold text-[#2E2A26] mb-2">
          Something went wrong
        </h2>
        
        <p className="text-sm text-[#7A6E65] mb-6 leading-relaxed">
          An unexpected error occurred while loading this page. Please try refreshing or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426] transition-colors cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-4 py-2 border border-[#E8DED1] text-[#2E2A26] rounded-lg text-sm font-medium hover:border-[#6F4E37] hover:text-[#6F4E37] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

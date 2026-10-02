"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-4 font-sans text-[#2E2A26]">
        <div className="max-w-md w-full bg-white border border-[#E8DED1] rounded-xl p-8 shadow-sm text-center">
          <div className="w-12 h-12 rounded-full bg-[#FAF0E4] border border-[#ECD1B8] flex items-center justify-center mx-auto mb-4 text-[#964B13] font-bold text-xl">
            !
          </div>
          
          <h2 className="text-2xl font-bold mb-2">
            Something went wrong
          </h2>
          
          <p className="text-sm text-[#7A6E65] mb-6 leading-relaxed">
            A critical error occurred while loading the application.
          </p>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-[#6F4E37] text-white rounded-lg text-sm font-medium hover:bg-[#4A3426] transition-colors cursor-pointer"
            >
              Try Again
            </button>

            <Link
              href="/"
              className="px-4 py-2 border border-[#E8DED1] text-[#2E2A26] rounded-lg text-sm font-medium hover:border-[#6F4E37] transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

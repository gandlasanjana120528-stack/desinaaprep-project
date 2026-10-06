"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { hasInternalHistory } from "./NavigationTracker";

/**
 * Goes back to the page the visitor actually came from (keeping its view,
 * filters and scroll position). If the page was opened directly – e.g. from a
 * shared link – it falls back to `fallbackHref`.
 */
export default function BackButton({
  fallbackHref,
  label = "Back",
  className = "",
}: {
  fallbackHref: string;
  label?: string;
  className?: string;
}) {
  const router = useRouter();
  const goBack = () => {
    const cameFromThisSite =
      hasInternalHistory() ||
      (typeof document !== "undefined" && document.referrer.startsWith(window.location.origin));
    if (cameFromThisSite && window.history.length > 1) router.back();
    else router.push(fallbackHref);
  };
  return (
    <button
      type="button"
      onClick={goBack}
      className={`inline-flex items-center gap-1.5 text-sm text-[#6F4E37] font-semibold hover:text-[#4A3426] transition-colors ${className}`}
    >
      <ArrowLeft className="w-4 h-4" /> {label}
    </button>
  );
}

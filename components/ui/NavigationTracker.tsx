"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Remembers whether the visitor has moved between pages inside the site. */
let internalNavigations = 0;
export const hasInternalHistory = () => internalNavigations > 0;

export default function NavigationTracker() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    internalNavigations += 1;
  }, [pathname]);
  return null;
}

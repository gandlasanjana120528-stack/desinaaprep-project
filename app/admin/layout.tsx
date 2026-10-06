"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/client";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setEmail(user?.email ?? "");
      if (!user && pathname !== "/admin/login") {
        router.replace("/admin/login");
      } else if (user && pathname === "/admin/login") {
        router.replace("/admin/measurements");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
        <p className="text-[#7A6E65]">Loading admin...</p>
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-[#FAF7F2]">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <AdminSidebar userEmail={email} />
      <div className="lg:pl-60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-8 pb-12">{children}</div>
      </div>
    </div>
  );
}

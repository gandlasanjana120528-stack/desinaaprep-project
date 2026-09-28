import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingMascot from "@/components/ui/FloatingMascot";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://desinaap.vercel.app"),
  title: { default: "DESINAAP – Traditional Measurements Re-Coded", template: "%s | DESINAAP" },
  description: "A digital platform for documenting, preserving, and exploring India's traditional measurement systems.",
  keywords: ["Indian measurements", "traditional units", "IKS", "Vedic measurements", "Telugu measurements"],
  openGraph: {
    title: "DESINAAP – Traditional Measurements Re-Coded",
    description: "A digital platform for documenting, preserving, and exploring India's traditional measurement systems.",
    url: "https://desinaap.vercel.app", // Fallback URL, typically you'd set this to the actual production URL
    siteName: "DESINAAP",
    images: [
      {
        url: "/assets/mascot-idle.png",
        width: 800,
        height: 600,
        alt: "DESINAAP Mascot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DESINAAP – Traditional Measurements Re-Coded",
    description: "A digital platform for documenting, preserving, and exploring India's traditional measurement systems.",
    images: ["/assets/mascot-idle.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FAF7F2] text-[#2E2A26] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingMascot />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}

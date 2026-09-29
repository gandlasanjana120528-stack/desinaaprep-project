"use client";

import { useState, useMemo, useEffect } from "react";
import { Measurement, Sector } from "@/types";
import MeasurementCard from "@/components/measurements/MeasurementCard";
import { Table, LayoutGrid, Sparkles, ExternalLink } from "lucide-react";

interface StateSectorViewProps {
  stateName: string;
  measurements: Measurement[];
  sectors: Sector[];
}

// Canonical ordering for sectors as requested
const SECTOR_ORDER = [
  "transportation-distance",
  "land-measurement",
  "livestock-dairy",
  "household",
  "gold-jewellery",
  "agriculture",
  "currency-money",
  "storage-transport",
  "religious-cultural",
  "trade-commerce",
  "textile-handloom",
  "medicine",
  "architecture",
  "time",
];

// Display title lookup map for all possible sector keys
const SECTOR_TITLE_MAP: Record<string, string> = {
  "transportation-distance": "Transportation & Distance",
  "trans-dist": "Transportation & Distance",
  "land-measurement": "Land Measurement",
  "land": "Land Measurement",
  "livestock-dairy": "Livestock & Dairy",
  "dairy": "Livestock & Dairy",
  "household": "Household & Daily Life",
  "hh": "Household & Daily Life",
  "gold-jewellery": "Gold & Jewellery",
  "gold": "Gold & Jewellery",
  "agriculture": "Seed & Crop (Agriculture)",
  "agri": "Seed & Crop (Agriculture)",
  "seed-crop": "Seed & Crop (Agriculture)",
  "currency-money": "Currency & Money",
  "currency": "Currency & Money",
  "storage-transport": "Storage & Transportation",
  "storage": "Storage & Transportation",
  "religious-cultural": "Religious & Cultural",
  "relig": "Religious & Cultural",
  "trade-commerce": "Trade & Commerce",
  "trade": "Trade & Commerce",
  "textile-handloom": "Textile & Handloom",
  "textile": "Textile & Handloom",
  "medicine": "Medicine (Ayurveda)",
  "med": "Medicine (Ayurveda)",
  "architecture": "Construction & Architecture",
  "arch": "Construction & Architecture",
  "construction": "Construction & Architecture",
  "time": "Time & Calendar",
};

export default function StateSectorView({
  stateName,
  measurements,
  sectors,
}: StateSectorViewProps) {
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"table" | "card">("table");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Sector display name lookup map
  const sectorNameMap = useMemo(() => {
    const map = new Map<string, string>();
    // Pre-populate with standard titles
    Object.entries(SECTOR_TITLE_MAP).forEach(([k, v]) => {
      map.set(k, v);
    });
    // Add dynamically provided sectors from props
    sectors.forEach((s) => {
      map.set(s.slug, s.name);
      map.set(s.id, s.name);
      map.set(s.name.toLowerCase(), s.name);
    });
    return map;
  }, [sectors]);

  // Determine local language subtitle based on state name
  const localLangSubtitle = useMemo(() => {
    const s = stateName.toLowerCase();
    if (s.includes("himachal")) return "Pahari/Kangri/Kinnauri";
    if (s.includes("arunachal")) return "Monpa/Tibetan";
    if (s.includes("tripura")) return "Kokborok/Bengali";
    if (s.includes("manipur")) return "Meitei/Kokborok";
    if (s.includes("jharkhand")) return "Nagpuri/Sadri";
    if (s.includes("bihar")) return "Hindi";
    if (s.includes("madhya") || s === "mp") return "Hindi";
    if (s.includes("haryana")) return "Haryanvi/Hindi";
    if (s.includes("assam")) return "Assamese/Hindi";
    if (s.includes("uttar pradesh") || s === "up") return "Hindi/Awadhi";
    if (s.includes("telangana") || s.includes("andhra")) return "Telugu";
    if (s.includes("tamil nadu") || s.includes("tamilnadu") || s.includes("tamil")) return "Tamil";
    if (s.includes("karnataka")) return "Kannada";
    if (s.includes("maharashtra")) return "Marathi";
    if (s.includes("gujarat") || s.includes("gujarath")) return "Gujarati";
    if (s.includes("rajasthan")) return "Rajasthani";
    if (s.includes("bengal")) return "Bengali";
    if (s.includes("odisha")) return "Odia";
    if (s.includes("kerala")) return "Malayalam";
    if (s.includes("punjab")) return "Punjabi";
    if (s.includes("meghalaya")) return "Khasi/Garo";
    if (s.includes("nagaland")) return "Naga tribal";
    if (s.includes("sikkim")) return "Nepali/Bhutia/Lepcha";
    if (s.includes("uttarakhand") || s.includes("uttarkhand")) return "Kumaoni/Garhwali";
    if (s.includes("goa")) return "Konkani";
    if (s.includes("mizoram")) return "Mizo";
    if (s.includes("chhattisgarh") || s.includes("chattisgarh")) return "Chhattisgarhi";
    if (s.includes("jammu") || s.includes("kashmir") || s === "jk") return "Kashmiri/Dogri";
    return "Local Language";
  }, [stateName]);

  // Dynamic theme colors matching each state's authentic spreadsheet aesthetic
  const theme = useMemo(() => {
    const s = stateName.toLowerCase();
    if (s.includes("jammu") || s.includes("kashmir") || s === "jk") {
      return {
        bannerBg: "bg-[#0E4A5C]",
        bannerBorder: "border-[#093542]",
        counterBg: "bg-[#093542]",
        counterText: "text-[#D6EFF6]",
        counterBorder: "border-[#1A6278]",
        headerBg: "bg-[#12586D]",
        headerBorder: "border-[#0C3F4E]",
        headerDivide: "divide-[#217792]",
        headerSubtext: "text-[#C8E8F2]",
        altRowBg: "bg-[#F3F9FA]",
        hoverRowBg: "hover:bg-[#E6F3F6]",
        accentText: "text-[#0E4A5C]",
        badgeBg: "bg-[#EDF7F9]",
        badgeBorder: "border-[#BEE1E8]",
        badgeText: "text-[#0E4A5C]",
        activeBtn: "bg-[#0E4A5C] text-white border-[#0E4A5C]",
        inactiveBtn: "bg-[#FAF7F2] text-[#0E4A5C] border-[#BEE1E8] hover:bg-[#0E4A5C] hover:text-white hover:border-[#0E4A5C]",
      };
    }
    if (s.includes("tamil")) {
      return {
        bannerBg: "bg-[#7A2818]",
        bannerBorder: "border-[#5A1C10]",
        counterBg: "bg-[#5A1C10]",
        counterText: "text-[#FCE8E2]",
        counterBorder: "border-[#9E3520]",
        headerBg: "bg-[#8B3A18]",
        headerBorder: "border-[#6E2612]",
        headerDivide: "divide-[#B04E2A]",
        headerSubtext: "text-[#F5D5C8]",
        altRowBg: "bg-[#FAF6F4]",
        hoverRowBg: "hover:bg-[#F5ECE8]",
        accentText: "text-[#8B3A18]",
        badgeBg: "bg-[#FDF3F0]",
        badgeBorder: "border-[#E8C4B8]",
        badgeText: "text-[#8B3A18]",
        activeBtn: "bg-[#8B3A18] text-white border-[#8B3A18]",
        inactiveBtn: "bg-[#FAF7F2] text-[#8B3A18] border-[#E8C4B8] hover:bg-[#8B3A18] hover:text-white hover:border-[#8B3A18]",
      };
    }
    if (s.includes("chhattisgarh") || s.includes("chattisgarh")) {
      return {
        bannerBg: "bg-[#1F4E79]",
        bannerBorder: "border-[#163857]",
        counterBg: "bg-[#163857]",
        counterText: "text-[#D8E9F6]",
        counterBorder: "border-[#2C587D]",
        headerBg: "bg-[#255C8F]",
        headerBorder: "border-[#1B446A]",
        headerDivide: "divide-[#3A72A4]",
        headerSubtext: "text-[#CCE0F0]",
        altRowBg: "bg-[#F3F7FA]",
        hoverRowBg: "hover:bg-[#E8F0F7]",
        accentText: "text-[#1F4E79]",
        badgeBg: "bg-[#EDF4F9]",
        badgeBorder: "border-[#C5DBEC]",
        badgeText: "text-[#1F4E79]",
        activeBtn: "bg-[#1F4E79] text-white border-[#1F4E79]",
        inactiveBtn: "bg-[#FAF7F2] text-[#1F4E79] border-[#D0DFEB] hover:bg-[#1F4E79] hover:text-white hover:border-[#1F4E79]",
      };
    }
    if (s.includes("mizoram")) {
      return {
        bannerBg: "bg-[#1F4E79]",
        bannerBorder: "border-[#163857]",
        counterBg: "bg-[#163857]",
        counterText: "text-[#D8E9F6]",
        counterBorder: "border-[#2C587D]",
        headerBg: "bg-[#255C8F]",
        headerBorder: "border-[#1B446A]",
        headerDivide: "divide-[#3A72A4]",
        headerSubtext: "text-[#CCE0F0]",
        altRowBg: "bg-[#F3F7FA]",
        hoverRowBg: "hover:bg-[#E8F0F7]",
        accentText: "text-[#1F4E79]",
        badgeBg: "bg-[#EDF4F9]",
        badgeBorder: "border-[#C5DBEC]",
        badgeText: "text-[#1F4E79]",
        activeBtn: "bg-[#1F4E79] text-white border-[#1F4E79]",
        inactiveBtn: "bg-[#FAF7F2] text-[#1F4E79] border-[#D0DFEB] hover:bg-[#1F4E79] hover:text-white hover:border-[#1F4E79]",
      };
    }
    if (s.includes("karnataka")) {
      return {
        bannerBg: "bg-[#1F4E78]",
        bannerBorder: "border-[#163857]",
        counterBg: "bg-[#163857]",
        counterText: "text-[#D8E9F6]",
        counterBorder: "border-[#2C587D]",
        headerBg: "bg-[#1F4E78]",
        headerBorder: "border-[#163857]",
        headerDivide: "divide-[#3A72A4]",
        headerSubtext: "text-[#CCE0F0]",
        altRowBg: "bg-[#F3F7FA]",
        hoverRowBg: "hover:bg-[#E8F0F7]",
        accentText: "text-[#1F4E78]",
        badgeBg: "bg-[#EDF4F9]",
        badgeBorder: "border-[#C5DBEC]",
        badgeText: "text-[#1F4E78]",
        activeBtn: "bg-[#1F4E78] text-white border-[#1F4E78]",
        inactiveBtn: "bg-[#FAF7F2] text-[#1F4E78] border-[#D0DFEB] hover:bg-[#1F4E78] hover:text-white hover:border-[#1F4E78]",
      };
    }
    if (s.includes("himachal") || s.includes("uttarakhand") || s.includes("uttarkhand")) {
      return {
        bannerBg: "bg-[#1F4E79]",
        bannerBorder: "border-[#163857]",
        counterBg: "bg-[#163857]",
        counterText: "text-[#D8E9F6]",
        counterBorder: "border-[#2C587D]",
        headerBg: "bg-[#255C8F]",
        headerBorder: "border-[#1B446A]",
        headerDivide: "divide-[#3A72A4]",
        headerSubtext: "text-[#CCE0F0]",
        altRowBg: "bg-[#F3F7FA]",
        hoverRowBg: "hover:bg-[#E8F0F7]",
        accentText: "text-[#1F4E79]",
        badgeBg: "bg-[#EDF4F9]",
        badgeBorder: "border-[#C5DBEC]",
        badgeText: "text-[#1F4E79]",
        activeBtn: "bg-[#1F4E79] text-white border-[#1F4E79]",
        inactiveBtn: "bg-[#FAF7F2] text-[#1F4E79] border-[#D0DFEB] hover:bg-[#1F4E79] hover:text-white hover:border-[#1F4E79]",
      };
    }
    if (s.includes("sikkim")) {
      return {
        bannerBg: "bg-[#1E5638]",
        bannerBorder: "border-[#143D27]",
        counterBg: "bg-[#143D27]",
        counterText: "text-[#D3EEDB]",
        counterBorder: "border-[#296D48]",
        headerBg: "bg-[#266845]",
        headerBorder: "border-[#1A4C32]",
        headerDivide: "divide-[#3A845C]",
        headerSubtext: "text-[#C2E8CE]",
        altRowBg: "bg-[#F4F9F6]",
        hoverRowBg: "hover:bg-[#E9F4ED]",
        accentText: "text-[#1E5638]",
        badgeBg: "bg-[#EFF7F2]",
        badgeBorder: "border-[#CDE5D6]",
        badgeText: "text-[#1E5638]",
        activeBtn: "bg-[#1E5638] text-white border-[#1E5638]",
        inactiveBtn: "bg-[#FAF7F2] text-[#1E5638] border-[#CCE5D5] hover:bg-[#1E5638] hover:text-white hover:border-[#1E5638]",
      };
    }

    if (s.includes("arunachal")) {
      return {
        bannerBg: "bg-[#244E33]",
        bannerBorder: "border-[#183824]",
        counterBg: "bg-[#183824]",
        counterText: "text-[#D5EAD9]",
        counterBorder: "border-[#336844]",
        headerBg: "bg-[#2E5E3D]",
        headerBorder: "border-[#1E432A]",
        headerDivide: "divide-[#417B55]",
        headerSubtext: "text-[#C2E3CC]",
        altRowBg: "bg-[#F4F8F5]",
        hoverRowBg: "hover:bg-[#E9F3EC]",
        accentText: "text-[#244E33]",
        badgeBg: "bg-[#EEF6F1]",
        badgeBorder: "border-[#CFE4D6]",
        badgeText: "text-[#244E33]",
        activeBtn: "bg-[#244E33] text-white border-[#244E33]",
        inactiveBtn: "bg-[#FAF7F2] text-[#244E33] border-[#CFE4D6] hover:bg-[#244E33] hover:text-white hover:border-[#244E33]",
      };
    }
    if (s.includes("tripura")) {
      return {
        bannerBg: "bg-[#4F1E40]",
        bannerBorder: "border-[#3E1431]",
        counterBg: "bg-[#3E1431]",
        counterText: "text-[#F3D5E9]",
        counterBorder: "border-[#6E285B]",
        headerBg: "bg-[#5D244D]",
        headerBorder: "border-[#47173A]",
        headerDivide: "divide-[#763364]",
        headerSubtext: "text-[#E8BFDE]",
        altRowBg: "bg-[#FAF5F8]",
        hoverRowBg: "hover:bg-[#F3E7EF]",
        accentText: "text-[#5D244D]",
        badgeBg: "bg-[#F8EDF4]",
        badgeBorder: "border-[#E7D3E2]",
        badgeText: "text-[#5D244D]",
        activeBtn: "bg-[#4F1E40] text-white border-[#4F1E40]",
        inactiveBtn: "bg-[#FAF7F2] text-[#4F1E40] border-[#E7D3E2] hover:bg-[#4F1E40] hover:text-white hover:border-[#4F1E40]",
      };
    }
    if (s.includes("manipur")) {
      return {
        bannerBg: "bg-[#964B13]",
        bannerBorder: "border-[#7C3A0A]",
        counterBg: "bg-[#7C3A0A]",
        counterText: "text-[#FDECD8]",
        counterBorder: "border-[#B36324]",
        headerBg: "bg-[#A35518]",
        headerBorder: "border-[#823F0C]",
        headerDivide: "divide-[#B86828]",
        headerSubtext: "text-[#F8D8B6]",
        altRowBg: "bg-[#FDF8F2]",
        hoverRowBg: "hover:bg-[#F8EEE0]",
        accentText: "text-[#964B13]",
        badgeBg: "bg-[#FAF0E4]",
        badgeBorder: "border-[#ECD1B8]",
        badgeText: "text-[#964B13]",
        activeBtn: "bg-[#964B13] text-white border-[#964B13]",
        inactiveBtn: "bg-[#FAF7F2] text-[#964B13] border-[#ECD1B8] hover:bg-[#964B13] hover:text-white hover:border-[#964B13]",
      };
    }
    if (s.includes("punjab")) {
      return {
        bannerBg: "bg-[#996300]",
        bannerBorder: "border-[#7A4E00]",
        counterBg: "bg-[#7A4E00]",
        counterText: "text-[#FEF3D6]",
        counterBorder: "border-[#B37700]",
        headerBg: "bg-[#A86E04]",
        headerBorder: "border-[#855500]",
        headerDivide: "divide-[#C2820A]",
        headerSubtext: "text-[#FDE7AD]",
        altRowBg: "bg-[#FDF9F0]",
        hoverRowBg: "hover:bg-[#F9EED4]",
        accentText: "text-[#996300]",
        badgeBg: "bg-[#FBF1D9]",
        badgeBorder: "border-[#E8D09E]",
        badgeText: "text-[#996300]",
        activeBtn: "bg-[#996300] text-white border-[#996300]",
        inactiveBtn: "bg-[#FAF7F2] text-[#996300] border-[#E8D09E] hover:bg-[#996300] hover:text-white hover:border-[#996300]",
      };
    }
    if (s.includes("meghalaya")) {
      return {
        bannerBg: "bg-[#23492D]",
        bannerBorder: "border-[#193620]",
        counterBg: "bg-[#193620]",
        counterText: "text-[#D3E8D8]",
        counterBorder: "border-[#32613B]",
        headerBg: "bg-[#2C5B38]",
        headerBorder: "border-[#1D4026]",
        headerDivide: "divide-[#3D774B]",
        headerSubtext: "text-[#C0E0C7]",
        altRowBg: "bg-[#F3F8F5]",
        hoverRowBg: "hover:bg-[#E8F2EC]",
        accentText: "text-[#23492D]",
        badgeBg: "bg-[#ECF5EE]",
        badgeBorder: "border-[#CDE3D3]",
        badgeText: "text-[#23492D]",
        activeBtn: "bg-[#23492D] text-white border-[#23492D]",
        inactiveBtn: "bg-[#FAF7F2] text-[#23492D] border-[#CDE3D3] hover:bg-[#23492D] hover:text-white hover:border-[#23492D]",
      };
    }
    if (s.includes("nagaland")) {
      return {
        bannerBg: "bg-[#7A281E]",
        bannerBorder: "border-[#5E1E16]",
        counterBg: "bg-[#5E1E16]",
        counterText: "text-[#F5D5D1]",
        counterBorder: "border-[#96382C]",
        headerBg: "bg-[#8E3226]",
        headerBorder: "border-[#6B2219]",
        headerDivide: "divide-[#AA4436]",
        headerSubtext: "text-[#F8DDD9]",
        altRowBg: "bg-[#FCF7F6]",
        hoverRowBg: "hover:bg-[#F7ECEB]",
        accentText: "text-[#7A281E]",
        badgeBg: "bg-[#F9ECEB]",
        badgeBorder: "border-[#E8C5C1]",
        badgeText: "text-[#7A281E]",
        activeBtn: "bg-[#7A281E] text-white border-[#7A281E]",
        inactiveBtn: "bg-[#FAF7F2] text-[#7A281E] border-[#E8C5C1] hover:bg-[#7A281E] hover:text-white hover:border-[#7A281E]",
      };
    }
    if (s.includes("telangana")) {
      return {
        bannerBg: "bg-[#1A456E]",
        bannerBorder: "border-[#123354]",
        counterBg: "bg-[#123354]",
        counterText: "text-[#D4E4F3]",
        counterBorder: "border-[#275988]",
        headerBg: "bg-[#21568A]",
        headerBorder: "border-[#174068]",
        headerDivide: "divide-[#3572A8]",
        headerSubtext: "text-[#C7DCF0]",
        altRowBg: "bg-[#F4F8FB]",
        hoverRowBg: "hover:bg-[#E9F1F8]",
        accentText: "text-[#1A456E]",
        badgeBg: "bg-[#EEF4FA]",
        badgeBorder: "border-[#C8DCEF]",
        badgeText: "text-[#1A456E]",
        activeBtn: "bg-[#1A456E] text-white border-[#1A456E]",
        inactiveBtn: "bg-[#FAF7F2] text-[#1A456E] border-[#C8DCEF] hover:bg-[#1A456E] hover:text-white hover:border-[#1A456E]",
      };
    }
    if (s.includes("gujarat") || s.includes("gujarath")) {
      return {
        bannerBg: "bg-[#1E3A5F]",
        bannerBorder: "border-[#142740]",
        counterBg: "bg-[#142740]",
        counterText: "text-[#D8E6F5]",
        counterBorder: "border-[#2E5584]",
        headerBg: "bg-[#254A77]",
        headerBorder: "border-[#1A375B]",
        headerDivide: "divide-[#3D6EAA]",
        headerSubtext: "text-[#CDE1F7]",
        altRowBg: "bg-[#F4F8FC]",
        hoverRowBg: "hover:bg-[#EAF1F9]",
        accentText: "text-[#1E3A5F]",
        badgeBg: "bg-[#EEF4FB]",
        badgeBorder: "border-[#C6DCF2]",
        badgeText: "text-[#1E3A5F]",
        activeBtn: "bg-[#1E3A5F] text-white border-[#1E3A5F]",
        inactiveBtn: "bg-[#FAF7F2] text-[#1E3A5F] border-[#C6DCF2] hover:bg-[#1E3A5F] hover:text-white hover:border-[#1E3A5F]",
      };
    }
    if (s.includes("rajasthan")) {
      return {
        bannerBg: "bg-[#8B4513]",
        bannerBorder: "border-[#6E360F]",
        counterBg: "bg-[#6E360F]",
        counterText: "text-[#FDEBD0]",
        counterBorder: "border-[#A0522D]",
        headerBg: "bg-[#9C521A]",
        headerBorder: "border-[#7A3F14]",
        headerDivide: "divide-[#BA6A28]",
        headerSubtext: "text-[#FCE6CA]",
        altRowBg: "bg-[#FDF9F5]",
        hoverRowBg: "hover:bg-[#F9EFE5]",
        accentText: "text-[#8B4513]",
        badgeBg: "bg-[#FAF0E6]",
        badgeBorder: "border-[#EAD5C3]",
        badgeText: "text-[#8B4513]",
        activeBtn: "bg-[#8B4513] text-white border-[#8B4513]",
        inactiveBtn: "bg-[#FAF7F2] text-[#8B4513] border-[#EAD5C3] hover:bg-[#8B4513] hover:text-white hover:border-[#8B4513]",
      };
    }
    if (s.includes("goa")) {
      return {
        bannerBg: "bg-[#0F4C5C]",
        bannerBorder: "border-[#0B3844]",
        counterBg: "bg-[#0B3844]",
        counterText: "text-[#D2EBF0]",
        counterBorder: "border-[#1D6A7E]",
        headerBg: "bg-[#155D70]",
        headerBorder: "border-[#0F4756]",
        headerDivide: "divide-[#21738A]",
        headerSubtext: "text-[#C4E5EC]",
        altRowBg: "bg-[#F3F9FA]",
        hoverRowBg: "hover:bg-[#E7F3F5]",
        accentText: "text-[#0F4C5C]",
        badgeBg: "bg-[#EDF6F8]",
        badgeBorder: "border-[#C1E0E6]",
        badgeText: "text-[#0F4C5C]",
        activeBtn: "bg-[#0F4C5C] text-white border-[#0F4C5C]",
        inactiveBtn: "bg-[#FAF7F2] text-[#0F4C5C] border-[#C1E0E6] hover:bg-[#0F4C5C] hover:text-white hover:border-[#0F4C5C]",
      };
    }
    // Default earthy bronze palette (used for Jharkhand, etc.)
    return {
      bannerBg: "bg-[#4A3426]",
      bannerBorder: "border-[#3B291D]",
      counterBg: "bg-[#3B291D]",
      counterText: "text-[#E8D7C8]",
      counterBorder: "border-[#624734]",
      headerBg: "bg-[#5E4231]",
      headerBorder: "border-[#473022]",
      headerDivide: "divide-[#755541]",
      headerSubtext: "text-[#E0CFC2]",
      altRowBg: "bg-[#FAF7F2]",
      hoverRowBg: "hover:bg-[#F2ECE2]",
      accentText: "text-[#5E4231]",
      badgeBg: "bg-[#F5EFEB]",
      badgeBorder: "border-[#E2D2C5]",
      badgeText: "text-[#5E4231]",
      activeBtn: "bg-[#6F4E37] text-white border-[#6F4E37]",
      inactiveBtn: "bg-[#FAF7F2] text-[#6F4E37] border-[#E8DED1] hover:bg-[#6F4E37] hover:text-white hover:border-[#6F4E37]",
    };
  }, [stateName]);

  // Group measurements by sector key
  const sectorGroups = useMemo(() => {
    const map = new Map<string, Measurement[]>();
    measurements.forEach((m) => {
      const key = m.sector || "other";
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key)!.push(m);
    });
    return map;
  }, [measurements]);

  // Active sector keys ordered canonically
  const activeSectorKeys = useMemo(() => {
    const keys = Array.from(sectorGroups.keys());
    return keys.sort((a, b) => {
      const indexA = SECTOR_ORDER.indexOf(a);
      const indexB = SECTOR_ORDER.indexOf(b);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    });
  }, [sectorGroups]);

  // Filtered measurements list
  const filtered = useMemo(() => {
    if (selectedSector === "all") {
      return measurements;
    }
    return sectorGroups.get(selectedSector) || [];
  }, [selectedSector, measurements, sectorGroups]);

  // Check if state is Goa, Maharashtra, Andhra Pradesh, or Karnataka
  const isGoa = useMemo(() => stateName.toLowerCase().includes("goa"), [stateName]);
  const isMaharashtra = useMemo(
    () => stateName.toLowerCase().includes("maharashtra") || stateName.toLowerCase().includes("maharastra"),
    [stateName]
  );
  const isAndhra = useMemo(
    () => stateName.toLowerCase().includes("andhra"),
    [stateName]
  );
  const isKarnataka = useMemo(
    () => stateName.toLowerCase().includes("karnataka"),
    [stateName]
  );

  const primaryColor = useMemo(() => {
    const s = stateName.toLowerCase();
    if (s.includes("jammu") || s.includes("kashmir") || s === "jk") return "#0E4A5C";
    if (s.includes("tamil")) return "#803018";
    if (s.includes("chhattisgarh") || s.includes("chattisgarh")) return "#1F4E79";
    if (s.includes("mizoram")) return "#1F4E79";
    if (s.includes("karnataka")) return "#1F4E78";
    if (s.includes("goa")) return "#0F4C5C";
    if (s.includes("maharashtra") || s.includes("maharastra")) return "#163857";
    if (s.includes("himachal") || s.includes("uttarakhand") || s.includes("uttarkhand")) return "#1F4E79";
    if (s.includes("sikkim")) return "#1E5638";
    if (s.includes("arunachal")) return "#244E33";
    if (s.includes("tripura")) return "#4F1E40";
    if (s.includes("manipur")) return "#964B13";
    if (s.includes("punjab")) return "#996300";
    if (s.includes("meghalaya")) return "#23492D";
    if (s.includes("nagaland")) return "#7A281E";
    if (s.includes("telangana")) return "#1A456E";
    if (s.includes("andhra")) return "#8B4513";
    if (s.includes("gujarat") || s.includes("gujarath")) return "#1E3A5F";
    if (s.includes("rajasthan")) return "#8B4513";
    return "#4A3426";
  }, [stateName]);

  const headerColor = useMemo(() => {
    const s = stateName.toLowerCase();
    if (s.includes("jammu") || s.includes("kashmir") || s === "jk") return "#12586D";
    if (s.includes("tamil")) return "#8B3A18";
    if (s.includes("chhattisgarh") || s.includes("chattisgarh")) return "#255C8F";
    if (s.includes("mizoram")) return "#255C8F";
    if (s.includes("karnataka")) return "#1F4E78";
    if (s.includes("goa")) return "#155D70";
    if (s.includes("maharashtra") || s.includes("maharastra")) return "#1F4E79";
    if (s.includes("himachal") || s.includes("uttarakhand") || s.includes("uttarkhand")) return "#255C8F";
    if (s.includes("sikkim")) return "#266845";
    if (s.includes("arunachal")) return "#2E5E3D";
    if (s.includes("tripura")) return "#5D244D";
    if (s.includes("manipur")) return "#A35518";
    if (s.includes("punjab")) return "#A86E04";
    if (s.includes("meghalaya")) return "#2C5B38";
    if (s.includes("nagaland")) return "#8E3226";
    if (s.includes("telangana")) return "#21568A";
    if (s.includes("andhra")) return "#6E360F";
    if (s.includes("gujarat") || s.includes("gujarath")) return "#254A77";
    if (s.includes("rajasthan")) return "#9C521A";
    return "#5E4231";
  }, [stateName]);

  // Dynamic banner title matching uploaded spreadsheets
  const currentSectorTitle = selectedSector === "all"
    ? `All Sectors — IKS Traditional Measurement Units — ${stateName}`
    : `${sectorNameMap.get(selectedSector) || selectedSector} — IKS Traditional Measurement Units (Small → Large) — ${stateName}`;

  return (
    <div className="space-y-6 w-full">
      {/* Sector Filter & View Switcher Box */}
      <div className="bg-white border border-[#E8DED1] rounded-xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F0E6D8] pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" style={{ color: primaryColor }} />
            <h3 className="font-serif font-bold text-base text-[#2E2A26]">
              Sectors in {stateName}
            </h3>
          </div>

          {/* View Mode Switcher Button (Top-Right) */}
          <div className="flex items-center gap-1 bg-[#FAF7F2] border border-[#E8DED1] p-1 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => setViewMode("table")}
              style={
                viewMode === "table"
                  ? {
                      backgroundColor: primaryColor,
                      color: "#FFFFFF",
                      borderColor: primaryColor,
                    }
                  : undefined
              }
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                viewMode === "table"
                  ? "shadow-sm font-semibold"
                  : "text-[#7A6E65] hover:text-[#2E2A26] hover:bg-[#EAE2D5]"
              }`}
              title="Switch to Excel Table View"
            >
              <Table className="w-3.5 h-3.5" />
              <span>Excel Table</span>
            </button>

            <button
              onClick={() => setViewMode("card")}
              style={
                viewMode === "card"
                  ? {
                      backgroundColor: primaryColor,
                      color: "#FFFFFF",
                      borderColor: primaryColor,
                    }
                  : undefined
              }
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                viewMode === "card"
                  ? "shadow-sm font-semibold"
                  : "text-[#7A6E65] hover:text-[#2E2A26] hover:bg-[#EAE2D5]"
              }`}
              title="Switch to Cards View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
          </div>
        </div>

        {/* Rounded Sector Pills */}
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setSelectedSector("all")}
            style={
              selectedSector === "all"
                ? {
                    backgroundColor: primaryColor,
                    color: "#FFFFFF",
                    borderColor: primaryColor,
                  }
                : {
                    backgroundColor: "#FAF7F2",
                    color: primaryColor,
                    borderColor: isGoa ? "#C1E0E6" : isMaharashtra ? "#B8D5E8" : isAndhra ? "#E0C8B0" : isKarnataka ? "#C5DBEC" : "#E8DED1",
                  }
            }
            className="px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border shadow-sm font-semibold"
          >
            All Sectors ({measurements.length})
          </button>

          {activeSectorKeys.map((secKey) => {
            const count = sectorGroups.get(secKey)?.length || 0;
            const displayName = sectorNameMap.get(secKey) || secKey;
            const isSelected = selectedSector === secKey;

            return (
              <button
                key={secKey}
                onClick={() => setSelectedSector(secKey)}
                style={
                  isSelected
                    ? {
                        backgroundColor: primaryColor,
                        color: "#FFFFFF",
                        borderColor: primaryColor,
                      }
                    : {
                        backgroundColor: "#FAF7F2",
                        color: primaryColor,
                        borderColor: isGoa ? "#C1E0E6" : isMaharashtra ? "#B8D5E8" : isAndhra ? "#E0C8B0" : isKarnataka ? "#C5DBEC" : "#E8DED1",
                      }
                }
                className="px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border shadow-sm font-semibold"
              >
                {displayName} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Showing count indicator */}
      <div className="text-xs text-[#7A6E65] font-medium flex items-center justify-between px-1">
        <span>
          Showing <strong className="text-[#2E2A26]">{filtered.length}</strong> of{" "}
          <strong className="text-[#2E2A26]">{measurements.length}</strong> units
          {selectedSector !== "all" && (
            <span>
              {" "}
              in <strong style={{ color: primaryColor }}>{sectorNameMap.get(selectedSector) || selectedSector}</strong>
            </span>
          )}
        </span>
      </div>

      {/* Main Measurements Display (Excel Data Table vs Cards) */}
      {filtered.length > 0 ? (
        viewMode === "table" ? (
          /* Spreadsheet Excel Data Table Matching Uploaded Spreadsheets (9 Styled Columns) */
          <div className="bg-white border border-[#E8DED1] rounded-xl shadow-sm overflow-hidden w-full">
            {/* Header Banner Bar Matching Uploaded Spreadsheets */}
            <div
              style={{ backgroundColor: primaryColor, color: "#FFFFFF" }}
              className="text-white px-5 py-3 font-serif font-bold text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 shadow-sm"
            >
              <span className="text-white font-bold text-sm tracking-wide">{currentSectorTitle}</span>
              <span
                style={{ backgroundColor: "rgba(0, 0, 0, 0.25)", color: "#FFFFFF" }}
                className="text-xs font-sans font-medium text-white px-3 py-1 rounded-full border border-white/20 self-start sm:self-auto shadow-inner"
              >
                {filtered.length} {filtered.length === 1 ? "Unit" : "Units"}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[960px]">
                <thead>
                  <tr
                    style={{ backgroundColor: headerColor, color: "#FFFFFF" }}
                    className="text-white font-semibold border-b border-black/10 divide-x divide-white/20"
                  >
                    <th style={{ color: "#FFFFFF" }} className="py-3.5 px-3 w-10 text-center font-bold">#</th>
                    <th style={{ color: "#FFFFFF" }} className="py-3.5 px-4 font-bold min-w-[120px]">
                      {isGoa || isMaharashtra || isAndhra || isKarnataka ? "Traditional Unit Name" : "Unit Name"}
                    </th>
                    <th style={{ color: "#FFFFFF" }} className="py-3.5 px-4 min-w-[120px]">
                      Sanskrit Name
                    </th>
                    <th style={{ color: "#FFFFFF" }} className="py-3.5 px-4 min-w-[140px]">
                      {isGoa ? (
                        <>
                          Konkani Name
                          <span className="block text-[10px] text-white/80 font-normal font-sans mt-0.5">
                            (कोंकणी)
                          </span>
                        </>
                      ) : isMaharashtra ? (
                        <>
                          Marathi Name
                          <span className="block text-[10px] text-white/80 font-normal font-sans mt-0.5">
                            (मराठी)
                          </span>
                        </>
                      ) : isAndhra ? (
                        <>
                          Telugu Name
                          <span className="block text-[10px] text-white/80 font-normal font-sans mt-0.5">
                            (తెలుగు)
                          </span>
                        </>
                      ) : isKarnataka ? (
                        <>
                          Kannada Name
                          <span className="block text-[10px] text-white/80 font-normal font-sans mt-0.5">
                            (ಕನ್ನಡ)
                          </span>
                        </>
                      ) : (
                        <>
                          Local Language Name
                          <span className={`block text-[10px] ${theme.headerSubtext} font-normal font-sans mt-0.5`}>
                            ({localLangSubtitle})
                          </span>
                        </>
                      )}
                    </th>
                    <th style={{ color: "#FFFFFF" }} className="py-3.5 px-4 min-w-[130px]">
                      {isGoa || isMaharashtra || isAndhra || isKarnataka ? "English Transliteration" : "Hindi Name"}
                    </th>
                    <th style={{ color: "#FFFFFF" }} className="py-3.5 px-3 min-w-[120px]">
                      {isGoa || isMaharashtra || isAndhra || isKarnataka ? "Measurement Category" : "Type / Category"}
                    </th>
                    <th style={{ color: "#FFFFFF" }} className="py-3.5 px-4 min-w-[140px]">
                      {isGoa || isMaharashtra || isAndhra || isKarnataka ? "Modern SI Equivalent" : "Approx. Modern Equivalent"}
                    </th>
                    <th style={{ color: "#FFFFFF" }} className="py-3.5 px-4 min-w-[140px]">
                      {isGoa || isMaharashtra || isAndhra || isKarnataka ? "Relationship Between Units" : "Relation / Hierarchy"}
                    </th>
                    <th style={{ color: "#FFFFFF" }} className="py-3.5 px-4 min-w-[240px]">
                      {isGoa || isMaharashtra || isAndhra || isKarnataka ? "Description & Historical Usage" : "Used In / Context"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8DED1] text-[#2E2A26]">
                  {filtered.map((m, idx) => (
                    <tr
                      key={m.id}
                      className={`${
                        idx % 2 === 0 ? "bg-white" : theme.altRowBg
                      } ${theme.hoverRowBg} transition-colors divide-x divide-[#E8DED1]`}
                    >
                      {/* # */}
                      <td
                        style={{ color: primaryColor }}
                        className="py-3.5 px-3 text-center font-bold"
                      >
                        {idx + 1}
                      </td>

                      {/* Unit Name */}
                      <td className="py-3.5 px-4 font-bold text-[#2E2A26]">
                        {m.name_english}
                      </td>

                      {/* Sanskrit Name */}
                      <td className="py-3.5 px-4 text-[#4A3E39]">
                        {m.name_sanskrit || "—"}
                      </td>

                      {/* Local Language Name / Konkani Name */}
                      <td className="py-3.5 px-4 text-[#2E2A26] font-medium font-serif text-sm">
                        {m.local_names && m.local_names.length > 0
                          ? m.local_names.join(", ")
                          : "—"}
                      </td>

                      {/* English Transliteration / Hindi Name */}
                      <td className="py-3.5 px-4 text-[#2E2A26] font-medium">
                        {m.name_hindi || "—"}
                      </td>

                      {/* Type / Category */}
                      <td className="py-3.5 px-3">
                        <span
                          style={{
                            backgroundColor: isGoa ? "#EDF6F8" : isMaharashtra ? "#EEF4F9" : isAndhra ? "#FBF3EB" : isKarnataka ? "#EDF4F9" : undefined,
                            color: (isGoa || isMaharashtra || isAndhra || isKarnataka) ? primaryColor : undefined,
                            borderColor: isGoa ? "#C1E0E6" : isMaharashtra ? "#B8D5E8" : isAndhra ? "#E8D0BE" : isKarnataka ? "#C5DBEC" : undefined,
                          }}
                          className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold ${
                            (!isGoa && !isMaharashtra && !isAndhra && !isKarnataka) ? `${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder}` : "border"
                          }`}
                        >
                          {m.measurement_type || m.category}
                        </span>
                      </td>

                      {/* Approx. Modern Equivalent */}
                      <td
                        style={{ color: primaryColor }}
                        className="py-3.5 px-4 font-mono text-[11px] font-semibold"
                      >
                        {m.modern_equivalent || "—"}
                      </td>

                      {/* Relation / Hierarchy */}
                      <td className="py-3.5 px-4 text-[#4A3E39] text-[11px] font-medium">
                        {m.conversion_formula ||
                          (m.hierarchy && m.hierarchy.length > 0
                            ? m.hierarchy.map((h) => h.unit).join("; ")
                            : "—")}
                      </td>

                      {/* Used In / Context and Reference */}
                      <td className="py-3.5 px-4 text-[#3D3531] text-[11px] leading-relaxed max-w-md">
                        <div className="text-[#2E2A26]">
                          {m.meaning || (m.used_in && m.used_in.join(", ")) || "—"}
                        </div>
                        {m.used_in && m.used_in.length > 0 && m.meaning && m.used_in[0] !== m.meaning && (
                          <div className="mt-1 text-[10px] text-[#6B5E55]">
                            <span className="font-semibold text-[#4A3E39]">Historical Usage:</span>{" "}
                            {m.used_in.join(", ")}
                          </div>
                        )}
                        {m.historical_period && (
                          <div className="mt-1 text-[10px] text-[#6B5E55]">
                            <span className="font-semibold text-[#4A3E39]">Historical Period:</span>{" "}
                            {m.historical_period}
                          </div>
                        )}
                        {m.region_applicable && (
                          <div className="mt-0.5 text-[10px] text-[#6B5E55]">
                            <span className="font-semibold text-[#4A3E39]">Region:</span>{" "}
                            {m.region_applicable}
                          </div>
                        )}
                        {m.references && m.references.length > 0 && (
                          <div className="mt-1.5 flex flex-wrap gap-1">
                            {m.references.map((refUrl, rIdx) =>
                              refUrl.startsWith("http") ? (
                                <a
                                  key={rIdx}
                                  href={refUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-1 text-[10px] ${theme.badgeText} hover:underline ${theme.badgeBg} border ${theme.badgeBorder} px-1.5 py-0.5 rounded truncate max-w-[220px]`}
                                  title={refUrl}
                                >
                                  <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
                                  <span className="truncate">{refUrl}</span>
                                </a>
                              ) : (
                                <span
                                  key={rIdx}
                                  className="text-[10px] text-[#7A6E65] italic bg-[#F5EFE8] px-1.5 py-0.5 rounded border border-[#E8DED1]"
                                >
                                  {refUrl}
                                </span>
                              )
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Cards View */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {filtered.map((m) => (
              <MeasurementCard key={m.id} m={m} />
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-12 bg-white border border-[#E8DED1] rounded-xl w-full">
          <p className="text-[#A09080] text-sm">
            No measurements found for this sector.
          </p>
        </div>
      )}
    </div>
  );
}


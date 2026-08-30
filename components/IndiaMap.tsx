"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { INDIA_MAP_DATA } from "@/lib/indiaMapData";

const stateColors: Record<string, string> = {
  // North
  "IN-JK": "#3565B8",
  "IN-LA": "#3565B8",
  "IN-HP": "#3565B8",
  "IN-PB": "#3565B8",
  "IN-HR": "#3565B8",
  "IN-UT": "#3565B8",
  "IN-DL": "#3565B8",

  // South
  "IN-TN": "#15916F",
  "IN-KL": "#15916F",
  "IN-KA": "#15916F",
  "IN-AP": "#15916F",
  "IN-TG": "#15916F",
  "IN-PY": "#15916F",

  // East
  "IN-WB": "#B87909",
  "IN-BR": "#B87909",
  "IN-JH": "#B87909",
  "IN-OR": "#B87909",
  "IN-OD": "#B87909",

  // West
  "IN-RJ": "#6544B4",
  "IN-GJ": "#6544B4",
  "IN-MH": "#6544B4",
  "IN-GA": "#6544B4",

  // Central
  "IN-MP": "#A8323A",
  "IN-CT": "#A8323A",
  "IN-UP": "#A8323A",

  // Northeast
  "IN-AS": "#0793AA",
  "IN-AR": "#0793AA",
  "IN-NL": "#0793AA",
  "IN-MN": "#0793AA",
  "IN-MZ": "#0793AA",
  "IN-TR": "#0793AA",
  "IN-ML": "#0793AA",
  "IN-SK": "#0793AA",

  // Islands / UTs
  "IN-AN": "#60708A",
  "IN-DN": "#60708A",
  "IN-DD": "#60708A",
  "IN-CH": "#60708A",
  "IN-LD": "#60708A",
};

export default function IndiaMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const router = useRouter();

  const handleStateClick = (state: {
    id: string;
    title: string | null;
  }) => {
    if (!state.title) return;
    setSelectedState(state.id);

    const stateSlug = state.title
      .toLowerCase()
      .replace(/\s+/g, "-");

    router.push(`/regions/${stateSlug}`);
  };

  return (
    <div className="w-full">

      <div className="w-full flex justify-center">

        <svg
          className="w-full max-w-[650px] h-auto"
          viewBox="0 0 450 550"
          preserveAspectRatio="xMidYMid meet"
        >

         {INDIA_MAP_DATA.map((state) => {
  const isSelected = selectedState === state.id;
  const isHovered = hoveredState === state.id;

  return (
    <path
      key={state.id}
      d={state.d}
      fill={stateColors[state.id] || "#60708A"}

      stroke={
        isSelected
          ? "#F59E0B"
          : isHovered
          ? "#FFFFFF"
          : "#111827"
      }

      strokeWidth={
        isSelected
          ? 3
          : isHovered
          ? 2.5
          : 0.8
      }

      strokeLinejoin="round"

      className="cursor-pointer transition-all duration-200"

      style={{
        opacity:
          selectedState && !isSelected
            ? 0.75
            : 1,

        filter:
          isSelected || isHovered
            ? "drop-shadow(0px 0px 6px rgba(255,255,255,0.7))"
            : "none",

        transform:
          isHovered && !isSelected
            ? "scale(1.01)"
            : "scale(1)",

        transformOrigin: "center",
      }}

      onMouseEnter={() => {
        setHoveredState(state.id);
      }}

      onMouseLeave={() => {
        setHoveredState(null);
      }}

      onClick={() => handleStateClick(state)}
    >
      <title>{state.title}</title>
    </path>
  );
})}

        </svg>

      </div>

    </div>
  );
}
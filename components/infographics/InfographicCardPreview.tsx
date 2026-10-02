"use client";

import React from "react";
import { Infographic } from "@/types";
import {
  Scale,
  Ruler,
  Clock,
  Layers,
  Coins,
  Sparkles,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

interface InfographicCardPreviewProps {
  infographic: Infographic;
  onSelect: () => void;
}

function getCategoryIcon(category: string) {
  switch (category?.toLowerCase()) {
    case "length":
      return Ruler;
    case "weight":
      return Scale;
    case "volume":
      return FlaskConical;
    case "time":
      return Clock;
    case "area":
      return Layers;
    case "currency":
      return Coins;
    case "medicine":
      return Sparkles;
    default:
      return Scale;
  }
}

export default function InfographicCardPreview({
  infographic,
  onSelect,
}: InfographicCardPreviewProps) {
  const nodes = infographic.nodes || [];
  const CategoryIcon = getCategoryIcon(infographic.category);

  // Pick up to 4 clean milestone node names for the preview
  const milestoneNodes =
    nodes.length > 4
      ? [
          nodes[0],
          nodes[Math.floor(nodes.length * 0.35)],
          nodes[Math.floor(nodes.length * 0.7)],
          nodes[nodes.length - 1],
        ]
      : nodes;

  return (
    <div
      onClick={onSelect}
      className="bg-white border border-[#E8DED1] hover:border-[#B88646] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer group"
    >
      {/* Clean Top Banner */}
      <div className="bg-[#FAF7F2] border-b border-[#E8DED1] p-6 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Prominent, clean Scale / Category Icon Emblem */}
            <div className="w-13 h-13 rounded-xl bg-white border border-[#E8DED1] group-hover:border-[#B88646] flex items-center justify-center text-[#6F4E37] group-hover:text-[#B88646] shadow-sm transition-colors flex-shrink-0">
              <CategoryIcon className="w-7 h-7" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EAE2D5] text-[#6F4E37] uppercase tracking-wider">
                  {infographic.category}
                </span>
                {infographic.icon_emoji && (
                  <span className="text-sm">{infographic.icon_emoji}</span>
                )}
              </div>
              <p className="text-xs text-[#7A6E65] font-medium">
                {infographic.period || "Traditional Metrology"}
              </p>
            </div>
          </div>

          <span className="text-xs text-[#7A6E65] bg-white border border-[#E8DED1] px-2.5 py-1 rounded-md font-medium flex-shrink-0">
            {nodes.length} Stages
          </span>
        </div>

        {/* Minimal, uncluttered progression chips */}
        {milestoneNodes.length > 0 && (
          <div className="flex items-center gap-1.5 mt-5 pt-3 border-t border-[#E8DED1]/70">
            {milestoneNodes.map((node, idx) => (
              <React.Fragment key={node.id || idx}>
                <span className="text-[11px] font-medium text-[#4A3426] bg-white px-2 py-1 rounded border border-[#E8DED1] truncate">
                  {node.name.split(" ")[0]}
                </span>
                {idx < milestoneNodes.length - 1 && (
                  <span className="text-[#A09080] text-xs font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif font-bold text-lg text-[#2E2A26] group-hover:text-[#6F4E37] transition-colors line-clamp-1 mb-2">
            {infographic.title}
          </h3>
          <p className="text-xs text-[#7A6E65] leading-relaxed line-clamp-2">
            {infographic.subtitle || infographic.description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#F0EAE0] mt-5 flex items-center justify-between">
          <span className="text-[11px] text-[#A09080] italic truncate max-w-[200px]">
            {infographic.historical_source
              ? `Source: ${infographic.historical_source}`
              : "Traditional Metrology"}
          </span>

          <span className="flex items-center gap-1.5 text-xs font-semibold text-[#6F4E37] group-hover:text-[#B88646] group-hover:translate-x-1 transition-all flex-shrink-0">
            Explore Flowchart <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Infographic, FlowchartNode } from "@/types";
import {
  Layers,
  Calculator,
  Scale,
  Ruler,
  Clock,
  Coins,
  Sparkles,
  FlaskConical,
  X,
  Zap,
} from "lucide-react";

interface InfographicFlowchartProps {
  infographic: Infographic;
  onClose: () => void;
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

export default function InfographicFlowchart({
  infographic,
  onClose,
}: InfographicFlowchartProps) {
  const nodes = infographic.nodes || [];
  const connections = infographic.connections || [];
  const calculator = infographic.calculator;

  const [activeTab, setActiveTab] = useState<"flowchart" | "calculator" | "table">("flowchart");
  const [selectedNode, setSelectedNode] = useState<FlowchartNode | null>(
    nodes[Math.min(2, nodes.length - 1)] || null
  );

  // Calculator State
  const defaultCalcUnit = calculator?.units[Math.min(1, (calculator?.units.length || 1) - 1)]?.id || "";
  const [calcInputUnit, setCalcInputUnit] = useState<string>(defaultCalcUnit);
  const [calcInputValue, setCalcInputValue] = useState<number>(1);

  const CategoryIcon = getCategoryIcon(infographic.category);

  // Compute calculated values for calculator
  const computeConversions = () => {
    if (!calculator || !calculator.units.length) return [];
    const sourceUnitObj =
      calculator.units.find((u) => u.id === calcInputUnit) || calculator.units[0];
    const baseValue = calcInputValue * sourceUnitObj.factor_to_base;

    return calculator.units.map((u) => {
      const convertedValue = baseValue / u.factor_to_base;
      const metricValue = convertedValue * u.metric_factor;
      return {
        unit: u,
        convertedValue,
        metricValue,
      };
    });
  };

  const computedConversions = computeConversions();

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-[#E8DED1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header — Clean, warm, matching website theme */}
        <div className="bg-[#4A3426] text-white p-5 sm:p-6 relative flex-shrink-0 border-b border-[#36251B]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pr-10 flex items-start gap-4">
            {/* Scale / Category Icon Avatar */}
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#B88646] shadow-sm flex-shrink-0">
              <CategoryIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                {infographic.icon_emoji && (
                  <span className="text-xl">{infographic.icon_emoji}</span>
                )}
                <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#B88646] text-white">
                  {infographic.category}
                </span>
                {infographic.state && (
                  <span className="text-xs text-[#C8B8A2] bg-white/10 px-2 py-0.5 rounded-full">
                    📍 {infographic.state}
                  </span>
                )}
                <span className="text-xs text-[#C8B8A2]">
                  • {nodes.length} Stages Hierarchy
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                {infographic.title}
              </h2>

              {infographic.subtitle && (
                <p className="text-xs sm:text-sm text-[#C8B8A2] leading-relaxed">
                  {infographic.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Clean Navigation Bar */}
        <div className="flex items-center justify-between px-5 bg-[#FAF7F2] border-b border-[#E8DED1] py-2">
          <div className="flex gap-2">
            {[
              { id: "flowchart", label: "Flowchart & Hierarchy", icon: Layers },
              { id: "calculator", label: "Live Converter", icon: Calculator },
              { id: "table", label: "Conversion Table", icon: Scale },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#6F4E37] text-white shadow-sm"
                      : "bg-white text-[#7A6E65] border border-[#E8DED1] hover:border-[#6F4E37] hover:text-[#2E2A26]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <span className="text-xs text-[#A09080] hidden sm:inline">
            {nodes.length} Stages in Pipeline
          </span>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
          {/* TAB 1: FLOWCHART VIEW */}
          {activeTab === "flowchart" && (
            <div className="space-y-5">
              {/* Horizontal Scrollable Pipeline */}
              <div className="bg-[#FAF7F2] border border-[#E8DED1] rounded-xl p-4 overflow-x-auto">
                <div className="min-w-max flex items-center gap-2.5 py-3 px-1">
                  {nodes.map((node, index) => {
                    const isSelected = selectedNode?.id === node.id;
                    const conn = connections[index];

                    return (
                      <React.Fragment key={node.id}>
                        {/* Node Card */}
                        <div
                          onClick={() => setSelectedNode(node)}
                          className={`p-3 rounded-xl border-2 transition-all cursor-pointer min-w-[145px] max-w-[160px] text-center ${
                            isSelected
                              ? "bg-white border-[#6F4E37] shadow-md scale-105"
                              : "bg-white/90 border-[#E8DED1] hover:border-[#B88646]"
                          }`}
                        >
                          <span className="text-[10px] text-[#A09080] font-semibold block mb-0.5">
                            Step {index + 1}
                          </span>

                          <h4 className="font-bold text-sm text-[#2E2A26] truncate">
                            {node.name}
                          </h4>
                          {node.vernacular && (
                            <p className="text-xs text-[#6F4E37] font-serif truncate mt-0.5">
                              {node.vernacular}
                            </p>
                          )}

                          <div className="mt-2 pt-1.5 border-t border-[#F0EBE4]">
                            <span className="text-[11px] font-medium text-[#4A3426] block truncate">
                              {node.relation_text || "Base Unit"}
                            </span>
                          </div>

                          {node.metric_equiv && (
                            <p className="text-[11px] text-[#059669] font-mono mt-1 truncate">
                              {node.metric_equiv}
                            </p>
                          )}
                        </div>

                        {/* Connector Tag */}
                        {index < nodes.length - 1 && (
                          <div className="flex flex-col items-center px-1 flex-shrink-0">
                            <div className="bg-[#6F4E37] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                              {conn?.label || "➔"}
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Selected Node Details Card */}
              {selectedNode && (
                <div className="bg-white border border-[#E8DED1] rounded-xl p-4 sm:p-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#F0EBE4]">
                    <div>
                      <span className="text-[11px] font-medium text-[#A09080] uppercase tracking-wider block">
                        Selected Stage
                      </span>
                      <h4 className="font-serif text-xl font-bold text-[#2E2A26]">
                        {selectedNode.name}{" "}
                        {selectedNode.vernacular && (
                          <span className="text-[#6F4E37] text-base font-normal font-sans">
                            ({selectedNode.vernacular})
                          </span>
                        )}
                      </h4>
                    </div>

                    {selectedNode.metric_equiv && (
                      <div className="text-right">
                        <span className="text-[10px] text-[#7A6E65] block uppercase">Modern Equivalent</span>
                        <span className="font-mono text-sm font-bold text-[#059669]">
                          {selectedNode.metric_equiv}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#2E2A26] leading-relaxed">
                    {selectedNode.desc || "Traditional measurement unit in Indian metrology."}
                  </p>

                  {selectedNode.historical_note && (
                    <div className="p-3 bg-[#FAF7F2] rounded-lg text-xs text-[#7A6E65]">
                      <strong className="text-[#2E2A26]">Context:</strong> {selectedNode.historical_note}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: LIVE CONVERTER */}
          {activeTab === "calculator" && (
            <div className="space-y-4">
              {calculator && calculator.units.length > 0 ? (
                <>
                  <div className="bg-[#FAF7F2] border border-[#E8DED1] rounded-xl p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                      <div>
                        <label className="block text-xs font-bold text-[#4A3426] mb-1">
                          Quantity
                        </label>
                        <input
                          type="number"
                          min="0.01"
                          step="any"
                          value={calcInputValue}
                          onChange={(e) => setCalcInputValue(parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-2 bg-white border border-[#E8DED1] rounded-lg text-base font-mono font-bold text-[#2E2A26] focus:outline-none focus:border-[#6F4E37]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-[#4A3426] mb-1">
                          Unit
                        </label>
                        <select
                          value={calcInputUnit}
                          onChange={(e) => setCalcInputUnit(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-[#E8DED1] rounded-lg text-sm text-[#2E2A26] focus:outline-none focus:border-[#6F4E37]"
                        >
                          {calculator.units.map((u) => (
                            <option key={u.id} value={u.id}>
                              {u.name} ({u.symbol})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {computedConversions.map(({ unit, convertedValue, metricValue }) => {
                      const isCurrent = unit.id === calcInputUnit;
                      return (
                        <div
                          key={unit.id}
                          className={`p-3 rounded-lg border ${
                            isCurrent
                              ? "bg-amber-50/70 border-[#B88646]"
                              : "bg-white border-[#E8DED1]"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-xs text-[#2E2A26]">
                              {unit.name}
                            </span>
                            <span className="text-[10px] text-[#A09080] font-mono">
                              {unit.symbol}
                            </span>
                          </div>

                          <div className="text-lg font-mono font-bold text-[#6F4E37]">
                            {convertedValue >= 10000 || (convertedValue < 0.001 && convertedValue > 0)
                              ? convertedValue.toExponential(2)
                              : convertedValue.toLocaleString(undefined, { maximumFractionDigits: 3 })}
                          </div>

                          <div className="text-[11px] text-[#059669] font-mono pt-1.5 border-t border-[#F0EBE4] mt-1.5 flex justify-between">
                            <span>Metric:</span>
                            <span>
                              {metricValue >= 1000 || metricValue < 0.01
                                ? metricValue.toPrecision(3)
                                : metricValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}{" "}
                              {unit.metric_unit}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <p className="text-sm text-[#7A6E65] text-center py-8">
                  Live converter reference is not applicable for this category.
                </p>
              )}
            </div>
          )}

          {/* TAB 3: CONVERSION TABLE */}
          {activeTab === "table" && (
            <div className="space-y-4">
              {infographic.conversion_table && infographic.conversion_table.length > 0 ? (
                <div className="bg-white border border-[#E8DED1] rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#FAF7F2] text-[#4A3426] border-b border-[#E8DED1] font-semibold">
                      <tr>
                        <th className="py-2.5 px-3">Traditional Unit</th>
                        <th className="py-2.5 px-3">Ratio</th>
                        <th className="py-2.5 px-3">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F0EBE4]">
                      {infographic.conversion_table.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#FAF7F2]/50">
                          <td className="py-2.5 px-3 font-semibold text-[#2E2A26]">{row.from}</td>
                          <td className="py-2.5 px-3 font-mono font-bold text-[#6F4E37]">{row.ratio}</td>
                          <td className="py-2.5 px-3 text-xs text-[#7A6E65]">{row.notes || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="space-y-2">
                  {nodes.map((n, i) => (
                    <div key={n.id} className="flex items-center justify-between p-2.5 bg-[#FAF7F2] rounded-lg border border-[#E8DED1] text-xs">
                      <span className="font-semibold text-[#2E2A26]">
                        {i + 1}. {n.name} {n.vernacular && `(${n.vernacular})`}
                      </span>
                      <span className="font-mono text-[#059669] font-medium">{n.metric_equiv || "—"}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#FAF7F2] border-t border-[#E8DED1] flex items-center justify-between text-xs text-[#7A6E65] flex-shrink-0">
          <span className="italic truncate">
            {infographic.historical_source ? `Source: ${infographic.historical_source}` : "Desinaap Metrology Archive"}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#6F4E37] text-white rounded-lg hover:bg-[#4A3426] font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

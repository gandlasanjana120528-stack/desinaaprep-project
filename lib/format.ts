/** Turns a state name into its /regions/<slug> URL segment ("Jammu & Kashmir" → "jammu-and-kashmir"). */
export function stateSlug(name: string): string {
  return name.toLowerCase().replace(/&/g, "and").trim().replace(/\s+/g, "-");
}

/**
 * Plain, generic label for the "Type / Category" column.
 * The source spreadsheets use very specific wording ("Basket Measure",
 * "Land Survey", "Sack Measure" …). On screen we show a small, consistent set:
 * Weight, Length, Distance, Area / Land Measurement, Volume, Currency, Time,
 * Count, Storage Container, Load Measure, Measuring Tool, Textile Measure, Other.
 */
export function displayMeasurementType(rawType?: string, category?: string): string {
  const t = (rawType || "").toLowerCase().replace(/\([^)]*\)/g, " ");
  const has = (re: RegExp) => re.test(t);
  if (t.trim()) {
    if (has(/calendar|time/)) return "Time";
    if (has(/coin|currenc|monet|money|financ|payment|tax|tribute|treasury|account|exchange|wealth|wage|allowance|bride|value/)) return "Currency";
    if (has(/land|survey|area|irrigat|cultivat|threshing|runoff|groundwater/)) return "Land Measurement";
    if (has(/distance|route|stage/)) return "Distance";
    if (has(/yarn|warp|weft|thread|loom|weav|cloth|fabric|garment|silk|textile|fibre|cotton|fineness/)) return "Textile Measure";
    if (has(/weight|gold|bullion|precious|seed|medicin|dosage|drop/)) {
      return has(/volume|capacity/) ? "Weight / Volume" : "Weight";
    }
    if (has(/basket|sack|vessel|container|bowl|granary|storage|warehouse/)) return "Storage Container";
    if (has(/bundle|package|heap|load|cart|cargo|boat|maritime|transport|bulk/)) return "Load Measure";
    if (has(/rod|alignment|proportion|structur|architect|construction/)) return "Measuring Tool";
    if (has(/volume|capacity|liquid|serving|grain/)) return "Volume";
    if (has(/length|width|body/)) return "Length";
    if (has(/count|quantity/)) return "Count";
  }
  const c = (category || "").toLowerCase();
  const byCategory: Record<string, string> = {
    weight: "Weight", length: "Length", distance: "Distance", volume: "Volume", capacity: "Volume",
    area: "Land Measurement", "area measurement": "Land Measurement", currency: "Currency",
    time: "Time", count: "Count",
  };
  return byCategory[c] ?? "Other";
}

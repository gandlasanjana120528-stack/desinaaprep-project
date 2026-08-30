import { NextRequest, NextResponse } from "next/server";
import { SAMPLE_MEASUREMENTS } from "@/lib/data";

// ── Normalise for fuzzy matching ─────────────────────────────────────────────
function norm(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, " ").trim();
}

// ── Find matching measurement from local data ─────────────────────────────────
function findMeasurement(question: string) {
  const q = norm(question);
  return SAMPLE_MEASUREMENTS.find((m) => {
    const candidates = [
      m.name_english,
      m.name_sanskrit ?? "",
      m.name_telugu ?? "",
      m.name_hindi ?? "",
      m.slug,
      ...(m.local_names ?? []),
      ...(m.tags ?? []),
    ];
    return candidates.some((c) => c && q.includes(norm(c)) && norm(c).length > 1);
  }) ?? null;
}

// ── Build Gemini Prompt ───────────────────────────────────────────────────────
function buildPrompt(question: string, m: typeof SAMPLE_MEASUREMENTS[0] | null) {
  const system = m
    ? `You are DESINAAP Assistant — a warm, friendly guide to India's traditional measurement systems.
The user asked about a real unit from the database. Use ONLY the data below. Never invent values.

Unit: ${m.name_english}${m.name_sanskrit ? ` (${m.name_sanskrit} / ${m.name_telugu ?? ""})` : ""}
Meaning: ${m.meaning ?? ""}
Modern Equivalent: ${m.modern_equivalent ?? "not recorded"}
Conversion: ${m.conversion_formula ?? ""}
Historical Context: ${m.historical_context ?? ""}
Also known as: ${(m.local_names ?? []).join(", ")}
Used in: ${(m.used_in ?? []).join(", ")}

If this is a body-based unit (fingers, hands, arm span, etc.), enthusiastically describe the hand or body gesture and invite the user to physically try it themselves. Keep the reply warm, conversational, and to 2–4 sentences.`
    : `You are DESINAAP Assistant — a warm, friendly expert on India's traditional measurement systems (Angula, Hasta, Vitasti, Mana, Tola, Khanduga, and more).
If asked about a measurement unit, give an accurate, friendly answer. For body-based measurements, describe the hand gesture and encourage the user to try it.
If it's a greeting or small talk, reply warmly and invite them to ask about a traditional measurement.
Never fabricate measurement values. Keep replies to 2–4 sentences.`;

  return `${system}\n\nUser Question: ${question}`;
}

// ── POST /api/chat ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const question: string = body?.question?.trim() ?? "";

    if (!question) {
      return NextResponse.json({ reply: "Please ask me something!" });
    }

    // Delay artificially to simulate network and show off the "thinking" animation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const match = findMeasurement(question);

    if (match) {
      // Mocked rich response for a matched measurement
      let reply = `The **${match.name_english}**${match.name_sanskrit ? ` (${match.name_sanskrit})` : ""} is a traditional unit of ${match.category}. `;
      if (match.meaning) reply += `${match.meaning}. `;
      if (match.modern_equivalent) reply += `In modern terms, it's roughly ${match.modern_equivalent}. `;
      
      // Add fake gesture suggestion for body-based units
      if (["angula", "hasta", "vitasti"].includes(match.slug)) {
        reply += `\n\n🤌 *Try it yourself:* Use your own body to see how long one ${match.name_english} is!`;
      }
      
      return NextResponse.json({ reply: reply.trim() });
    }

    // Small-talk / fallback response
    const fallbackReplies = [
      "Hello! I'm the DESINAAP Assistant. I know all about traditional Indian measurements like Angula, Hasta, and Tola. What would you like to know?",
      "I might not know the answer to that specific question, but you can ask me about traditional Indian units of length, volume, or weight!",
      "I'm still learning! Try asking me about 'Angula', 'Hasta', or 'Mana' to see what I can do."
    ];
    const randomFallback = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];

    return NextResponse.json({ reply: randomFallback });
  } catch (err) {
    console.error("[chat] Unexpected error:", err);
    return NextResponse.json({
      reply: "Something went wrong on my end — please try again in a bit!",
    });
  }
}



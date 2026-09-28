import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { SAMPLE_MEASUREMENTS } from "@/lib/data";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "dummy-key-for-build" });

// ── Normalise text for fuzzy matching ─────────────────────────────────────────
function norm(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").trim();
}

const STOP_WORDS = new Set(["what", "who", "where", "how", "why", "is", "are", "do", "does", "in", "the", "a", "an", "of", "and", "or", "to", "for", "with", "units", "used", "measurements", "traditional"]);

// ── Find measurements relevant to the question ────────────────────────────────
function findRelevantMeasurements(question: string, limit = 15) {
  const q = norm(question);
  const words = q.split(/\s+/).filter((w) => w.length > 2 && !STOP_WORDS.has(w));

  const scored = SAMPLE_MEASUREMENTS.map((m) => {
    const candidates = [
      m.name_english,
      m.name_hindi ?? "",
      m.name_sanskrit ?? "",
      m.name_telugu ?? "",
      ...(m.local_names ?? []),
      ...(m.tags ?? []),
      ...(m.states ?? []),
      m.category,
      m.sector,
      ...(m.used_in ?? []),
    ].map(norm);

    const score = words.reduce((acc, word) => {
      return acc + (candidates.some((c) => c.includes(word)) ? 1 : 0);
    }, 0);

    return { m, score };
  });

  // Sort by relevance, take top N
  return scored
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.m);
}

// ── Format a measurement for the prompt ──────────────────────────────────────
function formatUnit(m: (typeof SAMPLE_MEASUREMENTS)[0]): string {
  const parts = [
    `• ${m.name_english}${m.name_hindi ? ` (${m.name_hindi})` : ""}${m.name_sanskrit ? ` / ${m.name_sanskrit}` : ""}`,
    m.local_names?.length ? `  Also: ${m.local_names.join(", ")}` : "",
    `  Category: ${m.category} | Sector: ${m.sector}`,
    m.states?.length ? `  States: ${m.states.join(", ")}` : "",
    m.meaning ? `  Meaning: ${m.meaning}` : "",
    m.modern_equivalent ? `  ≈ ${m.modern_equivalent}` : "",
    m.conversion_formula ? `  Conversion: ${m.conversion_formula}` : "",
    m.used_in?.length ? `  Used in: ${m.used_in.join(", ")}` : "",
  ].filter(Boolean);
  return parts.join("\n");
}

// ── POST /api/chat ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const question: string = body?.question?.trim() ?? "";

    if (!question) {
      return NextResponse.json({ reply: "Please ask me something!" });
    }

    // Find relevant units for context
    const relevantUnits = findRelevantMeasurements(question, 20); // Get up to 20 units
    const contextBlock =
      relevantUnits.length > 0
        ? `## Relevant measurements from database:\n${relevantUnits.map(formatUnit).join("\n\n")}`
        : `## Note: No specific unit matched the question. Answer generally based on your knowledge of traditional Indian measurements.`;

    const systemPrompt = `You are DESINAAP Assistant — a warm, knowledgeable expert on India's traditional measurement systems.

${contextBlock}

## GUIDELINES
- Use ONLY the data above when citing specific values — never fabricate numbers
- If no data matches, say you don't know rather than hallucinating
- Keep responses to 2–5 sentences, or a short bullet list when listing multiple units
- Use simple, friendly language with occasional emojis (📏 ⚖️ 🌾 🏺)`;

    const completion = await groq.chat.completions.create({
      model: "qwen/qwen3.6-27b",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question },
      ],
      temperature: 0.6,
      max_tokens: 1500,
    });

    let rawReply = completion.choices[0]?.message?.content?.trim() ?? "I couldn't generate a response — please try again!";
    
    // Strip <think>...</think> block if present
    rawReply = rawReply.replace(/<think>[\s\S]*?<\/think>/g, "").trim();

    return NextResponse.json({ reply: rawReply });
  } catch (err) {
    console.error("[chat] Groq API error:", err);
    return NextResponse.json({
      reply: "Something went wrong on my end — please try again in a bit!",
    });
  }
}

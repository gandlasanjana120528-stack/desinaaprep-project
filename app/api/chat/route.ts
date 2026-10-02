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
function findRelevantMeasurements(question: string, limit = 40) {
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

  let results = scored
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.m);
    
  // Fallback: if user wants a quiz but no specific unit is matched, provide some random ones to quiz on.
  if (results.length === 0 && (q.includes("quiz") || q.includes("test"))) {
    results = [...SAMPLE_MEASUREMENTS].sort(() => 0.5 - Math.random()).slice(0, 10);
  }

  return results;
}

// ── Format a measurement for the prompt ──────────────────────────────────────
function formatUnit(m: (typeof SAMPLE_MEASUREMENTS)[0]): string {
  const parts = [
    `• ${m.name_english}${m.name_hindi ? ` (${m.name_hindi})` : ""}${m.name_telugu ? ` [${m.name_telugu}]` : ""}`,
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

function generateLocalFallbackReply(question: string): string {
  const matches = findRelevantMeasurements(question, 3);
  if (matches.length > 0) {
    const list = matches.map((m) => {
      const names = [m.name_english, m.name_hindi ? `(${m.name_hindi})` : "", m.name_telugu ? `[${m.name_telugu}]` : ""].filter(Boolean).join(" ");
      const details = [
        `• **${names}**`,
        m.meaning ? `  ${m.meaning}` : "",
        m.modern_equivalent ? `  *Equivalent:* ${m.modern_equivalent}` : "",
        m.conversion_formula ? `  *Conversion:* ${m.conversion_formula}` : "",
        m.used_in?.length ? `  *Used in:* ${m.used_in.join(", ")}` : "",
      ].filter(Boolean).join("\n");
      return details;
    }).join("\n\n");

    return `Here is what I found in our database 📏:\n\n${list}`;
  }

  return `I'm DESINAAP Assistant! 📏 Ask me about traditional Indian units like **Angula** (finger width), **Hasta** (cubit), **Vitasti** (span), **Mana**, **Guntha**, or **Bigha**!`;
}

// ── POST /api/chat ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const question: string = body?.question?.trim() ?? "";

    if (!question) {
      return NextResponse.json({ reply: "Please ask me something!" });
    }

    const apiKey = process.env.GROQ_API_KEY;
    const isApiKeyMissingOrPlaceholder = !apiKey || apiKey.includes("your_groq_api_key");

    if (isApiKeyMissingOrPlaceholder) {
      return NextResponse.json({ reply: generateLocalFallbackReply(question) });
    }

    // Find relevant units for context
    const relevantUnits = findRelevantMeasurements(question, 40);
    const contextBlock =
      relevantUnits.length > 0
        ? `## Relevant measurements from database:\n${relevantUnits.map(formatUnit).join("\n\n")}`
        : `## Note: No specific unit matched the question. Answer generally based on your knowledge of traditional Indian measurements.`;

    const systemPrompt = `You are DESINAAP Assistant — a warm, knowledgeable, and highly interactive expert on India's traditional measurement systems.

${contextBlock}

## GUIDELINES & BEHAVIOR
1. **Length & Formatting (CRITICAL)**:
   - Keep your answers concise, clear, and easy to read.
   - Do NOT write long paragraphs. Your answers should be no more than 2-4 short sentences.
   - If providing multiple points or measurements, use nicely formatted bullet points.
   - The response should be quick and scannable for a chat interface.

2. **Language & Tone**:
   - You MUST reply in the language the user speaks. If they speak Telugu, reply in Telugu. If Hindi, in Hindi. If English, in English.
   - If they use mixed languages (like Telugu-English or Hindi-English), reply in the same mixed language naturally.
   - Be very friendly, greet people warmly, and be highly interactive.
   - Use occasional emojis (📏 ⚖️ 🌾 🏺).

3. **Accuracy & AI Knowledge**:
   - The context block contains up to 40 highly relevant measurements from the website. Use this data whenever applicable.
   - If the user asks a question about a measurement that is NOT in the context block, do NOT just say you don't know. Use your own extensive AI knowledge base to provide a highly accurate and proper answer about traditional Indian measurements.
   - Ensure your answers are culturally accurate and do not hallucinate false measurements.
   - When asked about a specific state, provide exact measurements from the context or your knowledge that belong to that state.

4. **Interactive Explanations**:
   - If asked about "Angula" (finger breadth) or "Hasta" (cubit), explicitly instruct the user to interact using their own body (e.g., "Look at your middle finger joint for Angula!", or "Measure from your elbow to the tip of your middle finger for Hasta!").

5. **Quiz Mode**:
   - If a user mentions they have learned some topics today and asks you to take a quiz, ENTER QUIZ MODE.
   - Encourage them warmly.
   - Ask them 1 or 2 short, interactive questions based on the measurements in the context block (or general traditional measurements).
   - Wait for their answer, evaluate it, and help them learn playfully.
`;

    try {
      const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
        temperature: 0.6,
        max_tokens: 1500,
      });

      let rawReply = completion.choices[0]?.message?.content?.trim() ?? "I couldn't generate a response — please try again!";
      rawReply = rawReply.replace(/<think>[\s\S]*?<\/think>/g, "").trim();

      return NextResponse.json({ reply: rawReply });
    } catch (groqErr) {
      console.error("[chat] Groq API error, falling back to local search:", groqErr);
      return NextResponse.json({ reply: generateLocalFallbackReply(question) });
    }
  } catch (err) {
      console.error("[chat] General error:", err);
      return NextResponse.json({
        reply: "Something went wrong on my end — please try again in a bit!",
      });
  }
}


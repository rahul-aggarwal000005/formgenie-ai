// app/api/ai/fill/route.ts
import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: NextRequest) {
  const { formSchema, userContext } = await req.json();

  const prompt = `
You are an intelligent assistant that fills out workplace forms.
Here's the form structure:
${formSchema}

User's context:
${userContext}

Please return ONLY the filled JSON object with appropriate values.
Do NOT include any explanations, notes, or markdown formatting.
Return a valid JSON object ONLY.
`;

  try {
    const chat = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    let result = chat.choices[0]?.message?.content || "{}";

    // Remove markdown triple backticks if any
    result = result.trim();
    if (result.startsWith("```json")) {
      result = result
        .replace(/^```json/, "")
        .replace(/```$/, "")
        .trim();
    } else if (result.startsWith("```")) {
      result = result.replace(/^```/, "").replace(/```$/, "").trim();
    }

    const filledForm = JSON.parse(result);

    return NextResponse.json({ filledForm });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "AI fill failed" }, { status: 500 });
  }
}

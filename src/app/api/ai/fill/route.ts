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

Please return a filled JSON object with appropriate values and brief justifications (if needed).
`;

  try {
    const chat = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const result = chat.choices[0]?.message?.content;
    return NextResponse.json({ filledForm: result });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "AI fill failed" }, { status: 500 });
  }
}

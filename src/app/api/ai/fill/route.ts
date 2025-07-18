// app/api/ai/fill/route.ts
import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: NextRequest) {
  const {
    formSchema,
    userContext: _userContext,
    useRealData,
  } = await req.json();

  const userContext = useRealData
    ? _userContext
    : _userContext ??
      "Generate realistic fake values for a dummy employee filling this form.";

  const prompt = `
You are an intelligent assistant that fills out workplace forms.
Here's the form structure:
${formSchema}

User's context:
${userContext}

Please return a JSON object where each key is a field name and the value is an object containing:
- "value": the filled value for the field
- "explanation": a short explanation about the field or why the value is appropriate

Example:
{
  "Full Name": {
    "value": "John Doe",
    "explanation": "This is the employee's full legal name."
  },
  "Email": {
    "value": "john.doe@example.com",
    "explanation": "Used for communication and account verification."
  }
}

Return ONLY the valid JSON object without markdown or extra text.
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

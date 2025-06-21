"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AIFormFiller() {
  const [result, setResult] = useState("");

  async function handleFill() {
    const res = await fetch("/api/ai/fill", {
      method: "POST",
      body: JSON.stringify({
        context: "I'm joining as a software engineer on July 1st.",
      }),
    });
    const json = await res.json();
    setResult(json.filledForm);
  }

  return (
    <div className="space-y-4">
      <Button onClick={handleFill}>🧠 Auto-Fill Form with AI</Button>
      {result && (
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

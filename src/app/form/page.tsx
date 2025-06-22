"use client";

import { PageWrapper } from "@/components/PageWrapper";
import { AIFormFiller } from "@/components/AIFormFiller";
import { FormPreview } from "@/components/FormPreview";
import { useState } from "react";
import { FieldValue } from "@/types";

export default function Home() {
  const [result, setResult] = useState("");

  // Parse JSON result if possible
  let parsedResult: Record<string, FieldValue> | null = null;
  try {
    parsedResult = result ? JSON.parse(result) : null;
  } catch {
    parsedResult = null;
  }

  return (
    <PageWrapper fullWidth={!!result}>
      <div
        className={`py-10 flex flex-col md:flex-row md:space-x-10 ${
          result
            ? "items-start w-full"
            : "items-center justify-center min-h-[60vh]"
        }`}
      >
        <div
          className={`flex-1 ${
            result ? "max-w-none" : "max-w-5xl flex justify-center"
          }`}
        >
          <AIFormFiller result={result} setResult={setResult} />
        </div>

        {result && parsedResult && (
          <div className="flex-1 max-w-none w-full">
            <FormPreview filledForm={parsedResult} />
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

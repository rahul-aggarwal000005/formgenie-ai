"use client";

import { useState } from "react";
import { SchemaInput } from "@/components/SchemaInput";
import { ActionButtons } from "@/components/ActionButtons";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function Home() {
  const [schema, setSchema] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFillForm = async () => {
    setLoading(true);
    const res = await fetch("/api/ai/fill", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formSchema: schema,
        userContext: "User is an IT professional filling a registration form.",
      }),
    });
    const data = await res.json();
    setResult(JSON.stringify(data.filledForm, null, 2));
    setLoading(false);
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "filled-form.json";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          🧾 FormGenie 🧞
        </h1>
        <p className="text-gray-600 text-center">
          Paste your form schema and let AI auto-fill it with realistic values.
        </p>

        <SchemaInput schema={schema} setSchema={setSchema} />
        <ActionButtons
          loading={loading}
          schema={schema}
          result={result}
          onFill={handleFillForm}
          onDownload={handleDownload}
        />
        {result && <ResultDisplay result={result} />}
      </div>
    </div>
  );
}

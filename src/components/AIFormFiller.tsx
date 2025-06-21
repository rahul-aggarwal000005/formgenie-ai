"use client";

// libs
import { useState } from "react";

// components
import { Button } from "@/components/ui/button";
import { ExportButton } from "./ExportButton";

// context
import { useFormContext } from "@/app/context/FormContext";

export function AIFormFiller() {
  const { formData } = useFormContext();
  const [filledForm, setFilledForm] = useState<Record<string, string> | null>(
    null
  );

  const handleFillForm = async () => {
    const res = await fetch("/api/ai/fill", {
      method: "POST",
      body: JSON.stringify({
        formSchema: formData,
        userContext: "User is an IT professional filling a registration form.",
      }),
    });
    const data = await res.json();
    try {
      setFilledForm(data.filledForm);
    } catch {
      console.log("something went wrong");
    }
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      <Button onClick={handleFillForm}>Fill Form with AI</Button>
      {filledForm && <ExportButton data={filledForm} />}
    </div>
  );
}

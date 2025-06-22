import React, { useState } from "react";
import { toast } from "sonner";
import { UserContextInput } from "./UserContextInput";
import { ActionButtons } from "./ActionButtons";
import { LoadingOverlay } from "./LoadingOverlay";
import { SchemaInputWrapper } from "./SchemaInputWrapper";

interface Props {
  result: string;
  setResult: (res: string) => void;
}

export const AIFormFiller: React.FC<Props> = ({ result, setResult }) => {
  const [schema, setSchema] = useState("");
  const [userContext, setUserContext] = useState("");
  const [useRealData, setUseRealData] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFillForm = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ai/fill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formSchema: schema,
          userContext,
          useRealData,
        }),
      });

      if (!res.ok) {
        throw new Error(`API responded with status ${res.status}`);
      }

      const data = await res.json();

      if (!data.filledForm) {
        throw new Error("AI did not return filled form.");
      }

      let flattenedForm = {};

      if (Array.isArray(data.filledForm.fields)) {
        flattenedForm = Object.fromEntries(
          data.filledForm.fields.map((field: Record<string, string>) => [
            field.label,
            field.value || "",
          ])
        );
      } else {
        flattenedForm = data.filledForm;
      }

      setResult(JSON.stringify(flattenedForm, null, 2));
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong while filling the form.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
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
    <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 space-y-6 mb-6 md:mb-0 relative">
      {loading && <LoadingOverlay />}
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        🧾 FormGenie 🧞
      </h1>
      <p className="text-gray-600 text-center">
        Paste your form schema and let AI auto-fill it with realistic values.
      </p>

      <SchemaInputWrapper schema={schema} setSchema={setSchema} />
      <UserContextInput
        userContext={userContext}
        setUserContext={setUserContext}
        useRealData={useRealData}
        setUseRealData={setUseRealData}
      />
      <ActionButtons
        loading={loading}
        schema={schema}
        userContext={userContext}
        useRealData={useRealData}
        result={result}
        onFill={handleFillForm}
        onDownload={handleDownload}
      />
    </div>
  );
};

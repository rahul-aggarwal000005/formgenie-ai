"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export function FormUploader() {
  const [schema, setSchema] = useState("");

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Paste your form schema (JSON or plain description)
      </label>
      <Textarea
        rows={10}
        placeholder="e.g. Name, Email, PAN, Date of Joining..."
        value={schema}
        onChange={(e) => setSchema(e.target.value)}
      />
    </div>
  );
}

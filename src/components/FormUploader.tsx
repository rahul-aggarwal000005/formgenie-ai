"use client";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "@/app/context/FormContext";

export function FormUploader() {
  const { setFormData, formData } = useFormContext();

  const handleUpload = (json: string) => {
    setFormData(json);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Paste your form schema (JSON or plain description)
      </label>
      <Textarea
        rows={10}
        placeholder="e.g. Name, Email, PAN, Date of Joining..."
        value={formData}
        onChange={(e) => handleUpload(e.target.value)}
      />
    </div>
  );
}

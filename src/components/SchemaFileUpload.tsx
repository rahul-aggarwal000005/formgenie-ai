import React from "react";
import { toast } from "sonner";

interface SchemaFileUploadProps {
  setSchema: (schema: string) => void;
}

export const SchemaFileUpload: React.FC<SchemaFileUploadProps> = ({
  setSchema,
}) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        const formatted = JSON.stringify(json, null, 2);
        setSchema(formatted);
        toast.success("Form schema uploaded successfully.");
      } catch {
        toast.error("Invalid JSON file.");
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">
        Upload JSON Schema
      </label>
      <input
        type="file"
        accept="application/json"
        onChange={handleFileUpload}
        className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-indigo-50 file:text-indigo-700
                   hover:file:bg-indigo-100"
      />
    </div>
  );
};

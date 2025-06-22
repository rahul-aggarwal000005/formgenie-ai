import React, { useState } from "react";
import { SchemaInput } from "./SchemaInput";
import { SchemaFileUpload } from "./SchemaFileUpload";

interface Props {
  schema: string;
  setSchema: (value: string) => void;
}

export const SchemaInputWrapper: React.FC<Props> = ({ schema, setSchema }) => {
  const [mode, setMode] = useState<"manual" | "upload">("manual");

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="inputMode"
            value="manual"
            checked={mode === "manual"}
            onChange={() => setMode("manual")}
          />
          <span>Manual Input</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="inputMode"
            value="upload"
            checked={mode === "upload"}
            onChange={() => setMode("upload")}
          />
          <span>Upload JSON</span>
        </label>
      </div>

      {mode === "manual" ? (
        <SchemaInput schema={schema} setSchema={setSchema} />
      ) : (
        <SchemaFileUpload setSchema={setSchema} />
      )}
    </div>
  );
};

// app/form/components/ExportButton.tsx
"use client";

import { Button } from "@/components/ui/button";

export function ExportButton({ data }: { data: Record<string, string> }) {
  const downloadJSON = (data: Record<string, string>) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "form.json";
    link.click();
  };

  return (
    <Button onClick={() => downloadJSON(data)} variant="secondary">
      Export as JSON
    </Button>
  );
}

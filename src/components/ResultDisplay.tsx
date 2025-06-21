import React from "react";

interface Props {
  result: string;
}

export const ResultDisplay: React.FC<Props> = ({ result }) => (
  <div className="bg-gray-100 p-4 rounded-md overflow-x-auto max-h-80 text-sm font-mono whitespace-pre-wrap border border-gray-200">
    {result}
  </div>
);

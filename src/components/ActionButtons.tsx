import React from "react";

interface Props {
  loading: boolean;
  schema: string;
  result: string;
  onFill: () => void;
  onDownload: () => void;
}

export const ActionButtons: React.FC<Props> = ({
  loading,
  schema,
  result,
  onFill,
  onDownload,
}) => (
  <div className="flex justify-center gap-4">
    <button
      onClick={onFill}
      disabled={loading || !schema}
      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 transition"
    >
      {loading ? "Filling..." : "Fill Form with AI"}
    </button>

    {result && (
      <button
        onClick={onDownload}
        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        Export as JSON
      </button>
    )}
  </div>
);

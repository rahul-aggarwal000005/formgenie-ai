"use client";

import React from "react";

interface FieldData {
  value: string;
  explanation: string;
}

interface Props {
  filledForm: Record<string, FieldData>;
}

export function FormPreview({ filledForm }: Props) {
  if (!filledForm || Object.keys(filledForm).length === 0) {
    return <p className="text-gray-500">No form data to display.</p>;
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md mx-auto w-full max-w-none md:max-w-md">
      <h3 className="text-xl font-semibold mb-6 text-indigo-900">
        Filled Form Preview
      </h3>
      <dl className="divide-y divide-gray-200">
        {Object.entries(filledForm).map(([key, { value, explanation }]) => (
          <div key={key} className="py-4 flex items-center justify-between">
            <dt className="font-semibold text-gray-800 flex items-center gap-2">
              {key}
              {explanation && <Tooltip explanation={explanation} />}
            </dt>
            <dd className="text-gray-900 text-lg">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Tooltip({ explanation }: { explanation: string }) {
  return (
    <div className="relative group inline-block">
      <svg
        className="w-5 h-5 ai-color cursor-pointer"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 16v-4m0-4h.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div
        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200
        bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-indigo-100 text-xs rounded px-2 py-1 w-48 text-center z-10 pointer-events-none shadow-lg"
      >
        {explanation}
      </div>
    </div>
  );
}

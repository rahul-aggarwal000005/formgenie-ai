"use client";

import React from "react";

interface Props {
  filledForm: Record<string, string>;
}

export function FormPreview({ filledForm }: Props) {
  if (!filledForm || Object.keys(filledForm).length === 0) {
    return <p className="text-gray-500">No form data to display.</p>;
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-md mx-auto w-full w-full max-w-none md:max-w-md">
      <h3 className="text-lg font-semibold mb-4 text-indigo-900">
        Filled Form Preview
      </h3>
      <dl className="divide-y divide-gray-200">
        {Object.entries(filledForm).map(([key, value]) => (
          <div key={key} className="py-2 flex justify-between">
            <dt className="font-medium text-gray-700">{key}</dt>
            <dd className="text-gray-900">{String(value)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

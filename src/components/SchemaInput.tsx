import React from "react";

interface Props {
  schema: string;
  setSchema: (value: string) => void;
}

export const SchemaInput: React.FC<Props> = ({ schema, setSchema }) => (
  <div className="flex flex-col">
    <label htmlFor="schema" className="mb-1 font-medium text-gray-700">
      Form Schema
    </label>
    <textarea
      id="schema"
      className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm resize-none overflow-y-auto"
      rows={6}
      placeholder="Example: Full Name, Email, Phone Number, Joining Date"
      value={schema}
      onChange={(e) => setSchema(e.target.value)}
    />
  </div>
);

import React from "react";

interface Props {
  schema: string;
  setSchema: (value: string) => void;
}

export const SchemaInput: React.FC<Props> = ({ schema, setSchema }) => (
  <textarea
    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
    rows={10}
    placeholder="Example: Full Name, Email, Phone Number, Joining Date"
    value={schema}
    onChange={(e) => setSchema(e.target.value)}
  />
);

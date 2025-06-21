"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface Props {
  userContext: string;
  setUserContext: (val: string) => void;
  useRealData: boolean;
  setUseRealData: (val: boolean) => void;
}

export function UserContextInput({
  userContext,
  setUserContext,
  useRealData,
  setUseRealData,
}: Props) {
  return (
    <div className="space-y-4 mt-4">
      <Label htmlFor="userContext">User Context</Label>
      <textarea
        id="userContext"
        className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm resize-none overflow-y-auto"
        rows={4}
        placeholder="E.g. Rahul is an HR intern joining in July."
        value={userContext}
        onChange={(e) => setUserContext(e.target.value)}
      />

      <div className="flex items-center space-x-2 mt-2">
        <Switch
          checked={useRealData}
          onCheckedChange={setUseRealData}
          id="useRealData"
        />
        <Label htmlFor="useRealData">
          {useRealData ? "Use Real Data Context" : "Use Test Data"}
        </Label>
      </div>
    </div>
  );
}

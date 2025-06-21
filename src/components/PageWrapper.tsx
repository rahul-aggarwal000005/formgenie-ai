import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PageWrapper({ children }: Props) {
  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      {children}
    </main>
  );
}

import React from "react";
interface Props {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function PageWrapper({ children, fullWidth = false }: Props) {
  return (
    <main
      className={`mx-auto px-6 ${
        fullWidth ? "max-w-7xl" : "max-w-5xl"
      } overflow-auto`}
    >
      {children}
    </main>
  );
}

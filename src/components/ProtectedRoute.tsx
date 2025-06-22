"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { LoadingOverlay } from "./LoadingOverlay";

interface Props {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: Props) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn("google");
    }
  }, [status]);

  if (status === "loading") {
    return <LoadingOverlay />;
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return <LoadingOverlay />;
}

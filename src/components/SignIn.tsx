"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignInButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-2 px-5 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
    >
      <FcGoogle className="w-6 h-6" />
      Sign in with Google
    </button>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FormProvider } from "./context/FormContext";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FormGenie – AI Form Assistant for Internal Teams",
  description:
    "Auto-fill and explain workplace forms with AI-powered assistance. Save time on HR, Finance, and Admin forms.",
  keywords:
    "AI form assistant, auto-fill forms, GPT-4 form filling, workplace forms, HR onboarding, finance reimbursement",
  authors: [{ name: "Rahul Aggarwal" }],
  openGraph: {
    title: "FormGenie 🧞 – AI Form Assistant for Internal Teams",
    description:
      "Auto-fill and explain workplace forms with AI-powered assistance.",
    url: "https://yourdomain.com", // replace with your deployed URL
    siteName: "FormGenie",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // optional social preview image
        width: 1200,
        height: 630,
        alt: "FormGenie AI Form Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "FormGenie 🧞 – AI Form Assistant for Internal Teams",
    description:
      "Auto-fill and explain workplace forms with AI-powered assistance.",
    creator: "@RahulAg17063121",
    images: ["https://x.com/RahulAg17063121/photo"],
  },
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animated-bg`}
      >
        <SessionProvider>
          <FormProvider>
            <Navbar />
            {children}
            <Toaster />
          </FormProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

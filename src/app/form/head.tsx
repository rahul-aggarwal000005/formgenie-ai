// app/form/head.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fill & Export Forms Effortlessly | FormGenie",
  description:
    "Upload your form schema or enter it manually, then let AI auto-fill and explain every field. Export your filled forms as JSON or PDF.",
  keywords:
    "form filling, AI form auto-fill, form export, JSON export, PDF export, workplace forms",
  openGraph: {
    title: "Fill & Export Forms Effortlessly | FormGenie",
    description:
      "AI-powered form filling and exporting tool for workplace forms.",
    url: "https://yourdomain.com/form",
    siteName: "FormGenie",
    images: [
      {
        url: "https://yourdomain.com/form-og-image.png",
        width: 1200,
        height: 630,
        alt: "FormGenie Form Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fill & Export Forms Effortlessly | FormGenie",
    description: "AI-powered form filling and exporting tool.",
    images: ["https://yourdomain.com/form-og-image.png"],
  },
};

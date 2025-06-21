import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">FormGenie 🧞</h1>
      <p className="text-lg text-center max-w-xl">
        Upload your form, let AI do the magic, and export it as JSON!
      </p>
      <Link
        href="/form"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Get Started
      </Link>
    </main>
  );
}

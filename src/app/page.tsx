import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 text-center">
      <h1 className="text-6xl font-bold text-indigo-900 mb-4 tracking-tight">
        🧞‍♂️ FormGenie
      </h1>
      <p className="text-xl text-indigo-700 max-w-2xl mb-8">
        Say goodbye to repetitive form filling. <br />
        Just upload your schema and let AI auto-fill it for you—instantly.
      </p>

      <Link
        href="/form"
        className="inline-block bg-indigo-600 text-white text-lg px-6 py-3 rounded-xl font-medium shadow hover:bg-indigo-700 transition"
      >
        Get Started
      </Link>
    </main>
  );
}

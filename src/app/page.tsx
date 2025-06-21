import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center overflow-hidden">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-900 mb-4 tracking-tight">
        🧞‍♂️ FormGenie
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-indigo-700 max-w-2xl mb-8 leading-relaxed">
        Say goodbye to repetitive form filling. <br />
        Just upload your schema and let AI auto-fill it for you—instantly.
      </p>

      <Link
        href="/form"
        className="inline-block bg-indigo-600 text-white text-base sm:text-lg px-5 py-3 rounded-xl font-medium shadow hover:bg-indigo-700 transition"
      >
        Get Started
      </Link>
    </main>
  );
}

import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 py-16 bg-gradient-to-br from-indigo-50 to-indigo-100">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-indigo-900 mb-6 leading-tight">
            🧞‍♂️ FormGenie
          </h1>
          <p className="text-lg sm:text-xl text-indigo-700 mb-10 max-w-lg leading-relaxed">
            Say goodbye to repetitive form filling. Just upload your schema and
            let AI auto-fill it for you—instantly.
          </p>
          <Link
            href="/form"
            className="inline-block bg-indigo-600 text-white text-lg px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition"
            aria-label="Get Started with FormGenie"
          >
            Get Started
          </Link>
        </div>

        {/* Right Image / Illustration */}
        <div className="md:w-1/2 max-w-md">
          {/* Placeholder image, replace with your own */}
          <img
            src="/hero-illustration.svg"
            alt="Illustration showing AI form autofill"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 text-left">
        <Feature
          title="Save Time & Effort"
          description="Automatically fill out forms using AI, reducing manual work and errors."
          Icon={AiOutlineClockCircle}
        />
        <Feature
          title="Easy to Use"
          description="Just upload your form schema and watch FormGenie handle the rest."
          Icon={FiCheckCircle}
        />
        <Feature
          title="Secure & Private"
          description="Your data stays safe and is only used to generate your form responses."
          Icon={MdSecurity}
        />
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto mt-24 text-left">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">
          What Our Users Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <Testimonial
            name="Anita Sharma"
            role="HR Manager"
            quote="FormGenie saved our team countless hours during onboarding. The AI fills forms quickly and accurately."
          />
          <Testimonial
            name="Ravi Kumar"
            role="Finance Lead"
            quote="The AI-powered autofill is a game changer for expense reimbursements. Highly recommend!"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-indigo-600 text-center text-sm">
        &copy; {new Date().getFullYear()} Rahul Aggarwal — FormGenie. All rights
        reserved.
      </footer>
    </main>
  );
}

function Feature({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.ElementType;
}) {
  return (
    <div className="flex flex-col items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 cursor-pointer">
      <Icon className="w-16 h-16 text-indigo-600" />
      <h3 className="text-xl font-semibold text-indigo-900">{title}</h3>
      <p className="text-indigo-700">{description}</p>
    </div>
  );
}

function Testimonial({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <p className="text-indigo-900 italic mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="font-semibold text-indigo-800">{name}</p>
      <p className="text-indigo-600 text-sm">{role}</p>
    </div>
  );
}

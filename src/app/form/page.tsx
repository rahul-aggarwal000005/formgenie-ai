import { FormUploader } from "@/components/FormUploader";
import { AIFormFiller } from "@/components/AIFormFiller";

export default function FormPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">FormGenie 🧞‍♂️</h1>
      <FormUploader />
      <AIFormFiller />
    </main>
  );
}

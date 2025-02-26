import { headers } from "next/headers";

export default async function HomePage() {
  const headersList = await headers();
  const greetingsFromKV = headersList.get("X-Greeting");
  const greeting = greetingsFromKV || "Hello";

  const isExperimentEnabled = headersList.get("X-Experiment");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{greeting}</h1>
      { isExperimentEnabled ? (<div>Experiment status: enabled</div>) : null }
    </main>
  );
}

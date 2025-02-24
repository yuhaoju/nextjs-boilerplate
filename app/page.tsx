import { headers } from "next/headers";

const greetings: Record<string, string> = {
  US: "Hello",
  CN: "你好",
  JP: "こんにちは",
  FR: "Bonjour",
  DE: "Hallo",
  ES: "Hola",
  IN: "नमस्ते",
};

export default async function HomePage() {
  // 读取 Middleware 传递的 Headers
  const headersList = await headers();
  const country = headersList.get("X-User-Country") || "Unknown";
  const timezone = headersList.get("X-User-Timezone") || "UTC";
  const storedGreeting = headersList.get("X-Greeting") || "Greeting Words";

  // 根据国家代码获取问候语，默认为 "Hello"
  const greeting = storedGreeting || greetings[country] || "Hello";

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{greeting} from {country}!</h1>
      <p>Your timezone is: {timezone}</p>
    </main>
  );
}

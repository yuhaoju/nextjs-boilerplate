export const runtime = "nodejs";

export async function GET(request: Request) {
  const userAgent = request.headers.get("user-agent");
  const region = request.headers.get("x-vercel-ip-country");
  const language = request.headers.get("accept-language");

  return new Response(`Hello from Node.js!
    User Agent: ${userAgent}
    Region: ${region}
    Language: ${language}`
  );
}

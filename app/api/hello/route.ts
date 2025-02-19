export const runtime = "edge";

export async function GET(request: Request) {
  // Get device and user info from request
  const userAgent = request.headers.get("user-agent");

  // Get user region and language
  const region = request.headers.get("x-vercel-ip-country");
  const language = request.headers.get("accept-language");

  // Return user agent info as string
  return new Response(`Hello from Edge!
    User Agent: ${userAgent}
    Region: ${region}
    Language: ${language}`
  );
}

export const runtime = "edge";

export async function GET(request: Request) {
  // Get device and user info from request
  const userAgent = request.headers.get("user-agent");

  // Return user agent info as string
  return new Response(`Hello from Edge! ${userAgent}`);
}

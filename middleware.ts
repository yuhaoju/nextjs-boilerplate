import { NextRequest, NextResponse } from "next/server";
import { get } from '@vercel/edge-config';

async function geoLocationMiddleware(request: NextRequest, response: NextResponse) {
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
  const timezone = request.headers.get('x-vercel-ip-timezone') || 'UTC';

  response.headers.set('X-User-Country', country);
  response.headers.set('X-User-Timezone', timezone);

  return { request, response };
}

async function greetingMiddleware(request: NextRequest, response: NextResponse) {
  const greeting = await get('greeting');
  response.headers.set('X-Greeting', String(greeting));

  return { request, response };
}

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();

  ({ request, response } = await geoLocationMiddleware(request, response));
  ({ request, response } = await greetingMiddleware(request, response));

  return response;
}

export const config = {
  matcher: ['/'],
};

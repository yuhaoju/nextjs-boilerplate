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

  // 调用地理位置中间件
  ({ request, response } = await geoLocationMiddleware(request, response));

  // 调用问候语中间件
  ({ request, response } = await greetingMiddleware(request, response));

  return response;
}

export const config = {
  matcher: ['/', '/welcome'],
};

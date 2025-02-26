import { NextRequest, NextResponse } from "next/server";
import { get } from '@vercel/edge-config';

export const config = {
  matcher: ['/'],
};

// This middleware function is executed for every request to the root path.
export async function middleware(request: NextRequest) {
  let response = NextResponse.next();

  response = await geoLocationMiddleware(request, response);
  response = await greetingMiddleware(request, response);

  return response;
}

// This middleware redirects users from England to a privacy page.
async function geoLocationMiddleware(request: NextRequest, response: NextResponse): Promise<NextResponse> {
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown';

  if (country === 'GB') {
    return NextResponse.redirect('https://tubitv.com/static/b2bprivacy');
  }

  return response;
}

// This middleware function retrieves a greeting from the edge config and adds it to the response headers.
async function greetingMiddleware(request: NextRequest, response: NextResponse): Promise<NextResponse> {
  const greeting = await get('greeting');
  response.headers.set('X-Greeting', String(greeting));

  return response;
}

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // 获取用户地理位置
  const country = request.headers.get("x-vercel-ip-country") || "Unknown";
  const timezone = request.headers.get("x-vercel-ip-timezone") || "UTC";

  // 创建响应，并添加自定义头部
  const response = NextResponse.next();
  response.headers.set("X-User-Country", country);
  response.headers.set("X-User-Timezone", timezone);

  return response;
}

// 仅匹配 "/" 页面，其他路由不触发 Middleware
export const config = {
  matcher: "/",
};

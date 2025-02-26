/**
 * 🚀 Vercel Edge Runtime
 *
 * 📌 基于 V8（Web API 环境，类似 Deno），适用于低延迟、全球分布式的任务。
 *
 * ✅ 特点：
 * - 轻量级 & 高性能：运行在 V8 Isolates（类似 Cloudflare Workers），无服务器启动延迟。
 * - 全球部署：代码在 Vercel Edge Network 上执行，请求就近路由。
 * - 适用于短生命周期任务：如 Middleware、认证、A/B 测试、个性化推荐。
 * - 支持 Web 标准 API（fetch、Request、Response）。
 * - ❌ 不支持 Node.js 原生 API（如 fs、crypto）。
 *
 * ❌ 限制：
 * - 不能直接访问数据库（需使用 HTTP API 或 Vercel KV/Postgres）。
 * - 不支持 Node.js 模块（如 fs、path、stream）。
 * - 受限的计算能力（不适合 CPU 密集型任务，如图像处理）。
 */

export const runtime = "edge";

export async function GET(request: Request) {
  const userAgent = request.headers.get("user-agent");
  const region = request.headers.get("x-vercel-ip-country");
  const language = request.headers.get("accept-language");

  return new Response(`Hello from Edge!
    User Agent: ${userAgent}
    Region: ${region}
    Language: ${language}`
  );
}

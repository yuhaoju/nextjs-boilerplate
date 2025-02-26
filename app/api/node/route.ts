/**
 * 🚀 Vercel Node.js Runtime
 *
 * 📌 基于 AWS Lambda，适用于传统 Serverless API 任务。
 *
 * ✅ 特点：
 * - 支持 Node.js 生态：可以使用 fs、crypto、stream、mysql、pg 等模块。
 * - 可直接访问数据库（如 MySQL、PostgreSQL、MongoDB）。
 * - 适用于长生命周期任务（如后端 API、Webhook 处理、文件上传）。
 * - 运行在 AWS Lambda，因此可能存在一定的冷启动延迟。
 *
 * ❌ 限制：
 * - 比 Edge Functions 慢，特别是首次请求（Cold Start）可能会有较长的响应时间。
 */

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

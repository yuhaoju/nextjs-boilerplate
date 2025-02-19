export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">React 开发指南</h1>
      <p className="text-gray-700">
        React 是一个用于构建用户界面的 JavaScript 库，它的组件化思想可以大幅提升开发效率。使用 React 时，我们通常会结合状态管理，如
        <strong> useState、useEffect </strong>，以实现动态交互。
      </p>
      <p className="text-gray-700 mt-2">
        在 Next.js 中，我们可以使用 <strong>Server Components</strong> 来优化页面渲染，减少客户端 JavaScript 负担。例如：
      </p>
      <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
        {`export default function Page() {
  return <h1>这是一个 Server Component</h1>;
}`}
      </pre>
      <p className="text-gray-700 mt-2">
        总之，React 结合 Next.js 可以让前端开发更加高效，同时提供更好的性能优化体验。
      </p>
    </div>
  );
}

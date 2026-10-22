import Navbar from "@/components/Navbar";

// This is the export default for page.tsx
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto p-8 mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Welcome to the Platform / أهلاً بك في المنصة
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Try clicking the Theme and Language buttons in the navigation bar! 
          <br/>
          جرب الضغط على أزرار اللغة والوضع الليلي في شريط التصفح!
        </p>
      </div>
    </main>
  );
}
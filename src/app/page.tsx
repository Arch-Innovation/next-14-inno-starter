import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold">Hello, World!</h1>
        <p className="text-2xl mt-4">This is a Next.js app.</p>
      </div>
    </main>
  );
}

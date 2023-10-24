import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <h1>
        Page - <strong className="font-bold">Login</strong>
      </h1>
      <Link href="/">Home</Link>
      <Link href="/character">Character</Link>
    </main>
  );
}

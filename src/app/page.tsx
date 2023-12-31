import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <h1 className="bg-red-950">Landing page</h1>
      <Link href="/login">Login</Link>
      <Link href="/character">Character</Link>
    </main>
  );
}

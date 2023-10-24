"use client";

import DiceRoller from "@/components/DiceRoller";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <h1>
        Page - <strong className="font-bold">Character</strong>
      </h1>
      <div className="flex flex-row gap-4">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </div>
      <div>
        <DiceRoller dice="-1d6+10" />
      </div>
    </main>
  );
}

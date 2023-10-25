"use client";

import DiceRoller from "@/components/DiceRoller";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <h1>
        Page - <strong className="font-bold">Character</strong>
      </h1>
      <div className="mx-auto">
        <DiceRoller dice="4d6" />
      </div>
      <div className="flex flex-row gap-4">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
      </div>
    </main>
  );
}

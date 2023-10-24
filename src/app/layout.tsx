import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "@/app/globals.css";

const titillium_web = Titillium_Web({
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "fichaScript",
  description:
    "Ficha de Tormenta 20, para gerenciar seus herois. De jogador para jogador.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${titillium_web.className} bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}

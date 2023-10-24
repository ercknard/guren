import "@/styles/globals.css";
import "@/styles/App.css";
import type { Metadata } from "next";
import AOScall from "@/components/Aos";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ercknard",
  description:
    // "Ercknard web portfolio is a digital exhibit of my creative journey. Explore my projects, designs, and achievements all in one place. Get to know my skills and passion through a collection of my best work, beautifully presented for your inspiration and insight.",
    "moew",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <AOScall />
    </html>
  );
}

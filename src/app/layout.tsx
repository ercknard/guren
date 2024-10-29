import { Inter } from "next/font/google";
import type { Metadata } from "next";
import AOScall from "@/components/Aos";
import StarsCanvas from "@/components/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ercknard | Home",
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
      <body className={inter.className}>
        {" "}
        {/* <StarsCanvas /> */}
        {children}
      </body>
      <AOScall />
    </html>
  );
}

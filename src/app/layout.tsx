import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const getInter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexis Software",
  description: "Best Software for your activity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getInter.className}  bg-[#000000] `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

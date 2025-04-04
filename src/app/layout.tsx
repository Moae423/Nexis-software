import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const getInter = Inter({
  subsets: ["latin"],
});

const getpoppins = Poppins({
  subsets: ["latin"],
  weight: "400",
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
      <body
        className={`${getpoppins.className} ${getInter.className}  bg-[#000000] `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

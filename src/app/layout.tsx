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
  title: "Nexis Insurance | Comprehensive Protection for Your Future",
  description: "Best solution for your activity",
  keywords: [
    "Nexis Insurance",
    "Insurance Indonesia",
    "Health insurance",
    "Business protection",
    "Asset protection",
    "Nexis Software",
  ],
  openGraph: {
    title: "Nexis Insurance | Comprehensive Protection for Your Future",
    description: "Best solution for your activity",
    url: "https://nexis-software.vercel.app/",
    siteName: "Nexis",
    images: [
      {
        url: "https://nexis-software.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexis Software",
      },
    ],
    locale: "id-ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexis Insurance | Comprehensive Protection for Your Future",
    description: "Best solution for your activity",
    images: ["https://nexis-software.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="xya6wf6E9hNw2jDSU9huKZ1GGcDO6pMcZM18Qqe0Peo"
        />
      </head>
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

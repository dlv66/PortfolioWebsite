import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leeroi Villamiel - Portfolio",
  description: "Portfolio website showcasing my professional and personal work",
  openGraph: {
    title: "Leeroi Villamiel - Portfolio",
    description: "Portfolio website by Denis Leeroi Villamiel",
    url: "https://leeroiv.dev",
    images: ["https://leeroiv.dev/Portfolio%20website%20thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

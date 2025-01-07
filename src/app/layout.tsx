import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { inter } from "@/config/font";




export const metadata: Metadata = {
  title: "Teslo Shop",
  description: "Una tienda diferente al alcance de tus manos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

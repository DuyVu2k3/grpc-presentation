import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chương 9: Streaming Nâng Cao - gRPC Presentation",
  description: "Trình bày về gRPC Streaming, HTTP/2, so sánh REST vs gRPC, 4 loại RPC và Bi-directional Streaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小宣个人网站",
  description: "A Spline-powered opening hero for an independent creator site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}

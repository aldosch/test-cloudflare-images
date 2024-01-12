import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Cloudflare Images",
  description:
    "Investigating potential bugs with Cloudflare Images and different Next.js versions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-purple-50">{children}</body>
    </html>
  );
}

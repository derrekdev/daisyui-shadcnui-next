import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.Js with DaisyUI and Shadcn/UI",
  description:
    "Website template for Next.js project by combining DaisyUI and Shadcn/ui components.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

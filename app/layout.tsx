import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Olawumi Olusegun",
  description: "Fullstack webdeveloper webdesign frontend backend html css tailwind css javascript typescript react nextjs node.js mongogb express.js jwt jsonwebtoken redux redux toolkit",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${recursive.className} min-h-screen`}>{children}</body>
    </html>
  );
}

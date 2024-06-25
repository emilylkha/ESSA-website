import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/navigation/navbar";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"]});

export const metadata: Metadata = {
  title: "ESSA",
  description: "Economics Student Society of Australia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        </body>
    </html>
  );
}

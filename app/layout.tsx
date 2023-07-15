// ** Import Next
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// ** Import Global CSS
import "@/styles/globals.css";

// ** Import Route
import Provider from "@/route/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

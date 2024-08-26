import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";
import Footer from "@/@components/NavsnFooters/Footer";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karla",
  description: "A tech driven perspective on customer success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
      <Footer />
    </html>
  );
}

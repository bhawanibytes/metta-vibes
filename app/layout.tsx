import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Metta Vibes",
  description: "Behavioral Health and Wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

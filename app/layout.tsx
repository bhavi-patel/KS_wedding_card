import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kush & Shruti | Wedding Invitation",
  description: "Join us to celebrate the wedding of Kush and Shruti."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
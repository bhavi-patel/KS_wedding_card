import type { Metadata } from "next";
import "./globals.css";
import { BackgroundMusic } from "@/components/background-music";

export const metadata: Metadata = {
  title: "Kush & Shruti | Wedding Invitation",
  description: "Join us to celebrate the wedding of Kush and Shruti."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
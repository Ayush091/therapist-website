import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Serena Blake – Clinical Psychologist",
  description: "Compassionate therapy for a calmer, connected life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReguPath - Navigate Regulations with AI Intelligence",
  description: "Simulate your business strategy against complex regulations. Identify risks, get legal references, and find your safe path instantly with AI-powered regulatory guidance.",
  keywords: ["regulatory compliance", "AI", "legal tech", "business strategy", "risk assessment"],
  openGraph: {
    title: "ReguPath - Navigate Regulations with AI Intelligence",
    description: "Simulate your business strategy against complex regulations. Identify risks, get legal references, and find your safe path instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

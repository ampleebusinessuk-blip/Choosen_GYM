import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chosen Gym CRM",
  description: "Gym management dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}

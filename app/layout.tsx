import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AQ — Aesthetic Intelligence",
  description: "Your AI-powered medical aesthetics guide",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="phone-frame">
          {children}
        </div>
      </body>
    </html>
  );
}

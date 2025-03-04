import type { Metadata } from "next";
import "./globals.css";
import { PortalProvider } from "@/context/PortalContext";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "KlowHub",
  description: "Aprende, Descubre, Enseña",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PortalProvider>
        <AuthProvider>
          <body className={`antialiased home_bg h-full min-h-screen`}>
            {children}
          </body>
        </AuthProvider>
      </PortalProvider>
    </html>
  );
}

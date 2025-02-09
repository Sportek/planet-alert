import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/auth";
import { UserProvider } from "@/contexts/user";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Planète Alerte",
  description: "Planète Alerte est une plateforme interactive qui permet aux citoyens de signaler incidents environnementaux et urgences locales sur une carte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen overflow-auto`,
          "flex flex-col"
        )}
      >
        <AuthProvider>
          <Header className="w-full" />
          <div className="w-full flex-1">
            <UserProvider>
              <Toaster />
              {children}
            </UserProvider>
          </div>
          <Footer className="w-full" />
        </AuthProvider>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
  title: "ImageGeniusAI",
  description: "AI-powered image manipulation tool which can be used to fill in missing parts of an image, remove unwanted objects, remove background, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={
      {
        variables: { colorPrimary: "#624cf5"}
      }}>
      <html lang="en">
        <head>
          <link rel='icon' href='/assets/images/logo-icon.svg' />
        </head>
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
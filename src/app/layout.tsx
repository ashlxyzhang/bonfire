import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NextAuthProvider from "@/context/nextAuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bonfire",
  description: "Meet Your Match",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://apis.google.com/js/platform.js" async defer />
        <meta
          name="google-signin-client_id"
          content="165358065304-09eb7dkcvdjoo44gk3o7ooi303l2sf27.apps.googleusercontent.com"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}

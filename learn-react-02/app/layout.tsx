import type { Metadata } from "next";
import "@/app/scss/globals.scss";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Learn React",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

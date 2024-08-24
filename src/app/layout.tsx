import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./globals.module.scss";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Tutor | Learning Management System",
  description: "Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.root}>
      <body
        className={inter.className}
        style={{ margin: 0, boxSizing: "border-box", padding: 0 }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

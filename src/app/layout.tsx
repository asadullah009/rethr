import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rethr",
  description: "online store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <main className="">
        <Header />
        {children}
        <Footer/>
</main>
      </body>
    </html>
  );
}

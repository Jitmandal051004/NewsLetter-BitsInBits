import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { inter } from "./fonts";

export const metadata: Metadata = {
   title: "BITSinBITS",
   description: "Devsoc Project",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
  return (
      <html lang="en">
         <body className={inter.className}>
               <Navbar/>
               <main>
                  {children}
               </main>
               <Footer />
         </body>
    </html>
  );
}

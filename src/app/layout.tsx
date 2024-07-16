import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import AuthProvider from "./context/AuthProvider";

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
         <AuthProvider>
            <body className={inter.className}>
                  <main>
                     {children}
                  </main>
            </body>
         </AuthProvider>
      </html>
   );
}

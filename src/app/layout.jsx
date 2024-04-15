import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Bio Soil",
  description: "landing page Bio Soil"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' bg-[#FAF9F4] scrollbar-hide'>
        <header>
          <Header/>
        </header>

        <main>
          {children}
        </main>
        
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={quicksand.variable}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

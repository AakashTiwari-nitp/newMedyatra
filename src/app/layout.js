import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Homepage/Navbar.jsx";
import Footer from "../components/Homepage/Footer.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medyatra",
  description: "Making Medical Travel Effortless",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-sans"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

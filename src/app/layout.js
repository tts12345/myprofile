import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/navigation";


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

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation /> 
        <div className="min-h-screen my-5">

        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

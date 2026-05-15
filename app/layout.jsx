import Navbar from "@/components/server/Navbar";
import Footer from "@/components/server/Footer";
import "./globals.css";

export const metadata = {
  title: "Karam Abbas | Portfolio",
  description: "Full-Stack Developer Portfolio",
}

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
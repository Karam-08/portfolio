import Navbar from "@/components/server/Navbar";
import Footer from "@/components/server/Footer";
import "./globals.css";

export const metadata = {
  title: "Karam Abbas | Full-Stack Developer",
  description: "Portfolio website showcasing projects, skills, and modern web development experience.",
  keywords: [
    "Next.js", "React", "Portfolio", "Web Developer"
  ]
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
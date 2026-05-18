import Link from "next/link"

import Container from "@/components/ui/Container"

import ThemeToggle from "@/components/client/ThemeToggle"

const Navbar = () => {
    return(
        <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
            <Container>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4">
                    <h2 className="text-xl font-bold">Karam Abbas</h2>
                    <div className="flex flex-wrap items-center gap-6">
                        <Link href="/" className="text-white hover:text-gray-300 no-underline">Home</Link>
                        <Link href="/about" className="text-white hover:text-gray-300 no-underline">About</Link>
                        <Link href="/projects" className="text-white hover:text-gray-300 no-underline">Projects</Link>
                        <Link href="/contact" className="text-white hover:text-gray-300 no-underline">Contact</Link>
                        <ThemeToggle></ThemeToggle>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar   
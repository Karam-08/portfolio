import Link from "next/link"

import Container from "@/components/ui/Container"

import ThemeToggle from "@/components/client/ThemeToggle"

const Navbar = () => {
    return(
        <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
            <Container>
                <ul className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h2 className="text-xl font-bold">Karam Abbas</h2>
                    <li className="hover:bg-gray-600"><Link className="text-white hover:text-gray-300 no-underline" href="/">Home</Link></li>
                    <li className="hover:bg-gray-600"><Link className="text-white hover:text-gray-300 no-underline" href="/about">About</Link></li>
                    <li className="hover:bg-gray-600"><Link className="text-white hover:text-gray-300 no-underline" href="/projects">Projects</Link></li>
                    <li className="hover:bg-gray-600"><Link className="text-white hover:text-gray-300 no-underline" href="/contact">Contact</Link></li>
                    <li className="ml-auto"><ThemeToggle/></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar   
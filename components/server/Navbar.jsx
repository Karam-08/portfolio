import ThemeToggle from "@/components/client/ThemeToggle"

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
            <ul className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-xl font-bold">Karam Abbas</h2>
                <li className="hover:bg-gray-600"><a className="text-white hover:text-gray-300 no-underline" href="/">Home</a></li>
                <li className="hover:bg-gray-600"><a className="text-white hover:text-gray-300 no-underline" href="/about">About</a></li>
                <li className="hover:bg-gray-600"><a className="text-white hover:text-gray-300 no-underline" href="/projects">Projects</a></li>
                <li className="hover:bg-gray-600"><a className="text-white hover:text-gray-300 no-underline" href="/contact">Contact</a></li>
                <li className="ml-auto"><ThemeToggle/></li>
            </ul>
        </nav>
    )
}

export default Navbar   
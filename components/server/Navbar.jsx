import ThemeToggle from "@/components/client/ThemeToggle"

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <h2 className="text-xl font-bold">Karam Abbas</h2>
                <li className="hover:bg-gray-600"><a className="text-white hover:text-gray-300 no-underline" href="/">Home</a></li>
                <li className="hover:bg-gray-600"><a className="text-white hover:text-gray-300 no-underline" href="/about">About</a></li>
                <li className="hover:bg-gray-600"><a className="text-white hover:text-gray-300 no-underline" href="/projects">Projects</a></li>
                <li className="hover:bg-gray-600"><a className="text-white hover:text-gray-300 no-underline" href="/contact">Contact</a></li>
                <li className="ml-auto">
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar   
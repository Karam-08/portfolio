import Container from "@/components/ui/Container";

const AnimatedHero = () =>{
    return(
        <section className="min-h-screen flex items-center bg-neutral-950 text-white">
            <Container>
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <p className="text-blue-400 uppercase text-sm">Full Stack Developer</p>
                    <h1 className="text-6xl md:text-8xl font-black leading-tight">Karam Abbas</h1>
                    <p className="text-neutral-400 max-w-2xl text-lg md:text-xl">I build modern, responsive, and interactive web applications using React, Next.js, and Node.js.</p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition">View Projects</button>
                        <button className="border border-neutral-700 hover:border-white px-6 py-3 rounded-xl font-semibold transition">Contact Me</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AnimatedHero
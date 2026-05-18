"use client";

import {motion} from "framer-motion";

import Container from "@/components/ui/Container";

const AnimatedHero = () =>{
    return(
        <section className="min-h-screen flex items-center bg-[var(--background)] overflow-hidden">
            <Container>
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7}}

                    className="flex flex-col gap-8 text-center md:text-left"
                >
                    <div className="space-y-4">
                        <p className="uppercase text-sm text-blue-400 font-semibold">Full Stack Developer</p>
                        <h1 className="text-4xl md:text-5xl font-bold">Karam Abbas</h1>
                        <p className="text-neutral-400 max-w-2xl text-lg md:text-xl mx-auto md:mx-0">I build responsive and interactive web applications focused on clean design, usability, and performance.</p>
                    </div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.3}}

                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a href="/projects" className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-semibold text-white">
                            View Projects
                        </a>
                        <a href="/contact" className="border border-neutral-700 hover:border-white transition px-6 py-3 rounded-2xl font-semibold">
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    )
}

export default AnimatedHero
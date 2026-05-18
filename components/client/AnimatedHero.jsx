import Container from "@/components/ui/Container";

const AnimatedHero = () =>{
    return(
        <section className="min-h-screen flex items-center bg-neutral-950 text-white overflow-hidden">
            <Container>
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <p className="text-blue-400 uppercase text-sm animate-fade-in" style={{animationDelay: '0s'}}>Full Stack Developer</p>
                    <h1 className="text-6xl md:text-8xl font-black leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>Karam Abbas</h1>
                    <p className="text-neutral-400 max-w-2xl text-lg md:text-xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>I build modern, responsive, and interactive web applications using React, Next.js, and Node.js.</p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition transform hover:scale-105 duration-200">View Projects</button>
                        <button className="border border-neutral-700 hover:border-white px-6 py-3 rounded-xl font-semibold transition transform hover:scale-105 duration-200">Contact Me</button>
                    </div>
                </div>
            </Container>
            <style>{`
                @keyframes fadeIn{
                    from{opacity: 0;}
                    to{opacity: 1;}
                }
                @keyframes fadeInUp{
                    from{
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to{
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in{
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-fade-in-up{
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    )
}

export default AnimatedHero
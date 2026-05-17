import Container from "@/components/ui/Container";

const AboutHero = () =>{
    return(
        <section className="py-32">
            <Container>
                <div className="max-w-3xl space-y-6">
                    <p className="uppercase text-sm text-blue-400 font-semibold">About Me</p>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight">Building modern web experiences.</h1>
                    <p className="text-lg font-light">I'm a front-end focused developer passionate about building responsive, interactive, and visually polished applications using modern web technologies.</p>
                </div>
            </Container>
        </section>
    )
}

export default AboutHero
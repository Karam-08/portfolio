import Container from "@/components/ui/Container";

const ProjectsHero = () =>{
    return(
        <section className="py-32">
            <Container>
                <div className="max-w-3xl space-y-6">
                    <p className="uppercase text-sm text-blue-400 font-semibold">Projects</p>
                    <h1 className="text-5xl md:text-7xl font-black">Selected Work</h1>
                    <p className="text-lg text-neutral-400">Here you can find a selection of my most valued projects and contributions.</p>
                </div>
            </Container>
        </section>
    )
}
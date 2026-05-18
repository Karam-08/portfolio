import Container from "@/components/ui/Container";

const CTASection = () =>{
    return(
        <section className="py-24">
            <Container>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-10 text-center space-y-6">
                    <h2 className="text-4xl font-bold">Let's Build Something Great</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">I'm currently open to internships, freelance work, and development opportunities.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-semibold">Contact Me</button>
                </div>
            </Container>
        </section>
    )
}

export default CTASection
import Container from "@/components/ui/Container";

import ContactForm from "@/components/client/ContactForm";

export default function Contact(){
    return(
        <main className="py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="space-y-6">
                        <p className="uppercase text-sm text-blue-400">Contact</p>
                        <h1 className="text-5xl md:text-7xl font-black">Let's work together</h1>
                        <p className="text-neutral-400 text-lg">Feel free to reach out for collaborations, freelance work, or development opportunities.</p>
                    </div>
                    <ContactForm/>
                </div>
            </Container>
        </main>
    )
}
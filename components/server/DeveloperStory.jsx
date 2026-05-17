import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const DeveloperStory = () =>{
    return(
        <section className="py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="space-y-4">
                        <h2 className="text-3xl font-bold">My Story</h2>
                        <p className="text-neutral-400">I became interested in programming after learning how websites and applications are built behind the scenes.</p>
                        <p className="text-neutral-400">Since then, I've focused on frontend development, and building user friendly experiences.</p>
                    </Card>
                    <Card className="space-y-4">
                        <h2 className="text-3xl font-bold">What I Enjoy</h2>
                        <p className="text-neutral-400">I enjoy creating clean interfaces, solving UI problems, and turning ideas into reality.</p>
                        <p className="text-neutral-400">I'm especially interested in HTML and JS frameworks such as React and NextJS.</p>
                    </Card>
                </div>
            </Container>
        </section>
    )
}

export default DeveloperStory
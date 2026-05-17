import Container from "@/components/ui/Container"
import Card from "@/components/ui/Card"
import timeline from "@/data/timeline";

const Timeline = () =>{
    return(
        <section className="py-24">
            <Container>
                <div className="space-y-10">
                    <div className="space-y-3">
                        <p className="uppercase text-sm text-blue-400">Timeline</p>
                        <h2 className="text-4xl font-bold">My Journey</h2>
                    </div>
                    <div className="space-y-6">
                        {timeline.map((item) => (
                            <Card key={item.year} className="flex flex-col md:flex-row gap-6">
                                <p className="text-blue-400 font-bold min-w-[100px]">{item.year}</p>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                                    <p className="text-neutral-400">{item.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Timeline
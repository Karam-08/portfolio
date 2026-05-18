import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

import skills from "@/data/skills";

const SkillsMatrix = () => {
    return(
        <section className="py-24">
            <Container>
                <div className="space-y-10">
                    <div className="space-y-3 text-center">
                        <p className="uppercase text-sm text-blue-400">Skills</p>
                        <h2 className="text-4xl font-bold">Technical Stack</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">Technologies and tools I use to build responsive and interactive web applications.</p>
                    </div>   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skillGroup) =>(
                            <Card key={skillGroup.category} className="space-y-6">
                                <h3 className="text-2xl font-bold">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.items.map((skill) =>(
                                        <div key={skill} className=" px-4 py-2 rounded-xl bg-neutral-700 border border-natural-700 text-sm font-medium">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SkillsMatrix
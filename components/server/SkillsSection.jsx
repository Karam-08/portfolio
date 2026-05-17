import Container from "@/components/ui/Container";
import skills from "@/data/skills";
import Card from "@/components/ui/Card";

const SkillsSection = () =>{
    return(
        <section className="py-24">
            <Container>
                <div className="space y-10">
                    <div className="space-y-3 text-center">
                        <p className="text-blue-400 uppercase text-sm">Skills</p>
                        <h2 className="text-4xl font-bold">Technologies I use</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        {skills.map((skill) =>(
                            <Card key={skill} className="flex items-center justify-center py-10 text-lg font-semibold">
                                {skill}
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SkillsSection
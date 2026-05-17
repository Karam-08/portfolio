import Container from "@/components/ui/Container";
import projects from "@/data/projects";
import ProjectCard from "@/components/server/ProjectCard";

const ProjectSection = () =>{
    return(
        <section className="py-24">
            <Container>
                <div className="space-y-10">
                    <div className="space-y-3 text-center">
                        <p className="text-blue-400 uppercase text-sm">Projects</p>
                        <h2 className="text-4xl font-bold">Featured Works</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) =>(
                            <ProjectCard key={project.id} project={project}/>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProjectSection
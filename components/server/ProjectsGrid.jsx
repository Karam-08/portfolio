import Container from "@/components/ui/Container";

import projects from "@/data/projects";

import ProjectCard from "@/components/ui/ProjectCard";

const ProjectsGrid = () =>{
    <section className="pb-24">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) =>(
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </Container>
    </section>
}

export default ProjectsGrid
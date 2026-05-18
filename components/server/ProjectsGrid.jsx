import Container from "@/components/ui/Container";

import projects from "@/data/projects";

import ProjectCard from "@/components/ui/ProjectCard";

const ProjectsGrid = () =>{
    <section>
        <Container>
            <div>
                {projects.map((project) =>(
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </Container>
    </section>
}
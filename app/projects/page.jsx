import ProjectFilter from "@/components/client/ProjectFilter";
import ProjectCard from "@/components/server/ProjectCard";

export default function Projects(){
    return(
        <main>
            <h1>My Projects</h1>
            <ProjectFilter/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </main>
    )
}
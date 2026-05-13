import ProjectFilter from "@/components/client/ProjectFilter";
import ProjectCard from "@/components/server/ProjectCard";

export default function Projects(){
    return(
        <div>
            <h1>My Projects</h1>
            <ProjectFilter/>
            <div>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    )
}
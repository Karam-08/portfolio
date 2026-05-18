import Image from "next/image";

const ProjectCard = ({project}) =>{
    return(
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden transition hover:-translate-y-1">
            <div className="relative w-full h-56"><Image src={project.image} alt={project.title} fill className="object-cover"/></div>
            <div className="p-6 space-y-5">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-neutral-400">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) =>(
                    <div key={tech} className="px-3 py-1 rounded-lg bg-neutral-700 text-sm">
                        {tech}
                    </div>
                ))}
            </div>
            <div className="flex gap-3 pt-2">
                <a href={project.github} target="_blank" className="px-4 py-2 rounded-xl border border-neutral-700 hover:border-white transition">GitHub</a>
                <a href={project.demo} target="_blank" className="px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition">Live Demo</a>
            </div>
        </div>
    )
}

export default ProjectCard
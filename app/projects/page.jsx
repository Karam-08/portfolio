"use client";

import {useState} from "react";

import ProjectFilter from "@/components/client/ProjectFilter";

import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";

import projects from "@/data/projects";

const categories = [
    "All",
    "React",
    "Node.js",
    "Express.js",
    "HTML",
    "SCSS",
    "jQuery",
]

export default function Projects(){
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.tech.includes(selectedCategory));

    return(
        <main className="py-24">
            <Container>
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <p className="uppercase text-sm text-blue-400 font-semibold">Projects</p>
                        <h1 className="text-5xl md:text-7xl font-black">My Projects</h1>
                        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">Here is a collection of interactive projects built with modern web technologies.</p>
                    </div>

                    <ProjectFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory}/>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project}/>
                        ))}
                    </div>
                </div>
            </Container>
        </main>
    )
}
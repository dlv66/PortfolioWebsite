import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../projectsData.js";

export default function ProjectsAllContent() {
    const featuredProjects = projects.filter((project) => project.category === "featured");
    const academicProjects = projects.filter((project) => project.category === "academic");
    const personalProjects = projects.filter((project) => project.category === "personal");

    return (
        <div className="flex min-w-0 flex-col gap-8 py-4 text-[#DFDFDF]">
            <h1 className="text-4xl font-bold pb-4 text-[#F5F5F5]">PROJECT ARCHIVE</h1>

            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-[#F5F5F5]">FEATURED PROJECT</h2>
                <div className="flex flex-col gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-[#F5F5F5]">ACADEMIC PROJECTS</h2>
                <div className="flex flex-col gap-8">
                    {academicProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-[#F5F5F5]">PERSONAL PROJECTS</h2>
                <div className="flex flex-col gap-8">
                    {personalProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}

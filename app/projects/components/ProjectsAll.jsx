import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../projectsData.js";

export default function ProjectsAllContent() {
    return (
        <div className="flex min-w-0 flex-col gap-4 py-4 text-[#DFDFDF]">
            <h1 className="text-xl font-semibold text-[#F5F5F5]">PROJECTS</h1>

            <div className="flex flex-col gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </div>
    );
}

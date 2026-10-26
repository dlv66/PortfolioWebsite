import Link from "next/link";

export default function ProjectCard({ project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group flex min-w-0 flex-row gap-8 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4EFF9E]"
        >
            <div
                aria-hidden="true"
                className="h-45 w-80 shrink-0 rounded-lg bg-white"
            />

            <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex min-w-0 items-center justify-between gap-2">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                        <h2 className="font-semibold leading-snug text-[#F5F5F5] group-hover:text-[#4EFF9E]">
                            {project.title}
                        </h2>
                        {project.subtitle && (
                            <p className="italic text-[#F5F5F5]">{project.subtitle}</p>
                        )}
                    </div>
                    <span aria-hidden="true" className="shrink-0 text-[#F5F5F5]">
                        →
                    </span>
                </div>

                <p className="leading-snug text-[#DFDFDF]">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="w-fit rounded-full bg-[#16804E] px-2.5 py-1 text-sm font-medium text-[#4EFF9E]"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}

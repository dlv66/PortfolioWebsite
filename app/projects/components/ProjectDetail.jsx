import Link from "next/link";

export default function ProjectDetail({ project }) {
    return (
        <article className="flex min-w-0 flex-col gap-6 py-4 text-[#DFDFDF]">
            <Link
                href="/projects"
                className="w-fit text-sm text-[#4EFF9E] hover:text-white"
            >
                ← All projects
            </Link>

            <header className="flex flex-col gap-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#4EFF9E]">
                    {project.category} project
                </p>
                <h1 className="text-3xl font-semibold text-[#F5F5F5]">
                    {project.title}
                </h1>
                {project.subtitle && (
                    <p className="italic text-[#DFDFDF]">{project.subtitle}</p>
                )}
            </header>

            <div
                aria-hidden="true"
                className="aspect-video w-full rounded-lg bg-[#D9D9D9]"
            />

            <p className="max-w-3xl leading-relaxed">{project.description}</p>

            <section className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-[#F5F5F5]">
                    Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="w-fit rounded-full bg-[#16804E] px-2.5 py-1 text-sm font-medium text-[#4EFF9E]"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </section>
        </article>
    );
}

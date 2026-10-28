import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail({ project }) {
    const projectDetails = [
        { title: "Context", content: project.context },
        { title: "Type", content: project.type },
        { title: "Tech Stack", content: project.techstack?.join(" - ") },
        { title: "Team", content: project.team },
        { title: "Status", content: project.status },
        { title: "Links", content: project.links},
    ].filter((detail) =>
        Array.isArray(detail.content) ? detail.content.length > 0 : detail.content
    );

    return (
        <article className="flex min-w-0 flex-col gap-6 py-4 text-white">
            <Link
                href="/projects"
                className="w-fit hover:underline"
            >
                <span className="text-sm font-semibold">←</span> All projects
            </Link>

            <div className="flex min-w-0 flex-row gap-18">

                {/* Left column */}
                <div className="flex min-w-0 flex-[2] flex-col gap-8">
                    {/* Project thumbnail */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#D9D9D9]">
                        {project.thumbnail && (
                            <Image
                                src={project.thumbnail}
                                alt={`${project.title} thumbnail`}
                                fill
                                sizes="(max-width: 640px) 100vw, 40vw"
                                className="object-cover"
                            />
                        )}
                    </div>

                    {/* Project title */}
                    <header className="flex flex-col">
                        <h1 className="text-3xl font-bold text-[#F5F5F5]">
                            {project.title}
                        </h1>
                    </header>

                    {/* Project dates and project role */}
                    {(project.dates || project.role?.length > 0) && (
                        <div className="flex flex-col gap-1">
                            {project.dates && (
                                <p className="font-semibold tracking-wide">
                                    {project.dates}
                                </p>
                            )}
                            {project.role?.length > 0 && (
                                <p className="font-semibold tracking-wide">
                                    Role: {project.role.join(", ")}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Other important details */}
                    <dl className="flex flex-col gap-2">
                        {projectDetails.map((detail) => (
                            <div
                                key={detail.title}
                                className="grid grid-cols-[7rem_minmax(0,1fr)] gap-x-4"
                            >
                                <dt className="font-semibold text-[#DFDFDF]">
                                    {detail.title}
                                </dt>
                                <dd className="min-w-0 break-words text-[#DFDFDF]">
                                    {detail.title === "Links" ? (
                                        <ul className="flex flex-col gap-1">
                                            {detail.content.map((link) => (
                                                <li key={link.url}>
                                                    <a
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline underline-offset-2 hover:text-white"
                                                    >
                                                        {link.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        detail.content
                                    )}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Right column */}
                <div className="flex min-w-0 flex-[3] flex-col gap-8">
                    {(project.overview?.length > 0 ||
                        project.technologies?.length > 0 ||
                        project.concepts?.length > 0 ||
                        project.process?.length > 0) && (
                        <p className="font-semibold text-[#F5F5F5]">ABOUT THIS PROJECT</p>
                    )}

                    {project.overview?.length > 0 && (
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold text-[#F5F5F5]">Project Overview</p>
                            <ul className="ml-5 max-w-3xl list-disc space-y-1 leading-relaxed text-[#DFDFDF]">
                                {project.overview.map((item, index) => (
                                    <li key={`${item}-${index}`}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {(project.technologies?.length > 0 ||
                        project.concepts?.length > 0) && (
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold">Technical Skills I Utilized</p>

                            <div className="flex flex-col gap-4">
                                {project.technologies?.length > 0 && (
                                    <div className="grid grid-cols-[9rem_minmax(0,1fr)] items-start gap-x-4">
                                        <h2 className="text-[#DFDFDF]">
                                            Technologies
                                        </h2>
                                        <div className="flex min-w-0 flex-wrap gap-2">
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
                                )}

                                {project.concepts?.length > 0 && (
                                    <div className="grid grid-cols-[9rem_minmax(0,1fr)] items-start gap-x-4">
                                        <h2 className="text-[#DFDFDF]">
                                            Concepts Applied
                                        </h2>
                                        <div className="flex min-w-0 flex-wrap gap-2">
                                            {project.concepts.map((concept) => (
                                                <span
                                                    key={concept}
                                                    className="w-fit rounded-full bg-[#16804E] px-2.5 py-1 text-sm font-medium text-[#4EFF9E]"
                                                >
                                                    {concept}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {project.process?.length > 0 && (
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold">Design & Development Process</p>
                            <ul className="ml-5 max-w-3xl list-disc space-y-1 leading-relaxed text-[#DFDFDF]">
                                {project.process.map((item, index) => (
                                    <li key={`${item}-${index}`}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

            </div>

        </article>
    );
}

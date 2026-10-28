import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectCard({ project }) {
    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group flex min-w-0 flex-row gap-8 rounded-xl p-4 transition-colors hover:bg-black/18 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4EFF9E]"
        >
            <div className="relative h-45 w-80 shrink-0 overflow-hidden rounded-lg bg-white transition-colors group-hover:bg-black/10">
                {project.thumbnail && (
                    <Image
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
                        fill
                        sizes="320px"
                        className="object-cover transition-opacity group-hover:rounded-lg group-hover:border-2 group-hover:border-green-300"
                    />
                )}
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex min-w-0 items-center gap-2">
                    <div className="flex min-w-0 flex-wrap items-center gap-2">
                        <h2 className="font-semibold leading-snug text-[#F5F5F5]">
                            {project.title}
                        </h2>
                        {project.subtitle && (
                            <p className="italic text-[#F5F5F5]">{project.subtitle}</p>
                        )}
                    </div>
                    <FaArrowRight
                        aria-hidden="true"
                        className="shrink-0 text-[#F5F5F5] transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:text-green-300"
                    />
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

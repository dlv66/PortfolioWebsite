"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import ProjectDesignGallery from "./ProjectDesignGallery.jsx";

export default function ProjectDetail({ project }) {
    const [isImageOpen, setIsImageOpen] = useState(false);

    if (project.detailLayout === "design-gallery") {
        return <ProjectDesignGallery project={project} />;
    }

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
        <article className="flex min-w-0 flex-col gap-6 pt-2 lg:pt-4 pb-4 text-white">
            <Link
                href="/projects"
                className="w-fit hover:underline pb-2 lg:pb-0"
            >
                <span className="text-sm font-semibold">←</span> All projects
            </Link>

            <div className="flex min-w-0 flex-col gap-8 lg:flex-row lg:gap-18">

                {/* Left column */}
                <div className="flex min-w-0 flex-col gap-8 lg:flex-[2]">
                    {/* Project thumbnail */}
                    <button
                        type="button"
                        aria-label={`Enlarge ${project.title} thumbnail`}
                        onClick={() => setIsImageOpen(true)}
                        className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-lg"
                    >
                        {project.thumbnail && (
                            <Image
                                src={project.thumbnail}
                                alt={`${project.title} thumbnail`}
                                fill
                                sizes="(max-width: 640px) 100vw, 40vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        )}
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 flex items-center justify-center bg-black/50 text-lg font-semibold text-white opacity-0 transition-opacity
                            group-hover:opacity-100
                            group-focus-visible:opacity-100"
                        >
                            Click to enlarge
                        </span>
                    </button>

                    <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
                        <DialogContent
                            closeButtonClassName="text-green-800 hover:text-green-800 bg-green-100/80 hover:bg-white/80 border-1 border-green-600 opacity-0 transition-opacity group-hover/image-dialog:opacity-100 focus-visible:opacity-100"
                            className="group/image-dialog w-[min(90vw,90rem)] gap-0 rounded-none bg-transparent p-0 shadow-none ring-0 sm:max-w-none"
                        >
                            <DialogTitle className="sr-only">
                                {project.title} thumbnail
                            </DialogTitle>
                            <div className="relative aspect-video w-full">
                                {project.thumbnail && (
                                    <Image
                                        src={project.thumbnail}
                                        alt={`${project.title} enlarged thumbnail`}
                                        fill
                                        sizes="90vw"
                                        className="rounded-lg object-contain"
                                    />
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>

                    <div className="flex flex-col gap-4 lg:gap-8">
                        {/* Project title */}
                        <header className="flex flex-col">
                            <h1 className="text-2xl font-bold text-[#F5F5F5] lg:text-3xl">
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
                    </div>

                    {/* Other important project details */}
                    <dl className="flex flex-col gap-4 lg:gap-2">
                        {projectDetails.map((detail) => (
                            <div
                                key={detail.title}
                                className="grid grid-cols-1 gap-y-1 lg:grid-cols-[7rem_minmax(0,1fr)] lg:gap-x-4 lg:gap-y-0"
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
                                                        download={link.download}
                                                        target={link.download ? undefined : "_blank"}
                                                        rel={link.download ? undefined : "noopener noreferrer"}
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

                {projectDetails.length > 0 && project.overview?.length > 0 && (
                    <div className="pt-4 pb-0 lg:hidden">
                        <hr className="border-[#e7fff2]/30" />
                    </div>
                )}

                {/* Right column */}
                <div className="flex min-w-0 flex-col gap-8 lg:flex-[3]">
                    {(project.overview?.length > 0 ||
                        project.technologies?.length > 0 ||
                        project.concepts?.length > 0 ||
                        project.process?.length > 0) && (
                        <p className="hidden pt-6 font-semibold text-[#F5F5F5] lg:block lg:pt-0">ABOUT THIS PROJECT</p>
                    )}

                    {project.overview?.length > 0 && (
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold text-[#F5F5F5] pt-4 lg:pt-0">Project Overview</p>
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
                            <p className="font-semibold pt-4 lg:pt-0">Technical Skills I Utilized</p>

                            <div className="flex flex-col gap-4">
                                {project.technologies?.length > 0 && (
                                    <div className="grid grid-cols-1 items-start gap-y-2 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-x-4 lg:gap-y-0">
                                        <h2 className="text-[#DFDFDF]">
                                            Technologies
                                        </h2>
                                        <div className="flex min-w-0 flex-wrap gap-2">
                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="w-fit rounded-full bg-[#08452F] px-2.5 py-1 text-sm font-medium text-[#4EFF9E]"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.concepts?.length > 0 && (
                                    <div className="grid grid-cols-1 items-start gap-y-2 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-x-4 lg:gap-y-0">
                                        <h2 className="text-[#DFDFDF]">
                                            Concepts Applied
                                        </h2>
                                        <div className="flex min-w-0 flex-wrap gap-2">
                                            {project.concepts.map((concept) => (
                                                <span
                                                    key={concept}
                                                    className="w-fit rounded-full bg-[#08452F] px-2.5 py-1 text-sm font-medium text-[#4EFF9E]"
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
                            <p className="font-semibold pt-4 lg:pt-0">Design & Development Process</p>
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

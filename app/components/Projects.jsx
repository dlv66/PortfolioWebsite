import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectsContent = () => {
    return (
        <div className="flex min-w-0 flex-col gap-4 py-4 text-[#DFDFDF]">
            <div className="flex flex-row gap-2">
                <h5 className="text-xl font-semibold text-[#F5F5F5]">
                    PROJECTS
                </h5>

            </div>

            {/* TODO: Make all projects hoverable and clickable to lead to the specific project page. */}

            <div className="flex flex-col gap-8">
                
                {/* PROJECT 1 - PisoCAKE Thesis*/}
                <div className="group flex min-w-0 flex-row gap-8 hover:bg-black/18 transition-colors rounded-xl p-4">
                    <div className="w-80 h-45 bg-white rounded-lg shrink-0 group-hover:bg-black/10 transition-colors">
                        {/* TODO: Add project thumbnail here. Make hover effect that darken screens and allows click to lead to project details*/}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-2">
                        <div className="flex w-full min-w-0 flex-row items-center gap-2">

                            <div className="flex min-w-0 flex-row items-center gap-2">
                                <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                    PisoCAKE - Finance Tracking PWA
                                </h6>
                                <p className="italic text-[#F5F5F5]">(Bachelor's Thesis)</p>
                            </div>

                            {/* Right arrow to denote clickability */}
                            <FaArrowRight className="shrink-0 text-[#F5F5F5] transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:text-green-300" />
                        </div>
                        
                        <p>
                            A finance tracking progressive web application that enabled users to set financial goals, 
                            log transactions, and monitor spending. Co-developed as a thesis project in a 4-person team.
                        </p>

                        {/* Technologies used in the project */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {[
                                "TypeScript",
                                "React",
                                "Next.js",
                                "Tailwind",
                                "Figma",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="w-fit rounded-full bg-[#16804E] px-2.5 py-1 text-sm font-medium text-[#4EFF9E]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PROJECT 2 - My Wander Diary */}
                <div className="group flex min-w-0 flex-row gap-8 hover:bg-black/18 transition-colors rounded-xl p-4">
                    <div className="w-80 h-45 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                My Wander Diary - Photo-Journal Android Mobile App
                            </h6>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>

                            {/* Right arrow to denote clickability */}
                            <FaArrowRight className="shrink-0 text-[#F5F5F5] transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:text-green-300" />
                        </div>
                        
                        <p>
                        An Android photo-journal mobile app using Kotlin and Android Studio, 
                        supporting the creation, organization, and browsing of travel entries 
                        with photos. Co-developed with a project partner.
                        </p>

                        {/* TTechnologies used in the project */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {[
                                "Kotlin",
                                "Android Studio",
                                "Figma",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="w-fit rounded-full bg-[#16804E] px-2.5 py-1 text-sm font-medium text-[#4EFF9E]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PROJECT 3 - JPD Garage Online Management System */}
                <div className="group flex min-w-0 flex-row gap-8 hover:bg-black/18 transition-colors rounded-xl p-4">
                    <div className="w-80 h-45 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                JPD Garage Online Management System
                            </h6>
                            {/* Right arrow to denote clickability */}
                            <FaArrowRight className="shrink-0 text-[#F5F5F5] transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:text-green-300" />
                        </div>

                        <p>
                            A web-based finance and inventory management system for a motorcycle
                            parts business in Laguna. Co-developed as part of a 9-person team.
                        </p>

                        {/* Technologies used in the project */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {["JavaScript", "React", "Bootstrap", "Figma"].map((tech) => (
                                <span
                                    key={tech}
                                    className="w-fit rounded-full bg-[#16804E] px-2.5 py-1 text-sm font-medium text-[#4EFF9E]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PROJECT 4 - PORTFOLIO WEBSITE */}
                <div className="flex min-w-0 flex-row gap-8 hover:bg-black/18 transition-colors rounded-xl p-4">
                    <div className="w-80 h-45 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <div className="flex min-w-0 flex-row gap-2 items-center">
                                <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                    Portfolio Website
                                </h6>
                            </div>
                            {/* Right arrow to denote clickability */}
                            <FaArrowRight className="shrink-0 text-[#F5F5F5] transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:text-green-300" />
                        </div>
                        
                        <p>
                            My responsive portfolio website built with React and Tailwind CSS, showcasing my projects and skills.
                        </p>

                        {/* TTechnologies used in the project */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {[
                                "TypeScript",
                                "React",
                                "Next.js",
                                "Tailwind",
                                "Figma",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="w-fit rounded-full bg-[#16804E] px-2.5 py-1 text-sm font-medium text-[#4EFF9E]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-2 flex justify-end">
                <div className="flex rounded-xl px-4 py-2 hover:bg-black/18 hover:text-[#8df0ba] transition-colors">
                    <a 
                        href="/projects" 
                        className="inline-flex items-center gap-2"
                    >
                        View More Projects <span className="text-sm font-semibold">→</span>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ProjectsContent;
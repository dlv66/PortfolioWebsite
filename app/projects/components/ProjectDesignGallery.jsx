"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ZoomIn } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectDesignGallery({ project }) {
    const gallery = project.gallery ?? [];
    const [carouselApi, setCarouselApi] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isCaptionExpanded, setIsCaptionExpanded] = useState(false);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }

        const updateSelectedIndex = () => {
            setSelectedIndex(carouselApi.selectedScrollSnap());
            setIsCaptionExpanded(false);
        };

        updateSelectedIndex();
        carouselApi.on("select", updateSelectedIndex);
        carouselApi.on("reInit", updateSelectedIndex);

        return () => {
            carouselApi.off("select", updateSelectedIndex);
            carouselApi.off("reInit", updateSelectedIndex);
        };
    }, [carouselApi]);

    return (
        <article className="flex min-w-0 flex-col gap-8 py-4 text-white">
            <Link 
                href="/projects" 
                className="w-fit hover:underline"
            >
                <span className="text-sm font-semibold">←</span> All projects
            </Link>

            <header className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold text-[#F5F5F5]">{project.title}</h1>
                {project.description && (
                    <p className="max-w-3xl leading-relaxed text-[#DFDFDF]">
                        {project.description}
                    </p>
                )}
            </header>

            {gallery.length > 0 ? (

                <Carousel
                    opts={{ loop: gallery.length > 1 }}
                    setApi={setCarouselApi}
                    className="w-full"
                >
                    <div className="group/frame relative overflow-hidden rounded-t-xl bg-black/30">

                        {/* Carousel content (image) */}
                        <CarouselContent>
                            {gallery.map((item, index) => (
                                <CarouselItem key={`${item.caption}-${index}`}>
                                    <div className="relative flex aspect-video items-center justify-center">
                                        {item.src ? (
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                sizes="(max-width: 640px) 100vw, 80vw"
                                                className="object-contain"
                                            />
                                        ) : (
                                            <p className="px-6 text-center text-sm text-white/65">
                                                Add an image path to this item&apos;s entry in projectsData.js.
                                            </p>
                                        )}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Stationary navigation overlay (previous and next buttons), anchored to the photo frame */}
                        <div className="pointer-events-none absolute inset-0 z-10 flex justify-between">
                            <div className="pointer-events-auto flex w-14 items-center pl-4 sm:w-20 sm:pl-3">
                                <CarouselPrevious className="static border-green-200/50 bg-black/60 
                                                           text-green-200 opacity-0 transition-opacity duration-200
                                                           hover:bg-black hover:border-white hover:text-white group-hover/frame:opacity-100
                                                             focus-visible:opacity-100 [@media(hover:none)]:opacity-100" />
                            </div>
                            <div className="pointer-events-auto flex w-14 items-center justify-end pr-4 sm:w-20 sm:pr-3">
                                <CarouselNext className="static border-green-200/50 bg-black/60 
                                                       text-green-200 opacity-0 transition-opacity duration-200 
                                                       hover:bg-black hover:border-white hover:text-white group-hover/frame:opacity-100
                                                         focus-visible:opacity-100 [@media(hover:none)]:opacity-100" />
                            </div>

                            {/* Zoom button overlay, anchored to the photo frame. Upon press, opens image in its full size in a separate browser tab */}
                            {gallery[selectedIndex]?.src && (
                                <a
                                    href={gallery[selectedIndex].src.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Open ${gallery[selectedIndex].caption || `image ${selectedIndex + 1}`} at full size in a new tab`}
                                    className="pointer-events-auto absolute bottom-3 right-3 z-20 flex size-8 items-center justify-center
                                               rounded-full border border-green-200/50 bg-black/60 text-green-200 opacity-0
                                               transition-opacity duration-200 hover:bg-black hover:text-white hover:border-white
                                               group-hover/frame:opacity-100 focus-visible:opacity-100
                                               [@media(hover:none)]:opacity-100"
                                >
                                    <ZoomIn className="size-4" />
                                </a>
                            )}
                        </div>

                    </div>

                    {/* Caption and subcaption overlay, anchored to the photo frame */}
                    {gallery[selectedIndex] && (gallery[selectedIndex].caption || gallery[selectedIndex].subcaption) && (

                        <div className="relative rounded-b-xl bg-black/20 px-5 py-3 text-sm text-[#DFDFDF]">
                            <p className={isCaptionExpanded ? "" : "line-clamp-1 pr-20"}>

                                {/* Display the caption if it exists */}
                                {gallery[selectedIndex].caption && (
                                    <span className="font-semibold text-[#F5F5F5]">
                                        {gallery[selectedIndex].caption}
                                    </span>
                                )}

                                {/* Display the subcaption if it exists */}
                                {gallery[selectedIndex].caption && gallery[selectedIndex].subcaption && " - "}
                                {gallery[selectedIndex].subcaption}
                                {isCaptionExpanded && gallery[selectedIndex].subcaption && (
                                    <>
                                        {" "}
                                        <button
                                            type="button"
                                            onClick={() => setIsCaptionExpanded(false)}
                                            className="font-semibold text-green-200 underline underline-offset-2 hover:text-white"
                                        >
                                            See less
                                        </button>
                                    </>
                                )}
                            </p>

                            {gallery[selectedIndex].subcaption && !isCaptionExpanded && (
                                <button
                                    type="button"
                                    onClick={() => setIsCaptionExpanded(true)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 px-1 text-green-200 underline underline-offset-2 hover:text-white"
                                >
                                    See more
                                </button>
                            )}
                        </div>
                    )}

                    {/* Carousel thumbnail buttons (mini scrollable gallery) */}
                    <div
                        aria-label="Choose a gallery image"
                        className="mt-4 flex snap-x gap-1 overflow-x-auto pb-2"
                    >
                        {gallery.map((item, index) => (
                            <button
                                key={`${item.caption}-${index}`}
                                type="button"
                                aria-label={`View ${item.caption || `image ${index + 1}`}`}
                                aria-pressed={selectedIndex === index}
                                onClick={() => carouselApi?.scrollTo(index)}
                                className={`relative h-14 w-14 shrink-0 snap-start overflow-hidden border-2 
                                            transition-opacity hover:opacity-100 focus-visible:outline-none 
                                            focus-visible:ring-2 focus-visible:ring-white ${
                                    selectedIndex === index
                                        ? "border-white opacity-100"
                                        : "border-transparent opacity-60"
                                }`}
                            >
                                {item.src ? (
                                    <Image
                                        src={item.src}
                                        alt=""
                                        fill
                                        sizes="56px"
                                        className="object-cover"
                                    />
                                ) : (
                                    <span className="flex h-full items-center justify-center bg-black/40 text-xs text-white/70">
                                        {index + 1} {/* Fallback in case of no image */}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                </Carousel>
                
            ) : (
                <p className="rounded-xl border border-dashed border-white/25 p-8 text-center text-[#DFDFDF]">
                    Add gallery items to this project by importing photos and adding them to projectsData.js.
                </p>
            )}

            {project.technologies?.length > 0 && (
                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-[#F5F5F5]">Tools</h2>
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
                </div>
            )}
            
            {project.legalStatement && (
                <div className="mt-2 text-[#DFDFDF]">
                    <p className="font-semibold py-2 text-[#F5F5F5]">Legal Statement</p>
                    <p>{project.legalStatement}</p>
                </div>
            )}
        </article>
    );
}

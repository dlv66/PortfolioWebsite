import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar.jsx";
import ProjectDetail from "../components/ProjectDetail.jsx";
import { getProjectBySlug, projects } from "../projectsData.js";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen font-sans text-slate-100">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 min-h-full w-full bg-gradient-to-b from-[#04844D] via-[#075631] to-[#0B3D28]">
        {/* Dot Matrix Pattern*/}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#22c55e_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.08]"
          style={{
            maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
          }}
        />
      </div>

      {/* CONTENT LAYER (Elevated above background layer) */}
      <div className="relative z-10 flex flex-col">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#04844D]/95 to-transparent py-8 backdrop-blur-[2px]">
          <Navbar />
        </div>

        {/* Section Content */}
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 pb-16 sm:px-8">
          <ProjectDetail project={project} />
        </div>
      </div>
    </main>
  );
}
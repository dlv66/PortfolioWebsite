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
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#04844D] via-[#075631] to-[#0B3D28] font-sans">
      <div className="sticky top-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#04844D]/95 to-transparent py-8 backdrop-blur-[2px]">
        <Navbar />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 pb-16 sm:px-8">
        <ProjectDetail project={project} />
      </div>
    </main>
  );
}
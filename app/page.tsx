import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import AcademicProjects from "./components/AcademicProjects.jsx";
import Skills from "./components/Skills.jsx";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#075631] font-sans">
      <div className="sticky top-0 z-50 flex justify-center items-center py-8 bg-[#075631]">
        <Navbar />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 sm:px-8">
        <Profile />

        <section id="about" className="scroll-mt-28">
          <About />
        </section>

        <section id="education" className="scroll-mt-28">
          <Education />
        </section>

        <section id="experience" className="scroll-mt-28">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-28">
          <AcademicProjects />
        </section>

        <section id="skills" className="scroll-mt-28">
          <Skills />
        </section>
      </div>
    </main>
  );
}

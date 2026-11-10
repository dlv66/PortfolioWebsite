import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import End from "./components/End.jsx";
import MobileNotice from "./components/MobileNotice";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans text-slate-100">
      <MobileNotice />
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 min-h-full w-full bg-gradient-to-b from-[#04844D] via-[#075631] to-[#164A32]">
        {/* Dot Matrix Pattern */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#22c55e_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.16]"
          style={{
            maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
          }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#04844D]/95 to-transparent py-8 backdrop-blur-[2px]">
          <Navbar />
        </div>

        {/* Section Content */}
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 pb-16 sm:px-8">
          <Profile />

          <section id="about" className="scroll-mt-28">
            <About />
          </section>

          <section id="projects" className="scroll-mt-28">
            <Projects />
          </section>

          <section id="experience" className="scroll-mt-28">
            <Experience />
          </section>

          <section id="education" className="scroll-mt-28">
            <Education />
          </section>

          <section id="skills" className="scroll-mt-28">
            <Skills />
          </section>

          <section id="contact" className="scroll-mt-28">
            <End />
          </section>
        </div>
      </div>
    </main>
  );
}
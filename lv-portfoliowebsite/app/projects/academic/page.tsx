import Profile from "@/app/components/Profile";
import Navbar from "@/app/components/Navbar";
import AcademicProjectsContent from "@/app/components/AcademicProjectsContent";

export default function AcademicProjects() {
  return (
    <main className="flex flex-col min-h-screen bg-[#075631] font-sans px-160">
      <div className="flex justify-center items-center pt-8 pb-12">
        <Navbar />
      </div>

      <div className="flex min-w-0 w-full flex-row">
        <div className="min-w-0 basis-[45%]">
          <Profile />
        </div>
        <div className="min-w-0 basis-[55%]">
          <AcademicProjectsContent />
        </div>
      </div>
    </main>
  );
}

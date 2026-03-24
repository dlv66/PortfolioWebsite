import Navbar from "../components/Navbar.jsx";
import Profile from "../components/Profile.jsx";
import EducationContent from "../components/EducationContent.jsx";

export default function Education() {
  return (
    <main className="flex flex-col min-h-screen bg-[#075631] font-sans px-160">
      <div className="flex justify-center items-center pt-8 pb-12">
        <Navbar />
      </div>

      <div className="flex flex-row w-full">
        <div className="basis-[45%]">
          <Profile />
        </div>
        <div className="basis-[55%]">
          <EducationContent />
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";

export default function Home() {
  return (
    <main className="flex-row min-h-screen bg-[#075631] font-sans">
      <div className="flex justify-center items-center py-8">
        <Navbar />
      </div>

      <div className="flex-col">
        <Profile />
      </div>
    </main>
  );
}

import { Switch } from "@/components/ui/switch";

const ProjectsContent = () => {
    return (
        <div className="flex min-w-0 flex-col gap-4 py-4 text-[#DFDFDF]">
            <div className="flex flex-row gap-2">

                <h5 className="text-xl font-semibold text-[#F5F5F5]">
                    PROJECTS
                </h5>

                {/* TODO: Add switch, then text after */}
                <Switch />
                
            </div>

            {/* TODO: Make all projects hoverable and clickable to lead to the specific project page. */}



            {/* ACADEMIC PROJECTS SECTION */}
            <div className="flex flex-col gap-4">
                {/* PROJECT 1 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <div className="flex min-w-0 flex-col">
                                <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                    PisoCAKE - Finance Tracking PWA
                                </h6>
                                <p className="text-[#4EFF9E]">(Bachelor's Thesis)</p>
                            </div>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>
                        </div>
                        
                        <p>
                            A finance tracking PWA that enabled users to set financial goals, 
                            log transactions, and monitor spending as part of a 4-person thesis team.
                        </p>

                        {/* TODO: Add technologies used in the project here. */}
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

                {/* PROJECT 2 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
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
                        </div>
                        
                        <p>
                        An Android photo-journal mobile app using Kotlin and Android Studio, 
                        supporting the creation, organization, and browsing of travel entries 
                        with photos in collaboration with a project partner.
                        </p>

                        {/* TODO: Add technologies used in the project here. */}
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

                {/* PROJECT 3 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                JPD Garage Online Management System
                            </h6>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>
                        </div>

                        <p>
                            A web-based finance and inventory management system for a motorcycle
                            parts business in Laguna as part of a 9-person team.
                        </p>

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

                {/* PROJECT 4 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                MVX - Music Rating & Review Website
                            </h6>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>
                        </div>

                        <p>
                            A full-stack MVP web application with a 3-person team, allowing users
                            to browse, rate, and review songs, albums, and artists.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "EJS",
                                "Express.js",
                                "Node.js",
                                "MongoDB",
                                "Canva",
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

                {/* PROJECT 5 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                AgriGuard - Farmer & Fisherfolk Support Mobile App Prototype
                            </h6>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>
                        </div>

                        <p>
                            A mobile app prototype focused on economic resilience and disaster
                            preparedness for Filipino farmers and fishermen as part of a 4-person
                            team.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Figma"].map((tech) => (
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

                {/* PROJECT 6 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                Design Works For Various Course Requirements
                            </h6>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>
                        </div>

                        <p>
                            Various design works created for the fulfillment of different academic
                            course requirements in college, compiled.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Canva"].map((tech) => (
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



            {/* PERSONAL PROJECTS SECTION */}
            <div className="flex flex-col gap-4">
                {/* PROJECT 1 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <div className="flex min-w-0 flex-col">
                                <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                    PisoCAKE - Finance Tracking PWA
                                </h6>
                                <p className="text-[#4EFF9E]">(Bachelor's Thesis)</p>
                            </div>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>
                        </div>
                        
                        <p>
                            A finance tracking PWA that enabled users to set financial goals, 
                            log transactions, and monitor spending as part of a 4-person thesis team.
                        </p>

                        {/* TODO: Add technologies used in the project here. */}
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

                {/* PROJECT 2 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
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
                        </div>
                        
                        <p>
                        An Android photo-journal mobile app using Kotlin and Android Studio, 
                        supporting the creation, organization, and browsing of travel entries 
                        with photos in collaboration with a project partner.
                        </p>

                        {/* TODO: Add technologies used in the project here. */}
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

                {/* PROJECT 3 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                JPD Garage Online Management System
                            </h6>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>
                        </div>

                        <p>
                            A web-based finance and inventory management system for a motorcycle
                            parts business in Laguna as part of a 9-person team.
                        </p>

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

                {/* PROJECT 4 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                MVX - Music Rating & Review Website
                            </h6>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>
                        </div>

                        <p>
                            A full-stack MVP web application with a 3-person team, allowing users
                            to browse, rate, and review songs, albums, and artists.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "EJS",
                                "Express.js",
                                "Node.js",
                                "MongoDB",
                                "Canva",
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

                {/* PROJECT 5 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                AgriGuard - Farmer & Fisherfolk Support Mobile App Prototype
                            </h6>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>
                        </div>

                        <p>
                            A mobile app prototype focused on economic resilience and disaster
                            preparedness for Filipino farmers and fishermen as part of a 4-person
                            team.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Figma"].map((tech) => (
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

                {/* PROJECT 6 */}
                <div className="flex min-w-0 flex-row gap-4">
                    <div className="w-48 h-27 bg-white rounded-lg shrink-0">
                        {/* TODO: Add project thumbnail here. */}
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <div className="flex min-w-0 flex-row gap-2 items-center">
                            <h6 className="font-semibold wrap-break-word text-[#F5F5F5]">
                                Design Works For Various Course Requirements
                            </h6>
                            <div>
                                {/* TODO: Add ARROW icon here that will lead to the specific project page. */}
                            </div>
                        </div>

                        <p>
                            Various design works created for the fulfillment of different academic
                            course requirements in college, compiled.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Canva"].map((tech) => (
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

        </div>
    );
};

export default ProjectsContent;
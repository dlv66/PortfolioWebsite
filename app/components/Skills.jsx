import React from 'react';
import Image from 'next/image';
import profileImage from '../images/IMG_7242.png';

const SkillsContent = () => {
    return (
        <div className="flex flex-col gap-4 py-4 text-[#DFDFDF]">
            <h5 className="text-xl font-semibold text-[#F5F5F5]">
                SKILLS & PROFICIENCIES
            </h5>

            {/* Overarching div */}
            <div className="flex flex-col gap-2">

                {/* TODO: Turn into grid with 2 columns */}
                <div className="grid grid-cols-2 gap-8">

                    {/* Frontend Development */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Frontend Development</p>

                        <div className="grid grid-cols-2 gap-2">

                            <div className="flex flex-row gap-4 items-center">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <Image
                                    src={profileImage}
                                    alt="Denis Leeroi Villamiel"
                                    width={60}
                                    height={60}
                                    className="rounded-lg"
                                />
                                <p> React </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Next.js </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> TypeScript </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> JavaScript </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> HTML </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> CSS </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Tailwind CSS </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Bootstrap </p>
                            </div>

                        </div>
                    </div>

                    {/* Design & UI/UX */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Design & UI/UX</p>

                        <div className="grid grid-cols-2 gap-2">

                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}

                                <p> Figma </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Wireframing </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> User Flows </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Interactive Prototyping </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Responsive Design </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Iterative Design </p>
                            </div>

                        </div>
                    </div>

                    {/* Backend & Database */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Backend & Database</p>

                        <div className="grid grid-cols-2 gap-2">

                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}

                                <p> Node.js </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Express.js </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Supabase </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> MySQL </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> MongoDB </p>
                            </div>

                        </div>
                    </div>

                    {/* Other Languages */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Other Languages</p>

                        <div className="grid grid-cols-2 gap-2">

                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}

                                <p> Java </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Python </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> C </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> C# </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Kotlin </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> SQL </p>
                            </div>

                        </div>
                    </div>

                    {/* Tools & Platforms */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold">Tools & Platforms</p>

                        <div className="grid grid-cols-2 gap-2">

                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}

                                <p> VCS (Git) </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> GitHub </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Vercel </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Docker </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Amazon Web Services </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> VS Code </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> Android Studio </p>
                            </div>
                            <div className="flex flex-row gap-2">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <p> IntelliJ </p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SkillsContent;

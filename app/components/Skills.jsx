import React from 'react';
import Image from 'next/image';
import awsImage from '../images/Amazon_Web_Services_Logo.svg.png';
import bootstrapImage from '../images/Bootstrap_logo.svg.png';
import cssImage from '../images/CSS3_logo_and_wordmark.svg.png';
import cImage from '../images/C_Programming_Language.svg.png';
import expressImage from '../images/expressjs.png';
import figmaImage from '../images/Figma-logo.svg.png';
import gitImage from '../images/Git_icon.svg.png';
import githubImage from '../images/github-white-icon.png';
import htmlImage from '../images/HTML5_logo_and_wordmark.svg.png';
import interactivePrototypingImage from '../images/interactive-display-color-icon-element-vector.jpg';
import iterativeDesignImage from '../images/iterative design.jpg';
import intellijImage from '../images/intellij.jpg';
import javaImage from '../images/java-icon-logo.png';
import javascriptImage from '../images/JavaScript-logo.png';
import kotlinImage from '../images/Kotlin_Icon.png';
import mongodbImage from '../images/mongodb_original_wordmark_logo_icon_146425.png';
import mysqlImage from '../images/mysql.png';
import nextImage from '../images/nextjs.jpg';
import nodeImage from '../images/node-js-logo-png_seeklogo-273749.png';
import pythonImage from '../images/Python-logo-notext.svg.png';
import reactImage from '../images/React-icon.svg.png';
import responsiveDesignImage from '../images/Responsive_Design_Logo.png';
import sqlImage from '../images/sql.png';
import supabaseImage from '../images/supabase.png';
import tailwindImage from '../images/Tailwind_CSS_Logo.svg.png';
import typescriptImage from '../images/Typescript_logo_2020.svg.png';
import userFlowsImage from '../images/user-flow-icon-vector.jpg';
import vercelImage from '../images/vercel.png';
import vsCodeImage from '../images/Visual_Studio_Code_1.35_icon.png';
import androidStudioImage from '../images/android-studio-icon.png';
import csharpImage from '../images/csharp.png';
import dockerImage from '../images/docker.png';
import wireframingImage from '../images/wireframing.png';

const SkillsContent = () => {
    return (
        <div className="flex flex-col gap-8 py-4 text-[#DFDFDF] [&_img]:size-[60px] [&_img]:shrink-0">
            <h5 className="text-xl font-semibold text-[#F5F5F5]">
                SKILLS & PROFICIENCIES
            </h5>

            {/* Overarching div */}
            <div className="flex flex-col gap-2">

                {/* TODO: Turn into grid with 2 columns */}
                <div className="grid grid-cols-2 gap-12">

                    {/* Frontend Development */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-[#F5F5F5]">Frontend Development</p>

                        <div className="grid grid-cols-2 gap-4 [&>div]:items-center">

                            <div className="flex flex-row gap-4 items-center">
                                {/* TODO: Insert technology logo as rounded square photo */}
                                <Image
                                    src={reactImage}
                                    alt="React Logo"
                                    width={60}
                                    height={60}
                                    className="rounded-xl bg-white p-2 object-contain"
                                />
                                <p> React </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={nextImage} alt="Next.js Logo" width={60} height={60} className="rounded-xl bg-white object-contain" />
                                <p> Next.js </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={typescriptImage} alt="TypeScript Logo" width={60} height={60} className="rounded-xl bg-white object-contain" />
                                <p> TypeScript </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={javascriptImage} alt="JavaScript Logo" width={60} height={60} className="rounded-xl bg-white object-contain" />
                                <p> JavaScript </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={htmlImage} alt="HTML Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> HTML </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={cssImage} alt="CSS Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> CSS </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={tailwindImage} alt="Tailwind CSS Logo" width={60} height={60} className="rounded-xl bg-gray-900 p-2 object-contain" />
                                <p> Tailwind CSS </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={bootstrapImage} alt="Bootstrap Logo" width={60} height={60} className="rounded-xl bg-white object-contain" />
                                <p> Bootstrap </p>
                            </div>

                        </div>
                    </div>

                    {/* Design & UI/UX */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-[#F5F5F5]">Design & UI/UX</p>

                        <div className="grid grid-cols-2 gap-4 [&>div]:items-center">

                            <div className="flex flex-row gap-4 items-center">
                                <Image src={figmaImage} alt="Figma Logo" width={60} height={60} className="rounded-xl bg-gray-950 p-2 object-contain" />
                                <p> Figma </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={wireframingImage} alt="Wireframing" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> Wireframing </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={userFlowsImage} alt="User Flows" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> User Flows </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={interactivePrototypingImage} alt="Interactive Prototyping" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> Interactive Prototyping </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={responsiveDesignImage} alt="Responsive Design" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> Responsive Design </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={iterativeDesignImage} alt="Iterative Design" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> Iterative Design </p>
                            </div>

                        </div>
                    </div>

                    {/* Backend & Database */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-[#F5F5F5]">Backend & Database</p>

                        <div className="grid grid-cols-2 gap-4 [&>div]:items-center">

                            <div className="flex flex-row gap-4 items-center">
                                <Image src={nodeImage} alt="Node.js Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> Node.js </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={expressImage} alt="Express.js Logo" width={60} height={60} className="rounded-xl bg-white object-contain" />
                                <p> Express.js </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={supabaseImage} alt="Supabase Logo" width={60} height={60} className="rounded-xl bg-[#202020] p-3 object-contain" />
                                <p> Supabase </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={mysqlImage} alt="MySQL Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> MySQL </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={mongodbImage} alt="MongoDB Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> MongoDB </p>
                            </div>

                        </div>
                    </div>

                    {/* Other Languages */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-[#F5F5F5]">Other Languages</p>

                        <div className="grid grid-cols-2 gap-4 [&>div]:items-center">

                            <div className="flex flex-row gap-4 items-center">
                                <Image src={javaImage} alt="Java Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> Java </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={pythonImage} alt="Python Logo" width={60} height={60} className="rounded-xl bg-cyan-950 p-2 object-contain" />
                                <p> Python </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={cImage} alt="C Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> C </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={csharpImage} alt="C Sharp Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> C# </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={kotlinImage} alt="Kotlin Logo" width={60} height={60} className="rounded-xl bg-[#1f1f1f] p-3 object-contain" />
                                <p> Kotlin </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={sqlImage} alt="SQL Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> SQL </p>
                            </div>

                        </div>
                    </div>

                    {/* Tools & Platforms */}
                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-[#F5F5F5]">Tools & Platforms</p>

                        <div className="grid grid-cols-2 gap-4 [&>div]:items-center">

                            <div className="flex flex-row gap-4 items-center">
                                <Image src={gitImage} alt="Git Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> VCS (Git) </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={githubImage} alt="GitHub Logo" width={60} height={60} className="rounded-xl bg-[#24292f] p-2 object-contain" />
                                <p> GitHub </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={vercelImage} alt="Vercel Logo" width={60} height={60} className="rounded-xl bg-white object-contain" />
                                <p> Vercel </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={dockerImage} alt="Docker Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> Docker </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={awsImage} alt="Amazon Web Services Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> Amazon Web Services </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={vsCodeImage} alt="Visual Studio Code Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
                                <p> VS Code </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={androidStudioImage} alt="Android Studio Logo" width={60} height={60} className="rounded-xl bg-gray-900 p-2 object-contain" />
                                <p> Android Studio </p>
                            </div>
                            <div className="flex flex-row gap-4 items-center">
                                <Image src={intellijImage} alt="IntelliJ Logo" width={60} height={60} className="rounded-xl bg-white p-2 object-contain" />
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

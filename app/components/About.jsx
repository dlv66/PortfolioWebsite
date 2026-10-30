import React from 'react';

const AboutContent = () => {
    return (
        <div className="flex flex-col gap-4 py-4 text-[#DFDFDF]">
            <h5 className="text-xl font-semibold text-[#F5F5F5]">
                ABOUT ME
            </h5>
            <div className="flex flex-col gap-2">
                <p>
                    Hi! I&apos;m Leeroi. I am a BS Computer Science graduate specializing in web and software engineering, with a strong emphasis on modern frontend architecture and user interface engineering. 
                    I build responsive applications using React, Next.js, TypeScript, with experience integrating RESTful APIs, handling component state, and working with databases.
                </p>
                <p>
                    My work focuses on building clean & maintainable component logic, and delivering user-centered software from design through to production deployment.
                </p>
            </div>
        </div>
    );
};

export default AboutContent;

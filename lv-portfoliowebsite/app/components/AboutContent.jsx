import React from 'react';

const AboutContent = () => {
    return (
        <div className="flex flex-col gap-4 py-4 px-8 text-[#DFDFDF]">
            <h5 className="font-semibold text-[#F5F5F5] px-4">
                ABOUT ME
            </h5>
            <div className="flex flex-col gap-2 p-4">
                <p>
                    I am a BS Computer Science graduate from De La Salle University, 
                    specializing in frontend development and UI/UX implementation. 
                </p>
                <p>
                    I am experienced in building production-ready web and mobile applications
                     using React, Next.js, and TypeScript. I have led UI/UX design and frontend development 
                     across multiple team-based projects. I ensure strong focus on usability, 
                     clean component UI architecture, and translating product requirements into 
                     maintainable user interfaces.
                </p>
                <p>
                    I am passionate about <span className="font-semibold">design</span>, professionally and personally. 
                    My work focuses on building visually consistent user interfaces that support 
                    efficient and intuitive user flows.
                </p>
            </div>
        </div>
    );
};

export default AboutContent;
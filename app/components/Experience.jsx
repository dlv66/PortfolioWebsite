import React from 'react';

const ExperienceContent = () => {
    return (
        <div className="flex flex-col gap-4 py-4 text-[#DFDFDF]">
            <h5 className="text-xl font-semibold text-[#F5F5F5]">
                EXPERIENCE
            </h5>

            {/*TODO: Fix issue with LPSci entry being late in shrinking. 
                     Might need to div all dates together instead of putting them with the schools.*/}
            <div className="grid grid-cols-[13.5rem_minmax(0,1fr)] gap-x-6 gap-y-6 items-start">
                <p>MAY 2024 - JUL 2024</p>
                <div className="flex flex-col gap-2 min-w-0">
                    <p className="font-semibold text-[#F5F5F5]">ARVRDEV Intern - De La Salle University Graphics, Animation, Multimedia and Entertainment Laboratory (GAME Lab)</p>
                    <p>Developed and modernized university AR/VR courseware using Unity (C#) and Vuforia Engine. 
                        Built and refactored multiple marker-based & markerless augmented reality scenes that were 
                        integrated into a unified demo mobile application.</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceContent;
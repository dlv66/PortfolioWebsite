import React from 'react';

const ExperienceContent = () => {
    return (
        <div className="flex flex-col gap-4 py-4 px-8 text-[#DFDFDF]">
            <h5 className="font-semibold text-[#F5F5F5] px-4">
                EXPERIENCE
            </h5>

            {/*TODO: Fix issue with LPSci entry being late in shrinking. 
                     Might need to div all dates together instead of putting them with the schools.*/}
            <div className="grid grid-cols-[13.5rem_minmax(0,1fr)] gap-x-6 gap-y-6 items-start p-4">
                <p>MAY 2024 - JUL 2024</p>
                <div className="flex flex-col gap-2 min-w-0">
                    <p className="font-semibold text-[#F5F5F5]">De La Salle University</p>
                    <p>Bachelor of Science in Computer Science Major in Software Technology</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceContent;
import React from 'react';

const EducationContent = () => {
    return (
        <div className="flex flex-col gap-4 py-4 pb-8 text-[#DFDFDF]">
            <h5 className="text-xl font-semibold text-[#F5F5F5]">
                EDUCATION
            </h5>

            <div className="flex flex-col gap-y-10 lg:gap-y-6">
                <div className="grid grid-cols-1 items-start gap-y-4 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-x-6 lg:gap-y-6">
                    <p>OCT 2021 - FEB 2026</p>
                    <div className="flex min-w-0 flex-col gap-2">
                        <p className="font-semibold text-[#F5F5F5]">De La Salle University</p>
                        <p>Bachelor of Science in Computer Science Major in Software Technology</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 items-start gap-y-4 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-x-6 lg:gap-y-6">
                    <p>JUN 2019 - MAY 2021</p>
                    <div className="flex min-w-0 flex-col gap-2">
                        <p className="font-semibold text-[#F5F5F5]">De La Salle University Integrated School - Senior High School</p>
                        <p>Science, Technology, Engineering, and Mathematics (STEM) Strand</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 items-start gap-y-4 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-x-6 lg:gap-y-6">
                    <p>JUN 2015 - APR 2019</p>
                    <div className="flex min-w-0 flex-col gap-2">
                        <p className="font-semibold text-[#F5F5F5]">Las Piñas City National Science High School</p>
                        <p>Junior High School</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationContent;
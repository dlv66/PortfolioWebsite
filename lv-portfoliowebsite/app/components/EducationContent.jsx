const EducationContent = () => {
    return (
        <div className="flex flex-col gap-4 py-4 px-8 text-[#DFDFDF]">
            <h5 className="font-semibold text-[#F5F5F5] px-4">
                EDUCATION
            </h5>

            {/*TODO: Fix issue with LPSci entry being late in shrinking. 
                     Might need to div all dates together instead of putting them with the schools.*/}
            <div className="grid grid-cols-[13.5rem_minmax(0,1fr)] gap-x-6 gap-y-6 items-start p-4">
                <p>OCT 2021 - FEB 2026</p>
                <div className="flex flex-col gap-2 min-w-0">
                    <p className="font-semibold text-[#F5F5F5]">De La Salle University</p>
                    <p>Bachelor of Science in Computer Science Major in Software Technology</p>
                </div>

                <p>JUN 2019 - MAY 2021</p>
                <div className="flex flex-col gap-2 min-w-0">
                    <p className="font-semibold text-[#F5F5F5]">De La Salle University Integrated School - Senior High School</p>
                    <p>Science, Technology, Engineering, and Mathematics (STEM) Strand</p>
                </div>

                <p>JUN 2015 - APR 2019</p>
                <div className="flex flex-col gap-2 min-w-0">
                    <p className="font-semibold text-[#F5F5F5]">Las Piñas City National Science High School</p>
                    <p>Junior High School</p>
                </div>
            </div>
        </div>
    );
};

export default EducationContent;
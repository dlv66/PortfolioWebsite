import React from 'react';

const Profile = () => {
    return (
        <div className="flex flex-col gap-2 py-2 px-8">
            {/* Name */}
            <h1 className="text-4xl font-bold">
                Denis Leeroi Villamiel
            </h1>

            {/* Education and Job Title */}
            <div className="flex flex-col">
                <h3 className="font-semibold">
                    BS Computer Science Graduate @ DLSU
                </h3>
                <h3 className="font-semibold">
                    UI/UX Designer | Frontend Developer
                </h3>
            </div>

            {/*Social Media/Contact Information*/}
            <div className="flex flex-row">
                {/* TODO: Add icons */}
            </div>
        </div>
    );
};

export default Profile;
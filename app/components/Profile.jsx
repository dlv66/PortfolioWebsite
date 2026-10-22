import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import profileImage from '../images/IMG_7242.png';

const contacts = {
    github: 'https://github.com/dlv66',
    linkedin: 'https://www.linkedin.com/in/denis-leeroi-villamiel/', // TODO: add your LinkedIn username
    email: 'mailto:ofl.denisleeroivillamiel@gmail.com', // TODO: add your email, e.g. mailto:you@example.com
    phone: 'tel:+639285111187', // TODO: add your phone, e.g. tel:+639171234567
};

const iconClassName =
    'h-6 w-6 text-green-100 transition-colors hover:text-white';

const Profile = () => {
    return (
        <div className="flex flex-row items-start justify-between gap-4 py-4">
            <div className="flex flex-col gap-2">
                {/* Name */}
                <h1 className="text-4xl pb-2 font-bold text-white">
                    Denis Leeroi Villamiel
                </h1>

                {/* Education and Job Title */}
                <div className="flex flex-col text-xl text-green-100 gap-1">
                    <h3 className="">
                        BS Computer Science Graduate
                    </h3>
                    <h3 className="">
                        Frontend Developer | UI/UX Designer
                    </h3>
                </div>

                {/* Social Media / Contact Information */}
                <div className="flex flex-row items-center gap-4 pt-2">
                    <a
                        href={contacts.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub className={iconClassName} />
                    </a>

                    <a
                        href={contacts.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className={iconClassName} />
                    </a>

                    <a href={contacts.email} aria-label="Email">
                        <MdEmail className={iconClassName} />
                    </a>

                    <a href={contacts.phone} aria-label="Phone">
                        <MdPhone className={iconClassName} />
                    </a>
                </div>
            </div>

            <div className="shrink-0">
                <Image
                    src={profileImage}
                    alt="Denis Leeroi Villamiel"
                    width={240}
                    height={240}
                    className="rounded-2xl"
                />
            </div>
        </div>
    );
};

export default Profile;

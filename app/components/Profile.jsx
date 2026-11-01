import React from 'react';
import Image from 'next/image';
import { useId } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import profileImage from '../images/Leeroi ID Photo.png';

const contacts = {
    github: 'https://github.com/dlv66',
    linkedin: 'https://www.linkedin.com/in/denis-leeroi-villamiel/',
    email: 'mailto:ofl.denisleeroivillamiel@gmail.com', 
    phone: 'tel:+639285111187', 
};

const contactLinkClassName =
    'group flex size-9 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

function ContactIcon({ Icon }) {
    const maskId = `contact-icon-mask-${useId().replaceAll(':', '')}`;

    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 36 36"
            className="size-full"
        >
            <defs>
                <mask
                    id={maskId}
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: 'luminance' }}
                >
                    <circle cx="18" cy="18" r="18" fill="white" />
                    <Icon
                        x="7"
                        y="7"
                        size="22px"
                        color="black"
                    />
                </mask>
            </defs>
            <circle
                cx="18"
                cy="18"
                r="18"
                className="fill-[#DCFCE7] transition-colors group-hover:fill-white"
                mask={`url(#${maskId})`}
            />
        </svg>
    );
}

const Profile = () => {
    return (
        <div className="flex flex-row items-start justify-between gap-4 pt-8 pb-4">
            <div className="flex flex-col gap-4">
                {/* Name */}
                <h1 className="text-5xl font-bold text-white">
                    Denis Leeroi Villamiel
                </h1>

                {/* Education and Job Title */}
                <div className="flex flex-col text-xl text-green-100 gap-1">
                    <h3 className="">
                        BS Computer Science Graduate
                    </h3>
                    <h3 className="">
                        Software Engineer | Frontend & UI/UX Specialist
                    </h3>
                </div>

                {/* Social Media / Contact Information */}
                <div className="flex flex-row items-center gap-4">
                    <a
                        href={contacts.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={contactLinkClassName}
                    >
                        <ContactIcon Icon={FaGithub} />
                    </a>

                    <a
                        href={contacts.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={contactLinkClassName}
                    >
                        <ContactIcon Icon={FaLinkedin} />
                    </a>

                    <a href={contacts.email} aria-label="Email" className={contactLinkClassName}>
                        <ContactIcon Icon={MdEmail} />
                    </a>

                    <a href={contacts.phone} aria-label="Phone" className={contactLinkClassName}>
                        <ContactIcon Icon={MdPhone} />
                    </a>
                </div>

                {/* Resume/CV Download link */}
                <div className="flex flex-row items-center gap-4 text-green-100">
                    <a
                        href="/downloadables/VILLAMIEL%20Denis%20Leeroi%20-%20Resume%202026.pdf"
                        download
                        className="underline hover:text-white transition-colors"
                    >
                        Download Resume
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

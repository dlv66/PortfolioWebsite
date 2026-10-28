import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const contacts = {
    github: 'https://github.com/dlv66',
    linkedin: 'https://www.linkedin.com/in/denis-leeroi-villamiel/',
    email: 'mailto:ofl.denisleeroivillamiel@gmail.com',
    phone: 'tel:+639285111187', 
};

const iconClassName =
    'h-6 w-6 text-green-100 transition-colors hover:text-white';

const EndContent = () => {
    return (
        <div className="flex flex-col py-8 text-[#DFDFDF] [&_img]:size-[60px] [&_img]:shrink-0">
            <h5 className="text-xl font-semibold text-[#F5F5F5]">
                Let's work together.
            </h5>
            <p className="pt-4 pb-8"> I'm currently looking for work and would love to hear from you. Feel free to reach out through any of the channels below.</p>
            
            {/* Social Media / Contact Information */}
                            <div className="flex flex-row gap-8 justify-center">
                                <a
                                    href={contacts.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="flex flex-row items-center rounded-xl gap-4 border-green-900 border-2 bg-[#096939] hover:bg-black/18 transition-colors px-4 py-2"
                                >
                                    <FaGithub className={iconClassName} />
                                    <p className="text-green-100">GitHub</p>
                                </a>
            
                                <a
                                    href={contacts.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex flex-row items-center rounded-xl gap-4 border-green-900 border-2 bg-[#096939] hover:bg-black/18 transition-colors px-4 py-2"
                                >
                                    <FaLinkedin className={iconClassName} />
                                    <p className="text-green-100">LinkedIn</p>
                                </a>
            
                                <a
                                    href={contacts.email}
                                    aria-label="Email"
                                    className="flex flex-row items-center rounded-xl gap-4 border-green-900 border-2 bg-[#096939] hover:bg-black/18 transition-colors px-4 py-2"
                                >
                                    <MdEmail className={iconClassName} />
                                    <p className="text-green-100">Email</p>
                                </a>
            
                                <a
                                    href={contacts.phone}
                                    aria-label="Phone"
                                    className="flex flex-row items-center rounded-xl gap-4 border-green-900 border-2 bg-[#096939] hover:bg-black/18 transition-colors px-4 py-2"
                                >
                                    <MdPhone className={iconClassName} />
                                    <p className="text-green-100">Phone</p>
                                </a>
                            </div>
            <div>
                <p className="pt-32 text-[#D1D1D1]">
                    Designed in Figma, implemented in Visual Studio Code.
                </p>
                <p className="text-[#D1D1D1]">
                    Built with Next.js and Tailwind CSS, deployed with Vercel.
                </p>
            </div>

            <div>
                <p className="pt-8 text-[#D1D1D1]">
                    &copy; {new Date().getFullYear()} Denis Leeroi Villamiel. All rights reserved.
                </p>
                <p className="text-[#D1D1D1]">
                    All brand logos and trademarks belong to their respective owners.
                </p>
            </div>
        </div>
    );
};

export default EndContent;

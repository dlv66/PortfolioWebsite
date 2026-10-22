import React from 'react';
import Link from 'next/link';

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
];

const Navbar = () => {
    return (
        <div className="">
            <div className="">

            </div>

            <div>
                <nav className="flex w-fit items-center gap-1 rounded-2xl px-2 py-1.5">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            href={`/#${item.id}`}
                            className="rounded-xl px-4 py-2 font-medium text-[#e7fff2]
                                    transition-colors duration-200 hover:bg-[#0B3D28]/40 hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
        
    );
};

export default Navbar;

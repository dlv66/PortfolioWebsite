import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex
                        justify-center
                        align-middle
                        gap-8
                        items-center
                        p-4
                        bg-[#04844D]
                        px-8
                        py-2
                        w-fit
                        rounded-2xl">
            <Link href="/#about">About</Link>
            <Link href="/#education">Education</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#skills">Skills</Link>
        </nav>
    );
};

export default Navbar;

"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mobile-navbar relative flex w-full justify-end pr-4 lg:w-fit lg:justify-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>

                {/* Hamburger button to open side-pane or sheet */}
                <SheetTrigger
                    render={
                        <button
                            type="button"
                            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                            className="mobile-navbar-toggle flex size-12 items-center justify-center rounded-lg p-0 text-[#e7fff2] transition-[color,opacity] duration-150 hover:text-white focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
                        />
                    }
                >
                    <Menu size={32} />
                </SheetTrigger>

                <SheetContent
                    id="mobile-navigation"
                    side="right"
                    showCloseButton={false}
                    className="w-3/4 max-w-sm border-[#e7fff2]/20 bg-[#04844D] p-6 text-[#e7fff2]"
                >
                    <div className="flex items-center justify-between border-b border-[#e7fff2]/20 pt-[18px] pb-4">
                        <SheetTitle className="text-lg font-semibold text-[#e7fff2]">
                            leeroiv.dev
                        </SheetTitle>
                        <SheetClose
                            aria-label="Close navigation menu"
                            className="absolute top-8 right-4 flex size-12 items-center justify-center rounded-lg text-[#e7fff2] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            <X size={32} />
                        </SheetClose>
                    </div>
                    <nav aria-label="Mobile navigation" className="flex flex-col gap-2 pt-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`/#${item.id}`}
                                onClick={() => setIsOpen(false)}
                                className="rounded-xl px-4 py-3 font-medium text-[#e7fff2] transition-colors duration-150 hover:bg-[#0B3D28]/40 hover:text-white"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>

            <div className="hidden lg:block">
                <nav aria-label="Main navigation" className="flex w-fit items-center gap-1 rounded-2xl px-2 py-1.5">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            href={`/#${item.id}`}
                            className="rounded-xl px-4 py-2 font-medium text-[#e7fff2]
                                    transition-colors duration-150 hover:bg-[#0B3D28]/40 hover:text-white"
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

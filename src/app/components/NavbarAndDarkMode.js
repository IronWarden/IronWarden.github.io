'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import keys from '@/app/Keys/main.json';

const linkClass = 'opacity-75 hover:opacity-100 hover:text-primary transition-colors duration-150';

const NavbarAndDarkMode = () => {
    const { theme, setTheme } = useTheme();

    const isDarkMode = theme && theme.endsWith('_dark');

    const toggleDarkMode = () => {
        const newTheme = isDarkMode ? theme.replace('_dark', '_light') : theme.replace('_light', '_dark');
        setTheme(newTheme);
    };

    return (
        <nav className="flex items-center justify-between py-5 text-base md:text-lg">
            <ul className="flex gap-6 md:gap-8">
                <li><Link href="/" className={linkClass}>home</Link></li>
                {/* The blog lives on Substack, so this one leaves the site. */}
                <li><a href={keys.nav.substack} target="_blank" rel="noopener noreferrer" className={linkClass}>blog</a></li>
                <li><Link href="/fun" className={linkClass}>fun</Link></li>
                <li><a href="/Rishi_Gadhia.pdf" className={linkClass}>resume</a></li>
            </ul>
            <button className={`${linkClass} p-1 leading-none`} onClick={toggleDarkMode} aria-label="Toggle dark mode">
                <i className="bx bx-moon text-xl md:text-2xl dark-mode-icon"></i>
                <i className="bx bx-sun text-xl md:text-2xl light-mode-icon"></i>
            </button>
        </nav>
    );
};

export default NavbarAndDarkMode;

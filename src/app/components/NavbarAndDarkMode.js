'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';

const NavbarAndDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = darkMode ? 'solarized_dark' : 'solarized_light';
        document.documentElement.setAttribute('data-theme', theme);
    }, [darkMode]);

    return (
        <nav className="navbar bg-base-100 ">
            <div className="flex-1">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/" className="btn btn-ghost text-lg md:text-xl lg:text-2xl">Home</Link></li>
                    <li><Link href="/blog" className="btn btn-ghost text-lg md:text-xl lg:text-2xl">Blog</Link></li>
                </ul>
            </div>
            <div className="flex-none">
                <label className="swap swap-rotate">
                    <input
                        id="darkModeToggle"
                        name="darkModeToggle"
                        type="checkbox"
                        className="hidden"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                    <BsSun className="swap-on fill-current w-6 h-6 text-base-content" />
                    <BsFillMoonStarsFill className="swap-off fill-current w-6 h-6 text-base-content" />
                </label>
            </div>
        </nav>
    );
};

export default NavbarAndDarkMode;

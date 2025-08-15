'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const NavbarAndDarkMode = () => {
    const { theme, setTheme } = useTheme();
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const hasClickedThemePicker = localStorage.getItem('hasClickedThemePicker');
        if (!hasClickedThemePicker) {
            setShowTooltip(true);
        }
    }, []);

    const isDarkMode = theme && theme.endsWith('_dark');

    const toggleDarkMode = () => {
        const newTheme = isDarkMode ? theme.replace('_dark', '_light') : theme.replace('_light', '_dark');
        setTheme(newTheme);
    };

    const handleThemeChange = (newTheme) => {
        const currentTheme = isDarkMode ? newTheme + '_dark' : newTheme + '_light';
        setTheme(currentTheme);
        localStorage.setItem('hasClickedThemePicker', 'true');
        setShowTooltip(false);
    };

    return (
        <nav className="navbar bg-base-100 ">
            <div className="flex-1">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/" className="btn btn-ghost text-xl md:text-2xl">Home</Link></li>
                    <li><Link href="/blog" className="btn btn-ghost text-xl md:text-2xl">Blog</Link></li>
                    <li><Link href="/resume" className="btn btn-ghost text-xl md:text-2xl">Resume</Link></li>
                </ul>
            </div>
            <div className="flex-none">
                <div className={`dropdown dropdown-end ${showTooltip ? 'tooltip tooltip-open tooltip-bottom' : ''}`} data-tip="Try Me!">
                    <label tabIndex={0} className="btn btn-ghost m-1">
                        <i className='bx bx-paint-roll text-2xl'></i>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-max z-50">
                        <li><a onClick={() => handleThemeChange('solarized')}>Solarized</a></li>
                        <li><a onClick={() => handleThemeChange('tokyonight')}>Tokyo Night</a></li>
                        <li><a onClick={() => handleThemeChange('gruvbox')}>Gruvbox</a></li>
                        <li><a onClick={() => handleThemeChange('nord')}>Nord</a></li>
                    </ul>
                </div>
                <button className="btn btn-ghost m-1" onClick={toggleDarkMode}>
                    <i className="bx bxs-moon fill-current text-2xl text-base-content dark-mode-icon"></i>
                    <i className="bx bxs-sun fill-current text-2xl text-base-content light-mode-icon"></i>
                </button>
            </div>
        </nav>
    );
};

export default NavbarAndDarkMode;

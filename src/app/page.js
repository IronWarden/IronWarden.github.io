'use client';

import Image from 'next/image';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import rishi from '../../public/rishi.png';
// import GitHubCalendar from 'react-github-calendar';
// import platformer from '../../public/platformer.png';
// import gamereview from '../../public/Gamereview.png';
import React, { useState, useEffect } from 'react';
import keys from '@/app/Keys/main.json';
import Skills from '@/app/components/Skills.js';
import Projects from '@/app/components/Projects.js';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = darkMode ? 'solarized_dark' : 'solarized_light';
        document.documentElement.setAttribute('data-theme', theme);
    }, [darkMode]);

    return (
        <main className="bg-base-100 text-base-content px-10 md:px-20 lg:px-40 max-w-7xl mx-auto">
            <section>
                <nav className="py-10 mb-8 flex justify-end">
                    <label className="swap swap-rotate">
                        <input
                            type="checkbox"
                            className="hidden"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <BsSun className="swap-on fill-current w-6 h-6 text-base-content" />
                        <BsFillMoonStarsFill className="swap-off fill-current w-6 h-6 text-base-content" />
                    </label>
                </nav>
                <div className="relative mx-auto bg-gradient-to-b from-primary to-secondary rounded-full mt-10 overflow-hidden md:h-60 md:w-60 h-40 w-40 filter grayscale">
                    <Image src={rishi} layout="fill" objectFit="cover" />
                </div>
                <div className="text-5xl flex justify-center gap-16 py-3 text-base-content">
                    <a href="https://github.com/IronWarden" target="_blank">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/rishi-gadhia-296843285/" target="_blank">
                        <AiFillLinkedin />
                    </a>
                    <a href="mailto:gadhiarishi@gmail.com" target="_blank">
                        <AiFillMail />
                    </a>
                </div>
            </section>
            <section className="my-12 container max-w-screen-lg mx-auto">
                <h2 className="text-4xl text-primary text-center font-burton">
                    {keys.hero.name}
                </h2>
                <p className="lg:text-xl sm:text-lg md:text-lg font-hack py-5 leading-8 text-base-content whitespace-normal overflow-ellipsis">{keys.intro}</p>
            </section>
            <Skills />
            <Projects />
        </main>
    );
}

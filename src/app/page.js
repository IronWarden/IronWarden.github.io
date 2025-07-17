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

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = darkMode ? 'solarized_dark' : 'solarized_light';
        document.documentElement.setAttribute('data-theme', theme);
    }, [darkMode]);

    return (
        <div>
            <main className="bg-base-100 text-base-content px-10 md:px-20 lg:px-40">
                <section>
                    <nav className="py-10 mb-8 flex justify-between">
                        <h1 className="md:text-2xl lg:text-3xl text-xl font-burton text-base-content">
                            {keys.nav.developedBy}
                        </h1>
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
                    <div className="text-center">
                        <h2 className="text-5xl py-2 font-medium md:text-7xl font-burton text-primary bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {keys.hero.name}
                        </h2>
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

                    <div className="relative mx-auto bg-gradient-to-b from-primary to-secondary rounded-full mt-10 overflow-hidden md:h-96 md:w-96 h-60 w-60">
                        <Image src={rishi} layout="fill" objectFit="cover" />
                    </div>
                </section>
                <section className="my-12">
                    <div className="flex justify-center">
                        <div className="container max-w-screen-lg jusitify-center items-center">
                            <h2 className="text-4xl text-center text-primary font-burton">
                                {keys.about.title}
                            </h2>
                            <p className="lg:text-xl sm:text-lg md:text-lg font-hack py-5 leading-8 text-base-content whitespace-normal overflow-ellipsis">{keys.intro}</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="py-4">
                        <h3 className="text-3xl text-primary font-burton text-center">
                            {keys.projects.title}
                        </h3>
                    </div>
                    <div className="flex justify-center py-8">
                        <a href="https://github.com/IronWarden?tab=repositories" className="btn btn-outline" target="_blank">
                            {keys.projects.viewAll}
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}

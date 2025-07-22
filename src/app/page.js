'use client';

import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import rishi from '../../public/rishi.JPG';
import React from 'react';
import keys from '@/app/Keys/main.json';
import Skills from '@/app/components/Skills.js';
import Projects from '@/app/components/Projects.js';

export default function Home() {
    return (
        <main className="bg-base-100 text-base-content">
            <section>
                <div className="relative mx-auto rounded-full mt-10 overflow-hidden md:h-80 md:w-80 h-40 w-40 ">
                    <Image src={rishi} alt="Rishi Gadhia's profile picture" fill={true} className="object-cover" priority />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl flex justify-center gap-8 md:gap-12 lg:gap-16 py-3">
                    <a href="https://github.com/IronWarden" target="_blank" className="p-2 rounded-full hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-current">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/rishi-gadhia-296843285/" target="_blank" className="p-2 rounded-full hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-current">
                        <AiFillLinkedin />
                    </a>
                    <a href="mailto:gadhiarishi@gmail.com" target="_blank" className="p-2 rounded-full hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-current">
                        <AiFillMail />
                    </a>
                </div>
            </section>
            <section className="my-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-secondary text-center">
                    {keys.hero.name}
                </h2>
                <p className="text-sm md:text-lg lg:text-xl font-hack py-5">{keys.intro}</p>
            </section>
            <Skills />
            <Projects />
        </main>
    );
}

import Image from 'next/image';
import rishi from '../../public/Rishi.jpg';
import React from 'react';
import keys from '@/app/Keys/main.json';
import Skills from '@/app/components/Skills.js';
import Projects from '@/app/components/Projects.js';

const socialLinks = [
    { label: 'github', href: 'https://github.com/IronWarden' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/rishi-gadhia-296843285/' },
    { label: 'email', href: 'mailto:gadhiarishi@gmail.com' },
];

export default function Home() {
    return (
        <main className="text-base-content">
            <section className="pt-16 pb-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                    <div className="relative shrink-0 rounded-box overflow-hidden h-32 w-32 md:h-40 md:w-40">
                        <Image src={rishi} alt="Rishi Gadhia's profile picture" fill={true} className="object-cover" loading='eager' />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold">{keys.hero.name}</h1>
                        <p className="opacity-75 mt-2 text-base md:text-lg">{keys.hero.role}</p>
                        <p className="mt-4 text-base md:text-lg">
                            {socialLinks.map(({ label, href }, i) => (
                                <React.Fragment key={label}>
                                    {i > 0 && <span className="opacity-30 mx-2" aria-hidden="true">·</span>}
                                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">{label}</a>
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
                <p className="text-base md:text-lg leading-relaxed mt-8">{keys.intro}</p>
            </section>
            <Skills />
            <Projects />
        </main>
    );
}

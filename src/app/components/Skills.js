import React from 'react';
import keys from '@/app/Keys/main.json';
import Prompt from '@/app/components/Prompt.js';

const Skills = () => {
    const skillsData = [
        { key: 'go',         icon: 'bx bxl-go-lang' },
        { key: 'javascript', icon: 'bx bxl-javascript' },
        { key: 'linux',      icon: 'bx bxl-tux' },
        { key: 'react',      icon: 'bx bxl-react' },
        { key: 'databases',  icon: 'bx bx-data' },
        { key: 'python',     icon: 'bx bxl-python' },
        { key: 'cloud',      icon: 'bx bxs-cloud' },
        { key: 'java',       icon: 'bx bxl-java' },
        { key: 'c_cpp',      icon: 'bx bxl-c-plus-plus' },
    ];

    return (
        <section className="py-10">
            <Prompt command={keys.skills.listing} title={keys.skills.title} />
            <ul className="text-base md:text-lg">
                {skillsData.map(({ key, icon }) => {
                    const meta = keys.skills.meta[key];
                    return (
                        <li key={key} className="border-b border-base-300 last:border-b-0">
                            <details className="group">
                                <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer grid grid-cols-[1fr_auto] sm:grid-cols-[11rem_4rem_1fr_auto] items-center gap-x-4 py-2.5 hover:text-primary transition-colors duration-150">
                                    <span className="flex items-center gap-3 font-bold">
                                        <i className={`${icon} text-xl opacity-50`}></i>
                                        {key}
                                    </span>
                                    <span className="hidden sm:inline opacity-50">{meta.since}</span>
                                    <span className="hidden sm:inline opacity-60 truncate">{meta.note}</span>
                                    <span className="opacity-40 transition-transform duration-200 group-open:rotate-90">▸</span>
                                </summary>
                                <p className="leading-relaxed opacity-80 pb-4 sm:pl-[16rem] max-w-prose sm:max-w-none">
                                    <span className="sm:hidden opacity-60">{meta.since} · {meta.note}<br /></span>
                                    {keys.skills[key]}
                                </p>
                            </details>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Skills;

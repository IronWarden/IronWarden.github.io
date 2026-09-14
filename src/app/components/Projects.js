import React from 'react';
import Image from 'next/image';
import keys from '@/app/Keys/main.json';
import Prompt from '@/app/components/Prompt.js';
import gamereview from '../../../public/Gamereview.webp';
import backtester from '../../../public/backtester.webp';
import httpserver from '../../../public/httpserver.webp';
import sobel from '../../../public/sobel.png';


const Projects = () => {
    const projectsData = [
        {
            title: keys.projects.gameReview,
            image: gamereview,
            description: keys.projects.gameReviewDesc,
            tags: ['REST APIs', 'Web', 'Android'],
            link: 'https://github.com/nstuhldreher1/GameReview'
        },
        {
            title: keys.projects.sobel,
            image: sobel,
            description: keys.projects.sobelDesc,
            tags: ['Multithreading', 'Image processing', 'Research'],
            link: 'https://github.com/Connor03p/COP4520-Parallel-Edge-Detection-Project'
        },
        {
            title: keys.projects.backtester,
            image: backtester,
            description: keys.projects.backtesterDesc,
            tags: ['Go', 'DuckDB', 'Wails', 'Lua'],
            link: 'https://github.com/IronWarden/Backtester'
        },
        {
            title: keys.projects.httpServer,
            image: httpserver,
            description: keys.projects.httpServerDesc,
            tags: ['Go', 'HTTP/1.0', 'TCP'],
            link: 'https://github.com/IronWarden/HttpServer'
        }
    ];

    return (
        <section className="py-10">
            <Prompt command={keys.projects.command} title={keys.projects.title} />
            <div>
                {projectsData.map((project) => (
                    <article key={project.link} className="grid grid-cols-1 md:grid-cols-[1fr_15rem] gap-6 md:gap-10 py-8 border-t border-base-300 first:border-t-0 first:pt-0">
                        <div className="text-base md:text-lg leading-relaxed">
                            <h3 className="text-lg md:text-xl font-bold">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">
                                    {project.title}
                                </a>
                            </h3>
                            <p className="opacity-50 text-sm md:text-base mt-1">{project.tags.join(' · ')}</p>
                            <p className="mt-3 opacity-90">{project.description}</p>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="self-start" tabIndex={-1} aria-hidden="true">
                            <Image src={project.image} alt="" className="w-full h-40 object-cover rounded-box" />
                        </a>
                    </article>
                ))}
            </div>
            <a href="https://github.com/IronWarden?tab=repositories" className="inline-block mt-4 text-base md:text-lg text-primary hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                {keys.projects.viewAll} →
            </a>
        </section>
    );
};

export default Projects;

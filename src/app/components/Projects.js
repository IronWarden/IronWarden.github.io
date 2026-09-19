import React from 'react';
import keys from '@/app/Keys/main.json';
import SectionHeading from '@/app/components/SectionHeading.js';
import ProjectImage from '@/app/components/ProjectImage.js';
import gamereview from '../../../public/Gamereview.webp';
import backtester from '../../../public/backtester.webp';
import httpserver from '../../../public/httpserver.webp';
import sobel from '../../../public/sobel.png';


const Projects = () => {
    const projectsData = [
        {
            title: keys.projects.backtester,
            image: backtester,
            description: keys.projects.backtesterDesc,
            tags: ['Go', 'DuckDB', 'Wails', 'Lua'],
            link: 'https://github.com/IronWarden/Backtester',
            status: 'ongoing'
        },
        {
            title: keys.projects.httpServer,
            image: httpserver,
            description: keys.projects.httpServerDesc,
            tags: ['Go', 'HTTP/1.0', 'TCP'],
            link: 'https://github.com/IronWarden/HttpServer',
            status: 'ongoing'
        },
        {
            title: keys.projects.gameReview,
            image: gamereview,
            description: keys.projects.gameReviewDesc,
            tags: ['REST APIs', 'Web', 'Android'],
            link: 'https://github.com/nstuhldreher1/GameReview',
            status: 'completed'
        },
        {
            title: keys.projects.sobel,
            image: sobel,
            description: keys.projects.sobelDesc,
            tags: ['Multithreading', 'Image processing', 'Research'],
            link: 'https://github.com/Connor03p/COP4520-Parallel-Edge-Detection-Project',
            status: 'completed'
        }
    ];

    // Ongoing work is listed first
    const groups = ['ongoing', 'completed'];

    return (
        <section className="py-10">
            <SectionHeading title={keys.projects.title} />
            {groups.map((status) => (
                <div key={status} className="mb-10 last:mb-0">
                    <h3 className="text-base md:text-lg font-bold opacity-75 mb-6">{keys.projects[status]}</h3>
                    <div>
                        {projectsData.filter((project) => project.status === status).map((project) => (
                            <article key={project.link} className="grid grid-cols-1 md:grid-cols-[1fr_22rem] gap-6 md:gap-10 py-8 border-t border-base-300 first:border-t-0 first:pt-0">
                                <div className="text-base md:text-lg leading-relaxed">
                                    <h4 className="text-lg md:text-xl font-bold">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">
                                            {project.title}
                                        </a>
                                    </h4>
                                    <p className="opacity-75 text-sm md:text-base mt-1">{project.tags.join(' · ')}</p>
                                    <p className="mt-3">{project.description}</p>
                                </div>
                                <div className="self-start">
                                    <ProjectImage image={project.image} title={project.title} />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            ))}
            <a href="https://github.com/IronWarden?tab=repositories" className="inline-block mt-4 text-base md:text-lg text-primary hover:underline underline-offset-4" target="_blank" rel="noopener noreferrer">
                {keys.projects.viewAll} →
            </a>
        </section>
    );
};

export default Projects;

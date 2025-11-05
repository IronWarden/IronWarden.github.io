import React from 'react';
import Image from 'next/image';
import keys from '@/app/Keys/main.json';
import gamereview from '../../../public/Gamereview.webp';
import backtester from '../../../public/backtester.webp';
import sobel from '../../../public/sobel.png';


const Projects = () => {
    const projectsData = [
        {
            title: keys.projects.gameReview,
            image: gamereview,
            description: keys.projects.gameReviewDesc,
            link: 'https://github.com/nstuhldreher1/GameReview'
        },
        {
            title: keys.projects.sobel,
            image: sobel,
            description: keys.projects.sobelDesc,
            link: 'https://github.com/Connor03p/COP4520-Parallel-Edge-Detection-Project'
        },
        {
            title: keys.projects.backtester,
            image: backtester,
            description: keys.projects.backtesterDesc,
            link: 'https://github.com/IronWarden/Backtester'
        }
    ];

    return (
        <section className="py-10">
            <div>
                <h2 className="text-4xl md:text-5xl text-center text-secondary mb-8">{keys.projects.title}</h2>
                <div className="grid grid-cols-1 gap-12">
                    {projectsData.map((project, index) => (
                        <div key={index} className="card bg-base-200 shadow-xl flex flex-col md:flex-row">
                            <figure className="w-full md:w-1/3 p-4 flex items-center justify-center md:order-2">
                                <Image src={project.image} alt={project.title} className="w-full h-auto max-h-48 object-cover rounded-lg" />
                            </figure>
                            <div className="card-body w-full md:w-2/3 text-md md:text-xl font-mono md:order-1">
                                <h3 className="card-title xl:text-2xl text-secondary">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-success transition-colors duration-200 underline">
                                        {project.title}
                                    </a>
                                </h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center py-8">
                    <a href="https://github.com/IronWarden?tab=repositories" className="btn btn-success font-mono transition-all duration-300" target="_blank">
                        {keys.projects.viewAll}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

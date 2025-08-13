import React from 'react';
import Image from 'next/image';
import keys from '@/app/Keys/main.json';
import gamereview from '../../../public/Gamereview.jpg';
import backtester from '../../../public/backtester.jpg';
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
                        <div key={index} className="card bg-base-200 shadow-xl">
                            <figure className="w-full">
                                <Image src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </figure>
                            <div className="card-body w-full text-md md:text-xl font-mono">
                                <h3 className="card-title xl:text-2xl">{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="card-actions justify-end">
                                    <a href={project.link} className="btn btn-success" target="_blank" rel="noopener noreferrer">View on Github</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center py-8">
                    <a href="https://github.com/IronWarden?tab=repositories" className="btn btn-success font-mono" target="_blank">
                        {keys.projects.viewAll}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

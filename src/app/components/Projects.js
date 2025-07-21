import React from 'react';
import Image from 'next/image';
import keys from '@/app/Keys/main.json';
import gamereview from '../../../public/Gamereview.png';
import backtester from '../../../public/backtester.png';
import sobel from '../../../public/sobel.png';


const Projects = () => {
    const projectsData = [
        {
            title: keys.projects.gameReview,
            image: gamereview,
            description: keys.projects.gameReviewDesc,
            link: '#'
        },
        {
            title: keys.projects.sobel,
            image: sobel,
            description: keys.projects.sobelDesc,
            link: '#'
        },
        {
            title: keys.projects.backtester,
            image: backtester,
            description: keys.projects.backtesterDesc,
            link: '#'
        }
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl text-center text-primary font-burton mb-8">{keys.projects.title}</h2>
                <div className="grid grid-cols-1 gap-12">
                    {projectsData.map((project, index) => (
                        <div key={index} className="card lg:card-side bg-base-200 shadow-xl">
                            <figure className="w-full lg:w-1/2">
                                <Image src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </figure>
                            <div className="card-body w-full lg:w-1/2">
                                <h3 className="card-title">{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="card-actions justify-end">
                                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center py-8">
                    <a href="https://github.com/IronWarden?tab=repositories" className="btn btn-outline" target="_blank">
                        {keys.projects.viewAll}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

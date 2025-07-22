import React from 'react';
import keys from '@/app/Keys/main.json';

const SkillLevel = ({ level }) => {
    const totalCircles = 10;
    const filledCircles = Math.round(level / 10);

    return (
        <div className="flex items-center">
            {Array.from({ length: totalCircles }).map((_, index) => (
                <div
                    key={index}
                    className={`h-4 w-4 rounded-full mx-1 ${index < filledCircles ? 'bg-primary' : 'bg-base-content'
                        }`}
                ></div>
            ))}
        </div>
    );
};

const Skills = () => {
    const skillsData = [
        {
            icon: 'bx bxl-javascript',
            title: 'JavaScript',
            description: keys.skills.javascript,
            level: 90,
        },
        {
            icon: 'bx bxl-python',
            title: 'Python',
            description: keys.skills.python,
            level: 90,
        },
        {
            icon: 'bx bxl-tux',
            title: 'Linux',
            description: keys.skills.linux,
            level: 80,
        },
        {
            icon: 'bx bxl-go-lang',
            title: 'Go',
            description: keys.skills.go,
            level: 70,
        },
        {
            icon: 'bx bx-data',
            title: 'Databases',
            description: keys.skills.databases,
            level: 70,
        },
        {
            icon: 'bx bxl-react',
            title: 'React',
            description: keys.skills.react,
            level: 70,
        },
    ];

    return (
        <section className="py-12">
            <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-secondary mb-8">{keys.skills.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="card bg-base-200 shadow-xl">
                            <div className="card-body">
                                <div className="flex items-center mb-4">
                                    <i className={`${skill.icon} text-4xl mr-4`}></i>
                                    <h3 className="card-title text-sm md:text-lg xl:text-xl">{skill.title}</h3>
                                </div>
                                <p className='text-sm md:text-lg xl:text-xl'>{skill.description}</p>
                                <div className="mt-4">
                                    <SkillLevel level={skill.level} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

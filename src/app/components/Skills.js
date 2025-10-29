import React from 'react';
import keys from '@/app/Keys/main.json';

const SkillLevel = ({ level }) => {
    const getLevelText = (lvl) => {
        if (lvl <= 25) return 'Amateur';
        if (lvl <= 50) return 'Novice';
        if (lvl <= 75) return 'Proficient';
        return 'Experienced';
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex justify-between w-full mb-1">
                <span className="text-sm text-base-content">Novice</span>
                <span className="text-sm text-base-content">Experienced</span>
            </div>
            <progress className="progress progress-primary w-full" value={level} max="100"></progress>
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
        {
            icon: 'bx bxl-java',
            title: 'Java',
            description: keys.skills.java,
            level: 80,
        },
        {
            icon: 'bx bxl-c-plus-plus',
            title: 'C/C++',
            description: keys.skills.c_cpp,
            level: 65,
        },
        {
            icon: 'bx bxs-cloud',
            title: 'Cloud',
            description: keys.skills.cloud,
            level: 60,
        },
    ];

    return (
        <section className="py-10">
            <div>
                <h2 className="text-4xl md:text-5xl text-center text-secondary mb-8">{keys.skills.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillsData.map((skill, index) => (
                        <div key={index} className="collapse collapse-arrow bg-base-200 shadow-xl self-start hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <input type="checkbox" />
                            <div className="collapse-title text-2xl font-bold flex items-center">
                                <i className={`${skill.icon} text-4xl mr-2`}></i>
                                {skill.title}
                            </div>
                            <div className="collapse-content">
                                <p className="text-xl mb-4">{skill.description}</p>
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

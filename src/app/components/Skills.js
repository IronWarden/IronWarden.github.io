import React from 'react';
import keys from '@/app/Keys/main.json';
import SectionHeading from '@/app/components/SectionHeading.js';

// One aligned row per group, values inline — the whole stack reads at a glance
// instead of asking the eye to walk four columns.
const Skills = () => (
    <section className="py-10">
        <SectionHeading title={keys.skills.title} />
        <dl className="text-base md:text-lg">
            {Object.entries(keys.skills.groups).map(([group, skills]) => (
                <div
                    key={group}
                    className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-6 py-2 border-t border-base-300 first:border-t-0 first:pt-0"
                >
                    <dt className="font-bold opacity-75">{group}</dt>
                    <dd className="leading-relaxed">
                        {skills.map((skill, i) => (
                            <React.Fragment key={skill}>
                                {i > 0 && <span className="opacity-30 mx-2" aria-hidden="true">·</span>}
                                {skill}
                            </React.Fragment>
                        ))}
                    </dd>
                </div>
            ))}
        </dl>
    </section>
);

export default Skills;

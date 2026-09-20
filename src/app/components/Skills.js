import React from 'react';
import keys from '@/app/Keys/main.json';
import SectionHeading from '@/app/components/SectionHeading.js';

// One aligned row per group, values inline — the whole stack reads at a glance
// instead of asking the eye to walk four columns. The values are a wrapping flex
// row so a long group folds onto the next line instead of overflowing the page.
const Skills = () => (
    <section className="py-10">
        <SectionHeading title={keys.skills.title} />
        <dl className="text-base md:text-lg">
            {Object.entries(keys.skills.groups).map(([group, skills]) => (
                <div
                    key={group}
                    className="grid grid-cols-1 sm:grid-cols-[9rem_minmax(0,1fr)] gap-x-6 py-2 border-t border-base-300 first:border-t-0 first:pt-0"
                >
                    <dt className="font-bold opacity-75">{group}</dt>
                    <dd className="flex flex-wrap items-baseline gap-x-2 leading-relaxed min-w-0">
                        {skills.map((skill, i) => (
                            <React.Fragment key={skill}>
                                {i > 0 && <span className="opacity-30" aria-hidden="true">·</span>}
                                <span className="break-words">{skill}</span>
                            </React.Fragment>
                        ))}
                    </dd>
                </div>
            ))}
        </dl>
    </section>
);

export default Skills;

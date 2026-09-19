import React from 'react';
import keys from '@/app/Keys/main.json';
import SectionHeading from '@/app/components/SectionHeading.js';

const FunFacts = () => (
    <section className="pt-16 pb-10">
        <SectionHeading title={keys.funFacts.title} as="h1" />
        <p className="text-base md:text-lg leading-relaxed mb-8">{keys.funFacts.intro}</p>
        <ul className="text-base md:text-lg">
            {keys.funFacts.list.map(({ label, text, link, linkText }) => (
                <li key={label} className="border-b border-base-300 last:border-b-0 grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-x-4 py-2.5">
                    <span className="font-bold opacity-75">{label}</span>
                    <span className="leading-relaxed max-w-prose">
                        {text}
                        {link && (
                            <>
                                {text && ' '}
                                <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">
                                    {linkText ?? link}
                                </a>
                            </>
                        )}
                    </span>
                </li>
            ))}
        </ul>
    </section>
);

export default FunFacts;

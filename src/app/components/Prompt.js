import React from 'react';

// Section heading with a dimmed shell prompt marker. The title is kept for screen readers.
const Prompt = ({ command, title, as: Tag = 'h2', className = '' }) => (
    <Tag className={`text-lg md:text-2xl font-bold mb-6 break-words ${className}`}>
        {title && <span className="sr-only">{title}: </span>}
        <span className="opacity-30 font-normal" aria-hidden="true">$ </span>
        <span aria-hidden={title ? 'true' : undefined}>{command}</span>
    </Tag>
);

export default Prompt;

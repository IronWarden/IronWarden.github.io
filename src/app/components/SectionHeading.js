import React from 'react';

// Plain section heading. The monospace face and the aligned layouts carry the
// terminal feel on their own, without a fake shell prompt in front of it.
const SectionHeading = ({ title, as: Tag = 'h2', className = '' }) => (
    <Tag className={`text-lg md:text-2xl font-bold mb-6 break-words ${className}`}>
        {title}
    </Tag>
);

export default SectionHeading;

'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const schemes = ['rosepine', 'tokyonight', 'gruvbox', 'nord'];

// Small footer control for the color scheme; light/dark stays in the navbar
const SchemePicker = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const variant = theme && theme.endsWith('_dark') ? '_dark' : '_light';
    const current = mounted && theme ? theme.replace(/_(dark|light)$/, '') : null;

    return (
        <p className="flex flex-wrap items-center gap-x-2">
            {schemes.map((scheme, i) => (
                <React.Fragment key={scheme}>
                    {i > 0 && <span className="opacity-30" aria-hidden="true">·</span>}
                    <button
                        onClick={() => setTheme(scheme + variant)}
                        aria-pressed={current === scheme}
                        className={current === scheme ? 'text-primary' : 'opacity-75 hover:opacity-100 transition-opacity duration-150'}
                    >
                        {scheme}
                    </button>
                </React.Fragment>
            ))}
        </p>
    );
};

export default SchemePicker;

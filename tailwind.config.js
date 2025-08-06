/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Fira Sans', 'sans-serif'],
                mono: ['Hack', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
    daisyui: {
        themes: [
            {
                solarized_dark: {
                    "primary": "#268bd2",
                    "secondary": "#2aa198",
                    "accent": "#d33682",
                    "neutral": "#002b36",
                    "base-100": "#073642",
                    "info": "#268bd2",
                    "success": "#859900",
                    "warning": "#b58900",
                    "error": "#dc322f",
                },
            },
            {
                solarized_light: {
                    "primary": "#268bd2",
                    "secondary": "#2aa198",
                    "accent": "#d33682",
                    "neutral": "#eee8d5",
                    "base-100": "#fdf6e3",
                    "info": "#268bd2",
                    "success": "#859900",
                    "warning": "#b58900",
                    "error": "#dc322f",
                },
            },
        ],
    },
};

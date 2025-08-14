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
            {
                tokyonight_light: {
                    'primary': '#7aa2f7',
                    'secondary': '#bb9af7',
                    'accent': '#ff9e64',
                    'neutral': '#d5d6db',
                    'base-100': '#f5f5f5',
                    'info': '#7dcfff',
                    'success': '#9ece6a',
                    'warning': '#e0af68',
                    'error': '#f7768e',
                },
            },
            {
                tokyonight_dark: {
                    'primary': '#7aa2f7',
                    'secondary': '#bb9af7',
                    'accent': '#ff9e64',
                    'neutral': '#414868',
                    'base-100': '#1a1b26',
                    'info': '#7dcfff',
                    'success': '#9ece6a',
                    'warning': '#e0af68',
                    'error': '#f7768e',
                },
            },
            {
                gruvbox_light: {
                    'primary': '#458588',
                    'secondary': '#b16286',
                    'accent': '#689d6a',
                    'neutral': '#7c6f64',
                    'base-100': '#fbf1c7',
                    'info': '#458588',
                    'success': '#98971a',
                    'warning': '#d79921',
                    'error': '#cc241d',
                },
            },
            {
                gruvbox_dark: {
                    'primary': '#458588',
                    'secondary': '#b16286',
                    'accent': '#689d6a',
                    'neutral': '#a89984',
                    'base-100': '#282828',
                    'info': '#458588',
                    'success': '#98971a',
                    'warning': '#d79921',
                    'error': '#cc241d',
                },
            },
            {
                nord_light: {
                    'primary': '#88c0d0',
                    'secondary': '#81a1c1',
                    'accent': '#bf616a',
                    'neutral': '#e5e9f0',
                    'base-100': '#eceff4',
                    'info': '#5e81ac',
                    'success': '#a3be8c',
                    'warning': '#ebcb8b',
                    'error': '#bf616a',
                },
            },
            {
                nord_dark: {
                    'primary': '#88c0d0',
                    'secondary': '#81a1c1',
                    'accent': '#bf616a',
                    'neutral': '#4c566a',
                    'base-100': '#2e3440',
                    'info': '#5e81ac',
                    'success': '#a3be8c',
                    'warning': '#ebcb8b',
                    'error': '#bf616a',
                },
            },
        ],
    },
};

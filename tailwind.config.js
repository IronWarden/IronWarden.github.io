/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        burton: 'burtons',
        hack: 'Hack',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#04080F',
        glaucous: '#507DBC',
        powderblue: '#A1C6EA',
        columbiablue: '#BBD1EA',
        platinum: '#DAE3E5',
        frostTeal: '#8fbcbb',
        frostSky: '#88c0d0',
        frostBlue: '#81a1c1',
        frostOcean: '#81a1c1',
        polarBlack: '#2e3440',
        polarLight: '#e5e9f0',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'nord'],
  },
};

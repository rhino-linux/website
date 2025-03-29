/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'rhino-purple': '#8d7be4',
        'neon-purple': '#8b00e7',
        'highlighter-purple': '#9235ff',
        'rhino-dark': '#13093c',
        'adwaita-dark': '#2d2d2d',
        'off-white': '#fefefe',
        'overlay': 'rgba(15, 0, 20, 0.4);',
        'site-400-light': '#e0d9fc',
        'site-400-dark': '#19142d',
        'site-300-light': '#eae6fc',
        'site-300-dark': '#231e37',
        'site-200': '#373250',
        'site-100': '#554b69',
        'unicorn-magenta': '#c10080',
        'unicorn-pink': '#d404ff',
        'unicorn-purple': '#8b00e7',
        'unicorn-dark': '#26184c',
        'brand-dark': '#2d2d2d44',
        'brand-light': '#fefefe11',
        'zrhino-purple': '#8d7be4',
      },
      boxShadow: {
        'bxs': "0 0 10px #8d7be4",
      },
      backgroundImage: {
        'hero-pattern': "url('/img/blobs.png')",
        'orb-pattern': "url('/img/orb.png')",
      },
      dropShadow: {
        'header-drop': '2px 4px 10px rgba(40, 30, 45, 1)',
      },
      fontFamily: {
        'serif': ['Ubuntu', 'sans-serif'],
        'mono': ['UbuntuMono', 'mono'],
      },
    },
    fontSize: {
      xs: ['0.75rem', {lineHeight: '1rem',}],
      sm: ['0.875rem', {lineHeight: '1.25rem',}],
      base: ['1rem', {lineHeight: '1.5rem',}],
      btn: ['1.15rem', {lineHeight: '1.6rem',}],
      lg: ['1.125rem', {lineHeight: '1.75rem',}],
      xl: ['1.25rem', {lineHeight: '1.75rem',}],
      '2xl': ['1.5rem', {lineHeight: '2rem',}],
      '3xl': ['1.875rem', {lineHeight: '2.25rem',}],
      '4xl': ['2.25rem', {lineHeight: '2.5rem',}],
      'burger': ['3.2rem', {lineHeight: '2.5rem',}],
    },
  },
  plugins: [],
};

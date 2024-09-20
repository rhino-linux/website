/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rhino-dark": "#13093c",
        "off-white": "#fefefe",
        "rhino-purple": "#8d7be4",
        "site-300": "#231e37",
        "overlay": "rgba(15, 0, 20, 0.4)",
      },
      boxShadow: {
        'bxs': "0 0 10px #8d7be4",
      },
      backgroundImage: {
        'hero-pattern': "url('/img/blobs.png')",
        'orb-pattern': "url('/img/orb.png')",
      },
      keyframes: {
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-in-out',
        'slide-out': 'slide-out 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};

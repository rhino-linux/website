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
      },
    },
  },
  plugins: [],
};

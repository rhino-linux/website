/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rhino-purple': '#8d7be4',
        'neon-purple': '#8b00e7',
        'highlighter-purple': '#9235ff',
        'dark-purple': '#13093c',
        'adwaita-dark': '#2d2d2d',
        'off-white': '#fefefe',
        'overlay': 'rgba(15, 0, 20, 0.4);',
        'site-400': '#19142d',
        'site-300': '#231e37',
        'site-200': '#373250',
        'site-100': '#554b69',
        'unicorn-magenta': '#c10080',
        'unicorn-pink': '#d404ff',
        'unicorn-purple': '#8b00e7',
        'unicorn-dark': '#26184c',
      },
      backgroundImage: {
        'blobs': "url('/img/blobs.png')",
        'banner': "url('/img/ecosystem.png')"
      },
      boxShadow: {
        'header-box': '2px 4px 10px rgba(40, 30, 45, 1)',
      },
      dropShadow: {
        'header-drop': '2px 4px 10px rgba(40, 30, 45, 1)',
      }
    },
  },
  plugins: [],
}

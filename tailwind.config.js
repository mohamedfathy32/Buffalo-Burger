/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}", 
];
export const theme = {
  extend: {
    colors: {
      'custom-orange': '#ff5f00',
    },
    fontFamily: {
      main: ['Roboto', 'ui-sans-serif','sans-serif'],
    },
  },
};
export const plugins = [];
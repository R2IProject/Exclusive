/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px', // Change lg breakpoint to 1280px
      xl: '1536px',
    },
    extend: {
      backgroundImage: {
        // Your custom background images can be defined here
      },
    },
  },
  plugins: [],
};

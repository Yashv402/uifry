/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['CDBold', 'sans-serif'],
        custom2: ['CDLight', 'sans-serif'],
        custom3: ['CDMeduim', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

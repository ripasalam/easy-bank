/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Dark-Blue": '#2d314d',
        'Lime-Green': '#31d35c',
        'Bright-Cyan': '	#2bb7da',
        'Grayish-Blue': '#9698a6',
        'Light-Grayish-Blue': '#f3f4f6',
        'Very-Light-Gray': '	#fafafa',
        'White': '	#ffffff'

      },
    },
  },
  plugins: [],
};

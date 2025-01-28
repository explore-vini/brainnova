/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#036283',
          light: '#5790AB',
          dark: '#064469',
        },
        secondary: {
          DEFAULT: '#9ECDDE',
          light: '#D0D7E1',
          dark: '#393E3F',
        },
        accent: '#072D44',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        hind: ['Hind', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
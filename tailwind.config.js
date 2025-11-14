/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'latte-blue': '#1c4aa6',
        'latte-cream': '#d9cec8',
        'latte-light': '#eaeaea',
        'latte-jade': '#154734',
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


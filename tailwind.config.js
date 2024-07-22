/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'custom-lg': '28px',
        'custom-sm': '16px',
        'custom-p': '14px', // New font size for p
      },
      lineHeight: {
        'custom-lg': '42px',
        'custom-sm': '28px',
        'custom-p': '21px', // New line height for p
      },
      fontWeight: {
        'bold': 700,
        'normal': 400,
        'medium': 500, // New font weight for h1
      },
      textColor: {
        'custom-text-lg': 'rgba(47, 51, 103, 1)',
        'custom-text-sm': 'rgba(134, 146, 166, 1)',
      },
    },
  },
  plugins: [],
}
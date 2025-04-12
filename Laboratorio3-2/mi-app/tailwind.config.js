/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegura que Tailwind lea archivos TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


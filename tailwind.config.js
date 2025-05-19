/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 2s linear infinite",
        spinFast: "spin 0.5s linear infinite",
        
      },
    },
  },
  plugins: [],
};

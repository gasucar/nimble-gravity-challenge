/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        darkBg: "#0f172a",
        cardBg: "#020617",
        borderDark: "#1e293b",
      },
    },
  },
  plugins: [],
}

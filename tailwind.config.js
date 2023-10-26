//Her viser man hvor Tailwind skal virke. I src og med filer, der ender på js, ts osv. Astro skal tilføjes hvis det bliver relevant.
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

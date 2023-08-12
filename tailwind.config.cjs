/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./pages/**/*.{astro,html,js,jsx,ts,tsx}",
    "./components/**/*.{astro,html,js,jsx,ts,tsx}",
    "./app/**/*.{astro,html,js,jsx,ts,tsx}",
    "./src/components/Nav.tsx",
  ],
  theme: {
    fontFamily: {
      worksans: ["WorkSans", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      xs: "300px",
      sm: "570px",
      md: "640px",
      lg: "750px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1640px",
    },
  },
};

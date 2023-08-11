/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./pages/**/*.{astro,html,js,jsx,ts,tsx}",
    "./components/**/*.{astro,html,js,jsx,ts,tsx}",
    "./app/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      worksans: ["WorkSans", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      sm: "570px",
      md: "640px",
      lg: "750px",
      xl: "1024px",
      "2xl": "2560px",
      "3xl": "1536px",
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,json}"],
  theme: {
    extend: {
      colors: {
        primaryModerateViolet: "hsl(263, 55%, 52%)",
        primaryVeryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        primaryVeryDarkBlackishBlue: "hsl(219, 29%, 14%)",
        primaryWhite: "hsl(0, 0%, 100%)",
        secondaryLightGray: "hsl(0, 0%, 81%)",
        secondaryGrayishBlue: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-moderate-violet": "hsl(263, 55%, 52%)",
        "theme-very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "theme-very-dark-blackish-blue": "hsl(219, 29%, 14%)",
        "theme-white": "hsl(0, 0%, 100%)",
        "theme-grayish-blue": "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};

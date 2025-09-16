/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        playfair: ["Playfair Display", "serif"],
        lobster: ["Lobster Two", "cursive"],
        merienda: ["Merienda", "cursive"],
        rowdies: ["Rowdies", "cursive"],
        cormorant: ["Cormorant Garamond", "serif"],
        libertinus: ["Libertinus Keyboard", "serif"],
        tagesschrift: ["Tagesschrift", "serif"],
        playwrite: ["Playwrite AU SA", "serif"],
        twinkle: ["Twinkle Star", "cursive"],
        eduHand: ["Edu NSW ACT Hand Pre", "cursive"],
        eduArrow: ["Edu AU VIC WA NT Arrows", "cursive"],
      },
    },
  },
  plugins: [],
};

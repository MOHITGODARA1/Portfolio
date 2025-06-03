// tailwind.config.js
module.exports = {
  content: ["./index.html"], // Adjust if using different folders like src/
  theme: {
    extend: {
      fontFamily: {
        rowdies: ['Rowdies', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        edu: ['"Edu AU VIC WA NT Arrows"', 'cursive'],
        playwrite: ['"Playwrite AU SA"', 'cursive'],
        tagesschrift: ['Tagesschrift', 'cursive'],
      },
    },
  },
  plugins: [],
}

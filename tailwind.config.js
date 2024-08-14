/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Satisfy", "cursive"],
      Bangaram:["Zeyada","cursive"]
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '170%',
      '16': '4rem',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/Image2.jpg')",
        'paper':'url("https://www.psdgraphics.com/wp-content/uploads/2022/01/white-math-paper-texture.jpg")',
        'textpage':'url("https://i0.wp.com/textures.world/wp-content/uploads/2018/10/2-Millimeter-Paper-Background-copy.jpg?ssl=1")',
        
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'dark-gray': '#8c8c8c',
      'very-dark-gray': '#696969',
    },
    fontFamily: {
      alata: ['Alata', 'sans-serif'],
      josefinSans: ['Josefin Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-desktop': "url('./public/imgs/desktop/image-hero.jpg')",
        'hero-mobile': "url('./public/imgs/mobile/image-hero.jpg')",
        'interactive-mobile': "url('./public/imgs/mobile/image-interactive.jpg')",
        'interactive-desktop': "url('./public/imgs/desktop/image-interactive.jpg')",
        'deep-mobile': "url('./public/imgs/mobile/image-deep-earth.jpg')",
        'deep-desktop': "url('./public/imgs/desktop/image-deep-earth.jpg')",
        'night-mobile': "url('./public/imgs/mobile/image-night-arcade.jpg')",
        'night-desktop': "url('./public/imgs/desktop/image-night-arcade.jpg')",
        'soccer-mobile': "url('./public/imgs/mobile/image-soccer-team.jpg')",
        'soccer-desktop': "url('./public/imgs/desktop/image-soccer-team.jpg')",
        'grid-mobile': "url('./public/imgs/mobile/image-grid.jpg')",
        'grid-desktop': "url('./public/imgs/desktop/image-grid.jpg')",
        'above-mobile': "url('./public/imgs/mobile/image-from-above.jpg')",
        'above-desktop': "url('./public/imgs/desktop/image-from-above.jpg')",
        'borealis-mobile': "url('./public/imgs/mobile/image-pocket-borealis.jpg')",
        'borealis-desktop': "url('./public/imgs/desktop/image-pocket-borealis.jpg')",
        'curiosity-mobile': "url('./public/imgs/mobile/image-curiosity.jpg')",
        'curiosity-desktop': "url('./public/imgs/desktop/image-curiosity.jpg')",
        'fisheye-mobile': "url('./public/imgs/mobile/image-fisheye.jpg')",
        'fisheye-desktop': "url('./public/imgs/desktop/image-fisheye.jpg')",
        
      },
      height: {
        '128': '32rem',
      }
    }
  },
  plugins: [],
}


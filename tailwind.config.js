module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        DancingStyle: "'Dancing Script', cursive",
        Montserrat: "'Montserrat', sans-serif",
      },
      backgroundImage: {
        'background-image': "url('/images/background.jpg')",
        'nft-image': "url('/images/0x0.png')",
        'nft-image-1': "url('/images/01.jpg')",
        'nft-image-2': "url('/images/02.png')",
      },
    },
  },
  plugins: [],
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        ipad: '768px',
      },
      colors: {
        'bnc-yellow': '#F5DF4D',
        'bnc-white': '#F7F7F7',
      },
      height: {
        680: '500px',
        480: '463px',
        300: '300px',
        250: '250px',
        95: '92vh',
      },
      fontFamily: {
        body: ['Noto Sans Thai', 'Noto Sans', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'bnc-banner': "url('/banner.png')",
        'bnc-mobile': "url('/banner-mobile.png')",
        'pact-desktop': "url('/pact-desktop.png')",
        'pact-mobile': "url('/pact-mobile.png')",
        'pact-ipad': "url('/pact-ipad.png')",
        'pact-xl': "url('/pact-xl.png')",
        'blue-desktop': "url('/blue-desktop.png')",
        'blue-mobile': "url('/blue-mobile.png')",
        'footer-website': "url('/footer-website.png')",
        'gold-website': "url('/gold.png')",
        'gold-mobile': "url('/gold-mobile.png')",
        'footer-mobile': "url('/footer-mobile.png')",
        'contact-website': "url('/contact-website.png')",
        'contact-banner': "url('/contact-banner.png')",
        'contact-mobile': "url('/contact-mobile.png')",
        'white-contact': "url('/white-contat.png')",
        sg: "url('/sg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

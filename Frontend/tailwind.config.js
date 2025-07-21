/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],theme: {
    extend: {
    colors: {
      'primary': "#E3E6F3",
      'secondary': "#1A1A1A",
      'tertiary': "#088178",
      'quaternary': "#222",
      'para': "#465b52",
      'para2': "#818ea0",
      'spanColor': "#606063",
      'spanColor2': "#ffbd27",
      'borderColor': "#cee7de",
      'borderColor2': "#cee7d0",
      'bannerColor': "#ef3636",
      'newsColor': "#041e42",
    },
    boxShadow: {
     'shadow1' : '0 5px 15px rgba(0, 0, 0, 0.06)',
     'box': '20px 20px 34px rgba(0, 0, 0, 0.03)',
     'hoverShadow': '10px 10px 54px rgba(70, 62, 221, 0.1)',
     'shadow2' : '20px 20px 30px rgba(0, 0, 0, 0.02)',
     'shadow3' : '20px 20px 30px rgba(0, 0, 0, 0.06)'
    },
    backgroundImage: {
     'hero-button': "url('./src/assets/button.png')",
     'banner': "url('./src/assets/b2.jpg')",
     'banner2': "url('./src/assets/b17.jpg')",
     'banner3': "url('./src/assets/b10.jpg')",
     'newsletter': "url('./src/assets/b14.png')",
     'shopHero': "url('./src/assets/b1.jpg')",
     'cartBanner': "url('./src/assets/banner.png')",
     'blogBanner': "url('./src/assets/b19.jpg')"
      }
      
    },
  },
  
  plugins: [],
}


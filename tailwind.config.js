/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/desktop/image-header.jpg')",
      },
      colors: {
        'soft-red': "hsl(7, 99%, 70%)",
        'dark-footer': ' hsl(168, 34%, 41%)',
        "Yellow": "hsl(51, 100%, 49%)",
        
      },
    },
    container: {
      center: true,
      padding: "1rem"  ,
      marginTop: "2rem" ,
     
    },
  },
  plugins: [],
}


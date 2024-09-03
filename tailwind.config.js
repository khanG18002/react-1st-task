/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#db8a89', // Custom color name and its hex value
        'custom-coral': '#e06b69', // New custom color
        'custom-Gray': '#edecf2', // Custom color added
        'custom-light-Gray': '#f1f1f1', // light gray color 
      },
      fontFamily: {
        roboto: ['Righteous', 'sans-serif'], // Google Font 'Roboto' ko add karna
        righteous: ['Righteous', 'cursive'],

      },
    },
  },
  plugins: [],
}


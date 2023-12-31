/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        navCol_1:
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#1f2533',
          900: '#0a0a16',
        },
        
        navCol:

        {
          50: '#edf1ff',
          100: '#cfd6e5',
          200: '#2B3148',
          300: '#939fb9',
          400: '#7584a4',
          500: '#5b6a8a',
          600: '#46536c',
          700: '#313b4e',
          800: '#1c2331',
          900: '#040d17',
        },
        
        buttonPink:
        {
          50: '#ffe3eb',
          100: '#ffb3c2',
          200: '#fb8399',
          300: '#f95370',//pink
          400: '#f62448',
          500: '#dc0d2f',
          600: '#ac0624',
          700: '#7c031a',
          800: '#4c000e',
          900: '#1f0003',
        },

        grayIcon:    
        {
          50: '#feeff2',
          100: '#ded7d9',
          200: '#c2bebf',
          300: '#a7a5a6',
          400: '#8c8c8c',
          500: '#737373',//grey
          600: '#5a5959',
          700: '#423f40',
          800: '#2a2526',
          900: '#17080d',
        }
        
      }
    },
  },
  plugins: [],
}


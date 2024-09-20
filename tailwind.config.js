const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",flowbite.content()],
  theme: {
    extend: {
      colors:{
        apiyellow: '#FAFF0F',
        apigray : '#d2d2d2',
      }
    },
  },
  plugins: [
    flowbite.plugin()],
  
}


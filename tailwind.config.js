const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",flowbite.content()],
  theme: {
    extend: {
      colors:{
        apiyellow: '#FAFF0F',
        apigray : '#F0F0F0',
        apiyellowhover: '#E5E200',
      }
    },
  },
  plugins: [
    flowbite.plugin()],
  
}


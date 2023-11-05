// tailwind.config.js
const { nextui } = require('@nextui-org/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // single component styles
    './node_modules/@nextui-org/theme/dist/components/avatar.js',
    './node_modules/@nextui-org/theme/dist/components/button.js',
    './node_modules/@nextui-org/theme/dist/components/card.js',
    './node_modules/@nextui-org/theme/dist/components/divider.js',
    './node_modules/@nextui-org/theme/dist/components/dropdown.js',
    './node_modules/@nextui-org/theme/dist/components/link.js',
    './node_modules/@nextui-org/theme/dist/components/input.js',
    './node_modules/@nextui-org/theme/dist/components/listbox.js',
    './node_modules/@nextui-org/theme/dist/components/modal.js',
    './node_modules/@nextui-org/theme/dist/components/navbar.js',
    './node_modules/@nextui-org/theme/dist/components/spinner.js',
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui()]
}

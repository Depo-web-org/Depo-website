/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A4F92',
        'primary-active': '#142A4A',
        'primary-hover': '#153F74',
        'primary-disabled': '#B3C8',
        secondary: '#ffed4a',
        'secondary-active': '#2779bd',
        'secondary-hover': '#6cb2eb',
        'secondary-disabled': '#6cb2eb',
      },
    },
  },
  plugins: [],
}
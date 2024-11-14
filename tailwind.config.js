/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // #052c5d
        primary: "#1A4F92",
        "primary-active": "#142A4A",
        "primary-hover": "#153F74",
        "primary-disabled": "#B3C8",
        secondary: "#00A5A4",
        "secondary-active": "#2779bd",
        "secondary-hover": "#6cb2eb",
        "secondary-disabled": "#6cb2eb",
        "back-ground": "#052c5d",
        "border-color": "#ffffff47",
        "secondary-dark": "#007575",
      },
      boxShadow: {
        custom: "14px 13px 17px -9px rgba(0, 0, 0, 0.47)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};

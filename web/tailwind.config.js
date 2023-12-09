/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0.75rem",
    },
    extend: {
      gridTemplateColumns: {
        "card-list": "repeat(auto-fill, minmax(240px, 1fr))",
        "restaurant-details": "1.5fr 1fr",
      },
    },
  },
  plugins: [require("daisyui")],

  /** @type {import('daisyui').Config} */
  daisyui: {
    themes: ["cupcake"],
  },
}

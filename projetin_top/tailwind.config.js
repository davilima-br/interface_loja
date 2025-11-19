/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = [require("daisyui")];
export const daisyui = {
  themes: ["light", "dark", "cupcake"], // 🎨 opcional — escolha seus temas preferidos
};

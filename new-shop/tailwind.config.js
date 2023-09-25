/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import daisyui from 'daisyui';

export const mode = "jit";
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const darkMode = "class";
export const theme = {
  // screens: {
  //   sm: "480px",
  //   md: "768px",
  //   lg: "1025px",
  //   xl: "1280px",
  //   xl2: "1360px",
  // },
  extend: {},
};
export const plugins = [daisyui];
// export const daisyui = {
//   styled: true,
//   themes: ["emerald", "dark", "forest", "synthwave"],
//   base: true,
//   utils: true,
//   logs: true,
//   rtl: false,
// };
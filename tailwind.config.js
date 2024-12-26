/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide'],
      },
      colors: {
        ewhite: "#fdf3d3",
        eblack: "#121212",
        epurple: {
          '100': "#f2eaf6",
          '200': "#d9bfe0",
          '300': "#83429f",
          '400': "#74388f",
          '500': "#6d268c",
          '600': "#561e72",
          '700': "#1a1642",
          '800': "#120c30",
          '900': "#0a071c",
        },
        eyellow: {
          '100': "#fff5d1",
          '200': "#ffe19a",
          '300': "#ffcb01",
          '400': "#febd03",
          '500': "#feb204",
          '600': "#f9a303",
          '700': "#f68601",
          '800': "#d66d02",
          '900': "#8c4701",
        },
      },
    },
  },
  plugins: [],
}

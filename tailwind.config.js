/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter'],
      },
      colors: {
        ewhite: "#fdf3d3",
        eblack: "#121212",
        epurple: {
          '300': "#83429f",
          '500': "#6d268c",
          '700': "#1a1642",
        },
        eyellow: {
          '300': "#ffcb01",
          '500': "#feb204",
          '700': "#f68601",
        }
      },
    },
  },
  plugins: [],
}

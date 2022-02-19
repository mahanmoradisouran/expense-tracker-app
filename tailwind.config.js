const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      Dark: {
        25: "#7A7E80",
        50: "#464A4D",
        75: "#161719",
        100: "#0D0E0F",
      },
      Light: {
        20: "#E3E5E6",
        40: "#F2F4F5",
        60: "#F7F9FA",
        80: "#FBFBFB",
        100: "#FFFFFF",
      },
      Violet: {
        20: "#EEE6FF",
        40: "#D3BDFF",
        60: "#B18AFF",
        80: "#8F57FF",
        100: "#7F3DFF",
      },
      Yellow: {
        20: "#FCEED4",
        40: "#FCDDA1",
        60: "#FCCC6F",
        80: "#FCBB3C",
        100: "#FCAC12",
      },
      Green: {
        20: "#CFFAEA",
        40: "#93EACA",
        60: "#65D1AA",
        80: "#2AB784",
        100: "#00A86B",
      },
      Red: {
        20: "#FDD5D7",
        40: "#FDA2A9",
        60: "#FD6F7A",
        80: "#FD5662",
        100: "#FD3C4A",
      },
      blue: {
        20: "#BDDCFF",
        40: "#8AC0FF",
        60: "#57A5FF",
        80: "#248AFF",
        100: "#0077FF",
      },
    },
    fontFamily: {
      sans: ["Lato", ...defaultTheme.fontFamily.sans],
    },
  },

  plugins: [],
};
// 
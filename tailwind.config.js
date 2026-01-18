/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* =======================
         Fonts
      ======================= */
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },

      /* =======================
         Colors
      ======================= */
      colors: {
        /* Neutral */
        neutral: {
          950: "#000000",
          200: "#E1E1E1",
          0: "#FFFFFF",
        },

        /* Slate */
        slate: {
          500: "#7D829F",
          200: "#C8CCD8",
          100: "#EDEFF4",
        },

        /* Zinc */
        zinc: {
          900: "#1B1D23",
          600: "#686B7D",
        },

        /* Red */
        red: {
          500: "#DF5B5B",
        },

        /* Stone */
        stone: {
          100: "#FAEBE8",
        },
      },

      /* =======================
         Spacing Scale
      ======================= */
      spacing: {
        "0": "0px",
        "075": "6px",
        "100": "8px",
        "200": "16px",
        "300": "24px",
        "375": "30px",
        "400": "32px",
        "500": "40px",
        "600": "48px",
        "650": "52px",
        "700": "56px",
        "800": "64px",
        "900": "72px",
        "1000": "80px",
        "1200": "96px",
        "2500": "200px",
      },
    },
  },
  plugins: [],
};

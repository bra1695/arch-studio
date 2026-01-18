/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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

      /* =======================
         Animations
      ======================= */
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 1.2s ease-out',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'scale-in': 'scaleIn 0.8s ease-out',
        'bounce-in': 'bounceIn 1.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
          '70%': { transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

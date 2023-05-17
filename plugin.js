const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addBase, theme }) {
  },
  {
    theme: {
      screens: {
        xs: "400px",
        // => @media (min-width: 400px) { ... }

        sm: "540px",
        // => @media (min-width: 540px) { ... }

        md: "720px",
        // => @media (min-width: 720px) { ... }

        lg: "960px",
        // => @media (min-width: 960px) { ... }

        xl: "1140px",
        // => @media (min-width: 1240px) { ... }

        "2xl": "1320px",
        // => @media (min-width: 1320px) { ... }
      },
      container: {
        center: true,
        padding: "16px",
      },
      extend: {
      },
    },
  }
);

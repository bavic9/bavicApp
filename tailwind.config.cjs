// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         // primary: "#050816",
//         // secondary: "#aaa6c3",
//         // tertiary: "#151030",
//         // "black-100": "#100d25",
//         // "black-200": "#090325",
//         // "white-100": "#f3f3f3",

//         "skyBlue": "#5565e8",
//         "lightBlue": "#1e2d3d",
//         "text": "#607B96",
//         "ash": "#607B96",
//         "lightGreen": "#43d9ad",
//         "deepBlue": "#011627",
//         "black": "#333333",
//         "gray": "#676767",
//         "orange": "#fea55f",
//         "white": "#fff",
//         "offWhite": "#c4c4c4",
//         "pink": "#e99287",
//         "purple": "#c98bdf",
//       },
//       boxShadow: {
//         card: "0px 35px 120px -15px #211e35",
//       },
//       screens: {
//         // xs: "450px",
//         xs: "320px",
//         sm: "480px",
//         lg: "979px",
//         md: "768px",
//         xl: "1440px",
//       },
//       backgroundImage: {
//         "hero-pattern": "url('/src/assets/herobg.png')",
//       },
//       fontFamily: {
//         body: ['Source Code Pro', 'sans-serif'],
//       },
//     },
//     plugins: [],
//   };




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "skyBlue": "#5565e8",
        "lightBlue": "#1e2d3d",
        "text": "#607B96",
        "ash": "#607B96",
        "lightGreen": "#43d9ad",
        "deepBlue": "#011627",
        "black": "#333333",
        "gray": "#676767",
        "orange": "#fea55f",
        "white": "#fff",
        "offWhite": "#c4c4c4",
        "pink": "#e99287",
        "purple": "#c98bdf",



        // primary: "#050816",
        // secondary: "#aaa6c3",
        // tertiary: "#151030",
        // "black-100": "#100d25",
        // "black-200": "#090325",
        // "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        // xs: "450px",
        xs: "320px",
        sm: "480px",
        lg: "1023px",
        md: "768px",
        xl: "1440px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg.png')",
      // },
    },
  },
  plugins: [],
};
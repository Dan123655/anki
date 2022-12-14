// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  "./screens/**/*.{js,jsx,ts,tsx}",
  "./screens/HomeScreen.{js,jsx,ts,tsx}",
  "./components/Card.{js,jsx,ts,tsx}",
  "./components/BottomBar.{js,jsx,ts,tsx}",
  "./components/Slideshow.{js,jsx,ts,tsx}",
  "./components/Slide.{js,jsx,ts,tsx}",
  "./components/Category.{js,jsx,ts,tsx}",
  "./screens/SelectCategory.{js,jsx,ts,tsx}",
  "./screens/CreateNewCategory.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
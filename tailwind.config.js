import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

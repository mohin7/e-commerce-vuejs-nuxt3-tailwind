import defaultTheme from 'tailwindcss/defaultTheme'

export default {
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

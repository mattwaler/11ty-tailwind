module.exports = {
  purge: {
    content: [
      './src/**/*.njk',
      './src/**/*.js',
      './src/**/*.svelte',
      './src/**/*.svg',
    ],
  },
  plugins: [require('@tailwindcss/custom-forms')],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif;',
      },
    },
  },
}

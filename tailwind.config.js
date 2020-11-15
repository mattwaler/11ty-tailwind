module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true,
  },
  purge: {
    content: [
      './src/**/*.njk',
      './src/**/*.js',
      './src/**/*.svelte',
      './src/**/*.svg',
    ],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-debug-screens'),
  ],
  theme: {},
}

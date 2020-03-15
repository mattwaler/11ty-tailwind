const prod = process.env.NODE_ENV === 'production'
const purge = {
  content: ['scripts/**/*.js', 'scripts/**/*.svelte', 'views/**/*.njk'],
  extractors: [
    {
      extractor: value => value.match(/[A-z0-9-:%/]+/g) || [],
      extensions: ['js', 'njk', 'svelte'],
    },
  ],
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-nested'),
    require('autoprefixer'),
    ...(prod
      ? [require('@fullhuman/postcss-purgecss')(purge), require('cssnano')]
      : []),
  ],
}

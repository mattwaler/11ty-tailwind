// Config Arrays/Objects

const fontSizes = [14, 16, 18, 20, 24, 36, 48, 64]
const fontWeights = [400, 700, 900]
const percents = [25, 50, 75, 100]
const rems = [4, 8, 16, 24, 32, 48, 64, 96, 128]
const screens = [640, 768, 960]
const viewports = [100]

const fontSizeObject = {}
const fontWeightObject = {}
const percentObject = { '33%': '33.3333%', '66%': '66.6666%' }
const remObject = {}
const negativeRemObject = {}
const screenObject = {}
const viewportObject = {}

// Build Objects from Arrays

const rem = (value) => `${value / 16}rem`

fontSizes.forEach((value) => {
  fontSizeObject[value] = rem(value)
})

fontWeights.forEach((value) => {
  fontWeightObject[value] = value
})

percents.forEach((value) => {
  percentObject[`${value}%`] = `${value}%`
})

rems.forEach((value) => {
  remObject[value] = rem(value)
})
screens.forEach((value) => (remObject[value] = rem(value)))

const negativeRems = rems.map((value) => `-${value}`)
negativeRems.forEach((value) => {
  negativeRemObject[value] = rem(value)
})

screens.forEach((value) => {
  screenObject[`${value}`] = `${value}px`
})

viewports.forEach((value) => {
  viewportObject[`${value}vw`] = `${value}vw`
  viewportObject[`${value}vh`] = `${value}vh`
})

const spacing = {
  0: '0',
  auto: 'auto',
  ...remObject,
  ...percentObject,
  ...viewportObject,
}

module.exports = {
  corePlugins: {
    container: false,
  },
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
      colors: {},
      fontFamily: {
        inter: '"Inter", sans-serif;',
      },
    },
    fontSize: fontSizeObject,
    fontWeight: fontWeightObject,
    gap: remObject,
    height: spacing,
    margin: { ...spacing, ...negativeRemObject },
    maxHeight: spacing,
    maxWidth: spacing,
    minHeight: spacing,
    minWidth: spacing,
    padding: spacing,
    screens: screenObject,
    width: spacing,
  },
}

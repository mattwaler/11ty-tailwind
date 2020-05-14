module.exports = (config) => {
  config.addPassthroughCopy({ 'src/_public': './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })

  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}

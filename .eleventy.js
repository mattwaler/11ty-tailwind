module.exports = (config) => {
  config.addPassthroughCopy({ 'src/public': './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })

  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src/views',
      output: 'dist',
    },
  }
}

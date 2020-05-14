// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'BlueTree Landscaping LLC',
  siteUrl: 'https://www.bluetreesc.com/',
  siteDescription:
    'BlueTree Landscaping offers quality landscaping services for residential and commercial properties in Charleston, South Carolina.',
  titleTemplate: 'BlueTree — %s',

  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
  ],

  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
}

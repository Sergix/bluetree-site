const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(api) {
  api.configureServer((app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:34567',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  })
}

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Bluetree Landscaping LLC",
  siteUrl: "https://www.bluetreelandscapingllc.com/",
  siteDescription:
    "Bluetree Landscaping offers quality landscaping services for residential and commercial properties in Charleston, South Carolina.",
  titleTemplate: "Bluetree — %s",

  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
  ],
}

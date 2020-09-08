/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: process.env.TITLE || "Portfolio of RJP",
    description: "The ongoing portfolio of Ryan Peterson, Full Stack Developer and WordPress Engineer.",
    siteUrl: "http://dev.ryanjenningspeterson.com",
    image: "/images/logo.png",
    author: 'RJP',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio of RJP`,
        short_name: `Portfolio`,
        description: `Portfolio site displaying work`,
        lang: `en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon-16x16.png`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            `Inconsolata`,
          ],
        },
      },
    },
  ]
}

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
    `gatsby-plugin-less`,
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
            `Inconsolata:200,400,700.900`,
            `Titillium Web:400,900`,
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3ks1ektagoq6`,
        accessToken: `KZL94DdQ1ifxQppD-e0dcVWF4z-RCY1-eAySHxL_nFs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     // Available options and their defaults:
    //     base64Width: 20,
    //     forceBase64Format: ``, // valid formats: png,jpg,webp
    //     useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
    //     stripMetadata: true,
    //     defaultQuality: 50,
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-sharp`,
    //   options: {
    //     // The option defaults to true
    //     checkSupportedExtensions: false,
    //   },
    // },
  ]
}

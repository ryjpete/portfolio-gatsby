/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: process.env.TITLE || "Ryan Jennings Peterson",
    description: "The ongoing portfolio of Ryan Peterson, Full Stack Developer, WordPress Engineer, and Indie Author.",
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
            `Anton:400`,
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
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-react-redux`,
    //   options: {
    //     // [required] - path to your createStore module
    //     pathToCreateStoreModule: './src/state/createStore',
    //     // [optional] - options passed to `serialize-javascript`
    //     // info: https://github.com/yahoo/serialize-javascript#options
    //     // will be merged with these defaults:
    //     serialize: {
    //       space: 0,
    //       // if `isJSON` is set to `false`, `eval` is used to deserialize redux state,
    //       // otherwise `JSON.parse` is used
    //       isJSON: true,
    //       unsafe: false,
    //       ignoreFunction: true,
    //     },
    //     // [optional] - if true will clean up after itself on the client, default:
    //     cleanupOnClient: true,
    //     // [optional] - name of key on `window` where serialized state will be stored, default:
    //     windowKey: '__PRELOADED_STATE__',
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

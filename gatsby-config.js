/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Inconsolata`,
            variants: [
              `200`,
              `400`,
              `900`,
            ],
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     // Available options and their defaults:
    //     icon: `src/images/favicon-32x32.png`,
    //     base64Width: 20,
    //     forceBase64Format: `png`, // valid formats: png,jpg,webp
    //     useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
    //     stripMetadata: true,
    //     defaultQuality: 50,
    //   },
    // },
  ]
}

import React from "react"
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, image: metaImage, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image =
      metaImage && metaImage.src
        ? `${site.siteMetadata.siteUrl}${metaImage.src}`
        : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Helmet } from 'react-helmet'
// import { useLocation } from '@reach/router'
// import { useStaticQuery, graphql } from 'gatsby'

// const SEO = ({ title, description, url, image }) => {
//   const { pathname } = useLocation()
//   const { site } = useStaticQuery(query)

//   const {
//     defaultTitle,
//     defaultDescription,
//     siteUrl,
//     defaultImage
//   } = site.siteMetadata

//   const seo = {
//     title: title || defaultTitle,
//     description: description || defaultDescription,
//     url: `${siteUrl}${pathname}`,
//     image: `${siteUrl}${image || defaultImage}`,
//   }

//   return (
//     <Helmet title={seo.title}>
//       <title>{seo.title}</title>
//       <meta
//         name='description'
//         content={seo.description} />
//       <meta
//         name='image'
//         content={seo.image} />
//       {seo.url && <meta property="og:url" content={seo.url} />}
//       {seo.title && <meta property="og:title" content={seo.title} />}
//       {seo.description && (
//         <meta property="og:description" content={seo.description} />
//       )}
//       {seo.image && <meta property="og:image" content={seo.image} />}
//       {seo.title && <meta name="twitter:title" content={seo.title} />}
//       {seo.image && <meta name="twitter:image" content={seo.image} />}
//     </Helmet>
      
//   )
// }

// export default SEO

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   url: PropTypes.string,
//   image: PropTypes.string,
// }

// SEO.defaultProps = {
//   title: null,
//   description: null,
//   url: null,
//   image: null,
// }

// const query = graphql`
//   query SEO {
//     site {
//       siteMetadata {
//         defaultTitle: title
//         defaultDescription: description
//         siteUrl: url
//         defaultImage: image
//       }
//     }
//   }
// `
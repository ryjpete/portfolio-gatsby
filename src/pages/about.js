import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// import aboutStyles from './about.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageTitle from '../components/pageTitle/pageTitle'
import OpeningContent from '../components/OpeningContent/OpeningContent'

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulPageModel(contentful_id: {eq: "248EyvV1nx0ZSRlHY3hz4Z"}) {
        pageTitle
        metaDescription
        titleTag
        pageModelReferences {
          ... on ContentfulPageTitle {
            id
            pageTitle
          }
          ... on ContentfulOpeningContent {
            openingParagraph {
              json
            }
          }
        }
      }
    }
  `)
  // console.log(data)

  return (
    <Layout>
      <SEO
        title={data.contentfulPageModel.titleTag}
        description={data.contentfulPageModel.metaDescription} />
      
      <article>
      
        <PageTitle pageTitle={data.contentfulPageModel.pageModelReferences[0].pageTitle} />

        <OpeningContent data={data} />

      </article>

    </Layout>
  )
}

export default About

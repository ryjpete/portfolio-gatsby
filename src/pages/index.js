import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import { myContext } from '../../provider'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageTitle from '../components/pageTitle/pageTitle'
import OpeningContent from '../components/OpeningContent/OpeningContent'

const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      contentfulPageModel(contentful_id: {eq: "1Clyk58DFHg4E2FpQnAq1A"}) {
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

export default Home

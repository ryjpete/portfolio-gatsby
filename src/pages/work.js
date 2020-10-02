import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
// import WorkNav from '../components/workNav/workNav'
import PageTitle from '../components/pageTitle/pageTitle'
import OpeningContent from '../components/OpeningContent/OpeningContent'
import ProjectCard from '../components/ProjectCard/ProjectCard'

const Work = () => {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      contentfulPageModel(contentful_id: {eq: "6wXdbcfpTmUJ7kDinmTLiO"}) {
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
  console.log(data)

  return (
    <Layout>
      <SEO
        title={data.contentfulPageModel.titleTag}
        description={data.contentfulPageModel.metaDescription} />

      <article>
        
        <PageTitle pageTitle={data.contentfulPageModel.pageModelReferences[0].pageTitle} />

        <OpeningContent data={data} />

        {/* <WorkNav /> */}

        <ProjectCard />

      </article>

    </Layout>
  )
}

export default Work

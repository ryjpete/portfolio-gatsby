import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import aboutStyles from './about.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageTitle from '../components/pageTitle/pageTitle'

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulPageTitle(contentful_id: {eq: "1mLCKMjqW7LM3SG25PmJM6"}) {
        pageTitle
      }
      
      contentfulOpeningContent(contentful_id: {eq: "RsZdxwgyQmfJcJnOAohOw"}) {
        openingParagraph {
          json
        }
      }
    }
  `)
  // console.log(data)

  const pageTitle = data.contentfulPageTitle.pageTitle

  return (
    <Layout>
      <SEO
        title="About RJP"
        description="Ryan Peterson is a full-stack web developer based in the Chicagoland area." />
      
      <PageTitle pageTitle={pageTitle} />
      
      {data.contentfulOpeningContent.openingParagraph.json.content.map((para, index) => {
        return <p key={index} className={aboutStyles.level}>{para.content.map((par, index) => {
          return par.value
        })}</p>
      })}
    </Layout>
  )
}

export default About

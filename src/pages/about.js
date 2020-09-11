import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import aboutStyles from './about.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulAboutPage {
        pageTitle
        pageItems {
          json
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout>
      <SEO
        title="About RJP"
        description="Ryan Peterson is a full-stack web developer based in the Chicagoland area." />
        
      <h1>{data.contentfulAboutPage.pageTitle}</h1>
      
      {data.contentfulAboutPage.pageItems.json.content.map((item, index) => {
        return <p key={index} className={aboutStyles.level}>{item.content[0].value}</p>
      })}
    </Layout>
  )
}

export default About

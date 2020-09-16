import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import homeStyles from './index.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Home = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      contentfulPageTitle(contentful_id: {eq: "1d6VrCtsXkenxhvMPEswkT"}) {
        pageTitle
      }
    }
  `)
  // console.log(data)

  const pageTitle = data.contentfulPageTitle.pageTitle
  const newPageTitleArray = pageTitle.split('. ')
  console.log(newPageTitleArray)
  
  return (
    <Layout>
      <SEO
        title="Home"
        description="The portfolio site of Ryan Peterson, full-stack web developer." />
        
      <h1 className={homeStyles.pageTitle}>
        {newPageTitleArray.map((item, index) => {
          item = item.replace('.', '')
          return <span key={index}>{item}.</span>
        })}
      </h1>
    </Layout>
  )
}


export default Home

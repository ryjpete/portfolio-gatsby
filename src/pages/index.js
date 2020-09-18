import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// import homeStyles from './index.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageTitle from '../components/pageTitle/pageTitle'

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
  
  return (
    <Layout>
      <SEO
        title="Home"
        description="The portfolio site of Ryan Peterson, full-stack web developer." />
      
      <PageTitle pageTitle={pageTitle} />
    </Layout>
  )
}

export default Home

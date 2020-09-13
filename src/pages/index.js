import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import homeStyles from './index.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Home = () => {
  // contentfulHomePage(id: {eq: "f6e5db1e-ecd3-5e1d-9b44-429172070cb5"}) {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      contentfulHomePage {
        pageTitle
        pageItems {
          json
          content {
            content {
              value
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
        title="Home"
        description="The portfolio site of Ryan Peterson, full-stack web developer." />
        
      <h1>{data.contentfulHomePage.pageTitle}</h1>

      {data.contentfulHomePage.pageItems.json.content.map((item, index) => {
        let paragraph = item.content[0].value.replace('&nbsp;', '-')

        return <p key={index} className={`${homeStyles.level}`}>{paragraph}</p>
      })}
    </Layout>
  )
}


export default Home

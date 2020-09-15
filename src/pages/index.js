import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import homeStyles from './index.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Home = () => {
  // contentfulHomePage(id: {eq: "f6e5db1e-ecd3-5e1d-9b44-429172070cb5"}) {
  // const data = useStaticQuery(graphql`
  //   query HomeQuery {
  //     contentfulHomePage {
  //       pageTitle
  //       pageItems {
  //         json
  //       }
  //     }
  //   }
  // `)
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
        
      {/* <h1>{data.contentfulHomePage.pageTitle}</h1> */}
      <h1 className={homeStyles.pageTitle}>
        {newPageTitleArray.map((item, index) => {
          item = item.replace('.', '')
          return <span key={index}>{item}.</span>
        })}
      </h1>

      {/* {data.contentfulHomePage.pageItems.json.content.map((item, index) => {
        return <p key={index} className={`${homeStyles.level}`}>{item.content[0].value}</p>
      })} */}
    </Layout>
  )
}


export default Home

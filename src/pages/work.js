import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// import workStyles from './work.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
// import WorkNav from '../components/workNav/workNav'
import PageTitle from '../components/pageTitle/pageTitle'
import OpeningContent from '../components/OpeningContent/OpeningContent'

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

  return (
    <Layout>
      <SEO
        title={data.contentfulPageModel.titleTag}
        description={data.contentfulPageModel.metaDescription} />

      <article>
        
        <PageTitle pageTitle={data.contentfulPageModel.pageModelReferences[0].pageTitle} />

        <OpeningContent data={data} />

        {/* <div className='item'>
          <h3 className='title'>Amata Law Offices</h3>
          <h6 className='item'>For: Connections Marketing</h6>
        </div>

        <div className='item'>
          <h3 className='title'>Bellair</h3>
          <h6 className='item'>For: Connections Marketing</h6>
        </div>

        <div className='item'>
          <h3 className='title'>CD One Price Cleaners</h3>
          <h6 className='item'>For: Connections Marketing</h6>
        </div>

        <div className='item'>
          <h3 className='title'>CheckChangers</h3>
          <h6 className='item'>For: Connections Marketing</h6>
        </div>

        <div className='item'>
          <h3 className='title'>CigarMedics</h3>
          <h6 className='item'>For: Connections Marketing</h6>
        </div>
        
        <div className='item'>
          <h3 className='title'>Connections Marketing</h3>
          <h6 className='item'>For: Connections Marketing</h6>
        </div>

        <div className='item'>
          <h3 className='title'>Connections Marketing v2</h3>
          <h6 className='item'>For: Connections Marketing</h6>
        </div>

        <div className='item'>
          <h3 className='title'>Cook Brothers</h3>
          <h6 className='item'>For: Connections Marketing</h6>
        </div> */}

      </article>

    </Layout>
  )
}

export default Work

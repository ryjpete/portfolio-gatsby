import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import workStyles from './work.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import WorkNav from '../components/workNav/workNav'
import PageTitle from '../components/pageTitle/pageTitle'

const Work = ({ location }) => {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      contentfulPageModel(contentful_id: {eq: "6wXdbcfpTmUJ7kDinmTLiO"}) {
        pageTitle
      }

      allContentfulProjectModel {
        edges {
          node {
            projectTitle
            slug
            projectDate(formatString: "MM'YY")
            id
            contentful_id
            client
          }
        }
      }
    }
  `)

  const pageTitle = data.contentfulPageModel.pageTitle

  return (
    <Layout>
      <SEO
        title='Work'
        description="Ryan J Peterson's work as a developer and designer." />

      <article>
        
        <PageTitle pageTitle={pageTitle} />

        <div className={workStyles.workBlock}>
          {/* <WorkNav /> */}

          <div className={workStyles.workContent}>
            <h2>Projects are on their way.</h2>
            <p>Projects are being developed, so they'll start to show here as soon as I get them functioning. Or partially-functioning. It's really all a work in progress, so if there's at least <em>some</em> progress, then it's working. ... Think about it.</p>

            {/* <div className={workStyles.projects}>
              {data.allContentfulProjectModel.edges.map((project, index) => {
                return (
                  <div key={index} className={workStyles.project}>
                    <h3 className={workStyles.projectClient}>{project.node.client}</h3>
                    <h4 className={workStyles.projectTitle}>{project.node.projectTitle}</h4>
                  </div>
                )
              })}
            </div> */}
          </div>
        </div>


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

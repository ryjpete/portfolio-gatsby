import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import workStyles from './work.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import WorkNav from '../components/workNav/workNav'
import PageTitle from '../components/pageTitle/pageTitle'

const Work = () => {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      contentfulPageModel(contentful_id: {eq: "6wXdbcfpTmUJ7kDinmTLiO"}) {
        pageTitle
      }
    }
  `)

  const pageTitle = data.contentfulPageModel.pageTitle

  return (
    <Layout>
      <SEO
        title='Work'
        description="Ryan J Peterson's work as a developer and designer." />
        
      <PageTitle pageTitle={pageTitle} />

      <div className={workStyles.workBlock}>
        <WorkNav />

        <div className={workStyles.workContent}>
          <h2>Projects are on their way.</h2>
          <p>As this site is currently in development, the smart thing to do would be to <em>not</em> put these pages up with literally no projects listed. But what fun is that? There <em>are</em> projects waiting patiently in line to get up here, I promise. But they're being patient, as you should be.</p>
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
    </Layout>
  )
}

export default Work

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import workStyles from './work.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Work = () => {
  const data = useStaticQuery(graphql`
    query WorkQuery {
      contentfulPageModel(contentful_id: {eq: "6wXdbcfpTmUJ7kDinmTLiO"}) {
        id
        pageTitle
        pageSlug
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title='Work'
        description="Ryan J Peterson's work as a developer and designer." />

      <h1 className={workStyles.pageTitle}>{data.contentfulPageModel.pageTitle}</h1>

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

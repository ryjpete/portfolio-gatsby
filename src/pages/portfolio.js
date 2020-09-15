import React from 'react'

import portfolioStyles from './portfolio.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const Portfolio = () => {
  return (
    <Layout>
      <SEO
        title='Work'
        description="Ryan J Peterson's work as a developer and designer." />

      <h1>Work</h1>

      <div className='item'>
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
      </div>
    </Layout>
  )
}

export default Portfolio

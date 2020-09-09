import React, { Component } from 'react'
import aboutStyles from './about.module.css'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

class About extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="About RJP"
          description="Ryan Peterson is a full-stack web developer based in the Chicagoland area." />
          
        <div className='content'>
          <h1>About RJP</h1>
          <div className={aboutStyles.level}>
            <p>personally, i'm a creative. i've spent my entire life drawing or writing or designing. creativity is where my passion lies.</p>
            <p>that creativity also belongs to my development side. i'm always searching to push my personal knowledge, to figure out different ways to build, to quench the technological thirst.</p>
            <p>i've learned over the years that it's neverending. whether it's a new book idea or a realization of new libraries/frameworks/languages, the creative education never stops.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default About

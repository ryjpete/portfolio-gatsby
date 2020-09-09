import React, { Component } from 'react'
import homeStyles from './index.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

class Home extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          description="The portfolio site of Ryan Peterson, full-stack web developer." />
          
        <h1>Portfolio of RJP</h1>
        <p className={homeStyles.level}>this site is never finished. it progresses. constantly. yet it will never be complete.</p>
        <p className={`${homeStyles.level} ${homeStyles.level_1}`}>this site will display some of the work i've been on. some of it will be independent work. some will be agency work.</p>
        <p className={`${homeStyles.level} ${homeStyles.level_2}`}>i will try to give a description of my tasks for each.</p>
      </Layout>
    )
  }
}

export default Home

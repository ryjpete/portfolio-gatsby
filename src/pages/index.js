import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import homeStyles from './index.module.css'
import Header from '../components/header/header'

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Helmet>
          <meta charSet='utf-8' />
          <meta
            name='description'
            content='The ongoing portfolio of Ryan Peterson, Full Stack Developer and WordPress Engineer.' />
          <title>Portfolio of RJP</title>
        </Helmet>
        
        <main>
          <Header />

          <section className='primary'>
            <div className='content'>
              <h1>Portfolio of RJP</h1>
              <p className={homeStyles.level}>this site is never finished. it progresses. constantly. yet it will never be complete.</p>
              <p className={`${homeStyles.level} ${homeStyles.level1}`}>this site will display some of the work i've been on. some of it will be independent work. some will be agency work.</p>
              <p className={`${homeStyles.level} ${homeStyles.level2}`}>i will try to give a description of my tasks for each.</p>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Home

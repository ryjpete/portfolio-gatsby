import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
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

          <section id='content'>
            <div className='content'>
              <h1>Portfolio of RJP</h1>
              <p className="level level-0">this site is never finished. it progresses. constantly. yet it will never be complete.</p>
              <p className="level level-1">this site will display some of the work i've been on. some of it will be independent work. some will be agency work.</p>
              <p className="level level-2">i will try to give a description of my tasks for each.</p>
            </div>
          </section>
        </main>

        <style jsx>{`
          .container {
            display: flex;
            min-height: 100vh;
          }

          main {
            display: flex;
            flex: 1;
          }

          #content {
            align-items: center;
            display: flex;
            flex: 1;
            padding-left: 180px;
          }
          #content .content {
            padding: 0 10%;
          }

          h1 {
            font-size: 3rem;
            font-weight: 200;
            margin-top: 0;
          }

          p.level-1 {
            margin-left: 50px;
          }
          p:last-of-type {
            margin-bottom: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default Home

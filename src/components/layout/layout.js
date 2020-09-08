import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../header/header'

export default function Layout({ children }) {
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
        
        <article className='primary'>
          {children}
        </article>
      </main>
    </div>
  )
}
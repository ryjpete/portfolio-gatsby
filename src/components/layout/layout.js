import React from 'react'
import Header from '../header/header'

export default function Layout({ children }) {
  return (
    <div className='container'>
      <main> 
        <Header />
        
        <article className='primary'>
          {children}
        </article>
      </main>
    </div>
  )
}
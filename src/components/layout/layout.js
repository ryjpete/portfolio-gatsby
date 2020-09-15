import React from 'react'
import layoutStyles from './layout.module.less'
import Header from '../header/header'

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      {/* <main>  */}
        <Header />
        
        <article className={layoutStyles.primary}>
          <div className={layoutStyles.content}>
            {children}
          </div>
        </article>
      {/* </main> */}

      {/* <canvas id={layoutStyles.background}></canvas> */}
    </div>
  )
}
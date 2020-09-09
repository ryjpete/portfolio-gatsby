import React from 'react'
import fourOhFourStyles from './404.module.css'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'

const PageNotFound = () => (
  <Layout>
    <SEO
      title="Detour"
      description="Looks like you're in the wrong spot. Recalculating..." />

    <div className='content'>
      <h1>Recalculating...</h1>
      <p className={fourOhFourStyles.level}>there's a good chance you're here by mistake.</p>     
      <p className={`${fourOhFourStyles.level} ${fourOhFourStyles.level1}`}>we'll get you on the right path.</p>
          <p className={`${fourOhFourStyles.level} ${fourOhFourStyles.level2}`}>use the navigation to find what you're looking for.</p>
    </div>
  </Layout>
)

export default PageNotFound

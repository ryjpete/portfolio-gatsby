import React from 'react'
import { graphql } from 'gatsby'

import workCategoryStyles from './workCategory.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import WorkNav from '../components/workNav/workNav'

export const query = graphql`
  query($slug: String!) {
    contentfulWorkCategory(workCategorySlug: { eq: $slug }) {
      workCategoryTitle
    }
  }
`

const WorkCategory = props => {  
  return (
    <Layout>
      <SEO
        title='Work'
        description="Ryan J Peterson's work as a developer and designer." />

      <h1 className={workCategoryStyles.pageTitle}>{props.data.contentfulWorkCategory.workCategoryTitle}</h1>

      <div className={workCategoryStyles.workBlock}>
        <WorkNav />

        <div className={workCategoryStyles.workContent}>
          <h2>{props.data.contentfulWorkCategory.workCategoryTitle} projects are on their way.</h2>
          <p>As this site is currently in development, the smart thing to do would be to <em>not</em> put these pages up with literally no projects listed. But what fun is that? There <em>are</em> projects waiting patiently in line to get up here, I promise. But they're being patient, as you should be.</p>
        </div>
      </div>
    </Layout>
  )
}

export default WorkCategory

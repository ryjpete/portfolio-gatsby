import React from 'react'
import { graphql } from 'gatsby'

import workCategoryStyles from './workCategory.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import WorkNav from '../components/workNav/workNav'
import PageTitle from '../components/pageTitle/pageTitle'

export const query = graphql`
  query($slug: String!) {
    contentfulWorkCategory(workCategorySlug: { eq: $slug }) {
      workCategoryTitle
    }
  }
`

const WorkCategory = props => {
  const pageTitle = props.data.contentfulWorkCategory.workCategoryTitle

  return (
    <Layout>
      <SEO
        title='Work'
        description="Ryan J Peterson's work as a developer and designer." />

      <PageTitle pageTitle={pageTitle} />

      <div className={workCategoryStyles.workBlock}>
        <WorkNav />

        <div className={workCategoryStyles.workContent}>
          <h2>{props.data.contentfulWorkCategory.workCategoryTitle} projects are on their way.</h2>
          <p>Projects are being developed, so they'll start to show here as soon as I get them functioning. Or partially-functioning. It's really all a work in progress, so if there's at least <em>some</em> progress, then it's working. ... Think about it.</p>
        </div>
      </div>
    </Layout>
  )
}

export default WorkCategory

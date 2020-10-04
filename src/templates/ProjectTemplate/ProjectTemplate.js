import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import SEO from '../../components/seo/seo'
import PageTitle from '../../components/pageTitle/pageTitle'

export const query = graphql`
  query($id: String!) {
    contentfulProjectModel(contentful_id: {eq: $id}) {
      client
      shortDescription
    }
  }
`
// console.log(query)

const Project = props => {
  return (
    <Layout>
      <SEO
        title={`${props.data.contentfulProjectModel.client} - Work`}
        description={props.data.contentfulProjectModel.shortDescription} />

      <article>

        <PageTitle
          pageTitle={props.data.contentfulProjectModel.client} />

        <p>This will be coming shortly. I promise.</p>

      </article>

    </Layout>
  )
}

export default Project

import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import workNavStyles from './workNavStyles.module.less'

const WorkNav = () => {
  const data = useStaticQuery(graphql`
    query WorkNavQuery {
      contentfulPageModel(contentful_id: {eq: "6wXdbcfpTmUJ7kDinmTLiO"}) {
        pageModelReferences {
          ... on ContentfulWorkCategory {
            id
            workCategoryTitle
            workCategorySlug
            subCategory {
              contentful_id
              workCategorySlug
              workCategoryTitle
            }
          }
        }
      }
    }
  `)
  return (
    <ul className={workNavStyles.list}>
      {data.contentfulPageModel.pageModelReferences.map((ref) => {
        return (
          <li key={ref.id}>
            <Link
              to={`/${ref.workCategorySlug}`}
              activeClassName={workNavStyles.active}>
              {ref.workCategoryTitle}
            </Link>

            <ul className={workNavStyles.list}>
              {ref.subCategory.map((sub) => {
                return (
                  <li key={sub.contentful_id}>
                    <Link
                      to={`/${sub.workCategorySlug}`}
                      activeClassName={workNavStyles.active}>
                        {sub.workCategoryTitle}
                      </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

export default WorkNav
import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { myContext } from '../../../provider'
import { globalHistory } from '@reach/router'

import workNavStyles from './workNav.module.less'

const WorkNav = () => {
  const data = useStaticQuery(graphql`
    query WorkNavQuery {
      contentfulPageModel(contentful_id: {eq: "6wXdbcfpTmUJ7kDinmTLiO"}) {
        pageModelReferences {
          ... on ContentfulWorkCategory {
            contentful_id
            workCategoryTitle
            workCategorySlug
          }
        }
      }
    }
  `)
  // console.log(data)

  return (
    <>
      <myContext.Consumer>
        {context => (
          <React.Fragment>
            <nav className={workNavStyles.nav}>
              <Link
                to='/work/'
                className={workNavStyles.workLink}
                activeClassName={workNavStyles.active}
                style={{color: `${context.navColor}`}}
                activeStyle={{
                  backgroundColor: `${context.pageTitleColor}`,
                  color: `${context.bgColor}`
                }}
              >
                  All Work
              </Link>
              {data.contentfulPageModel.pageModelReferences.map((ref) => {
                if (ref.__typename === 'ContentfulWorkCategory') {
                  return (
                    <Link
                      key={ref.id}
                      to={`/${ref.workCategorySlug}/`}
                      className={workNavStyles.workLink}
                      activeClassName={workNavStyles.active}
                      style={{color: `${context.navColor}`}}
                      activeStyle={{
                        backgroundColor: `${context.pageTitleColor}`,
                        color: `${context.bgColor}`
                      }}
                    >
                      {ref.workCategoryTitle}
                    </Link>          
                  )
                }
              })}
            </nav>
          </React.Fragment>
        )}
      </myContext.Consumer>
    </>
  )



  // return (
    // <ul className={`${workNavStyles.list}`}>
    //   {data.contentfulPageModel.pageModelReferences.map((ref) => {
    //     return (
    //       <li
  //         key={ref.id}
    //         className={`${workNavStyles.menuItem} ${pathname === '/' + ref.workCategorySlug ? workNavStyles.currentMenuItem : ''}`}>
    //         <Link
    //           to={`/${ref.workCategorySlug}`}
    //           className={workNavStyles.menuLink}
    //           activeClassName={workNavStyles.active}>
    //           {ref.workCategoryTitle}
    //         </Link>
  
    //         <ul className={`${workNavStyles.list} ${workNavStyles.level1}`}>
    //           {ref.subCategory.map((sub) => {
    //             return (
    //               <li
    //                 key={sub.contentful_id}
    //                 className={`${workNavStyles.menuItem} ${pathname === '/' + sub.workCategorySlug ? workNavStyles.currentMenuItem : ''}`}>
    //                 <Link
    //                   to={`/${sub.workCategorySlug}`}
    //                   className={workNavStyles.menuLink}
    //                   activeClassName={workNavStyles.active}>
    //                     {sub.workCategoryTitle}
    //                   </Link>
    //               </li>
    //               )
    //             })}
    //         </ul>
    //       </li>
    //     )
    //   })}
    // </ul>
    // <div className={workNavStyles.list}>
    //   {data.contentfulPageModel.pageModelReferences.map((ref) => {
    //     return (
    //       <h3 key={ref.id}>
    //         {/* <TransitionLink
    //           // to={`${ref.workCategorySlug}`}
    //           // className={workNavStyles.menuLink}
    //           // activeClassName={workNavStyles.active}
    //           exit={{
    //             length: 1,
    //             trigger: ({ exit, node }) =>
    //               this.someCustomDefinedAnimation({ exit, node, direction: 'out' }),
    //           }}
    //           entry={{
    //             length: 0,
    //             trigger: ({ exit, node }) =>
    //               this.someCustomDefinedAnimation({ exit, node, direction: 'in' }),
    //           }}
    //         > */}
    //           {ref.workCategoryTitle}
    //         {/* </TransitionLink> */}
    //       </h3>
    //     )
    //   })}
    // </div>
  // )
}

export default WorkNav
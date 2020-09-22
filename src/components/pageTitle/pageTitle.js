import React from 'react'
import { myContext } from '../../../provider'

import pageTitleStyles from './pageTitle.module.less'

const PageTitle = (props) => {
  const newPageTitleArray = props.pageTitle.split('. ')

  return (
    <>
      <myContext.Consumer>
        {context => (
          <React.Fragment>
            <h1
              className={pageTitleStyles.pageTitle}
              style={{color: `${context.pageTitleColor}`}}
            >
              {newPageTitleArray.map((item, index) => {
                item = item.replace('.', '')
                return <span key={index}>{item}.</span>
              })}
            </h1>
          </React.Fragment>
        )}
      </myContext.Consumer>
    </>
  )
}

export default PageTitle

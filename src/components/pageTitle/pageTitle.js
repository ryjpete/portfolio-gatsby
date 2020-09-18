import React from 'react'
import pageTitleStyles from './pageTitle.module.less'

const PageTitle = props => {
  const newPageTitleArray = props.pageTitle.split('. ')

  return (
    <h1 className={pageTitleStyles.pageTitle}>
      {newPageTitleArray.map((item, index) => {
        item = item.replace('.', '')
        return <span key={index}>{item}.</span>
      })}
    </h1>
  )
}

export default PageTitle
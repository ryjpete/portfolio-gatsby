import React from 'react'

import styles from './OpeningContent.module.less'

const OpeningContent = props => {
  return (
    <React.Fragment>
      {props.data.contentfulPageModel.pageModelReferences.map((ref, index) => {
        if (ref.__typename === 'ContentfulOpeningContent') {
          return (
            <div key={index} className={styles.openingContent}>
              {ref.openingParagraph.json.content.map((para, index) => {
                return (
                  <p key={index}>{para.content.map((item, index) => {
                    return <React.Fragment key={index}>{item.value}</React.Fragment>
                  })}</p>
                )
              })}
            </div>
          )
        }
      })}
    </React.Fragment>
  )
}

export default OpeningContent

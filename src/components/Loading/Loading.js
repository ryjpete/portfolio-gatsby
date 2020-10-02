import { Context } from 'gatsby-plugin-transition-link/context/createTransitionContext'
import React from 'react'
import { myContext } from '../../../provider'

const Loading = () => {
  return (
    <myContext.Consumer>
      {context => {
        <React.Fragment>
          <p>Loading</p>
          <button onClick={() => {
            alert('test')
            // context.changeIsLoaded()
          }}>
            asdfasdfasdf
          </button>
        </React.Fragment>
      }}
    </myContext.Consumer>
  )
}

export default Loading
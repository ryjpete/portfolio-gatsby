import React from 'react'
import PropTypes from 'prop-types'
import { myContext } from '../../../provider'
import { createGlobalStyle } from 'styled-components'

import Header from '../header/header'

const GlobalStyle = createGlobalStyle`
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    color: ${props => props.pTag};
  }
`

const Layout = ({ children }) => {
  return (
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <GlobalStyle pTag={context.pageTitleColor} />

          <main style={{backgroundColor: context.bgColor}}>
            <Header />
            
            {children}
          </main>
        </React.Fragment>
      )}
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

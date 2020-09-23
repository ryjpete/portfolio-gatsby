import React from 'react'
import PropTypes from 'prop-types'
import { myContext } from '../../../provider'
import { createGlobalStyle } from 'styled-components'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import Header from '../header/header'
import { motion } from 'framer-motion'

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

          {/* <TransitionPortal>
            <h2>previous: {context.prevBgColor}</h2>
            <h2>current: {context.bgColor}</h2>
          </TransitionPortal> */}

          {/* <main style={{backgroundColor: context.bgColor}}> */}
          <motion.main
            style={{backgroundColor: context.bgColor}}
            animate={{
              backgroundColor: [context.prevBgColor, context.bgColor]
            }}
          >
            <Header />
            
            {children}
          </motion.main>
          {/* </main> */}
        </React.Fragment>
      )}
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

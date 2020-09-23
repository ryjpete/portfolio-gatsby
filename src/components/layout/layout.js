import React from 'react'
import PropTypes from 'prop-types'
import { myContext } from '../../../provider'
import { createGlobalStyle } from 'styled-components'

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

          <motion.main
            style={{backgroundColor: context.bgColor}}
            animate={{
              backgroundColor: [context.prevBgColor, context.bgColor]
            }}
          >
            <Header />
            
            {children}
          </motion.main>
          
        </React.Fragment>
      )}
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

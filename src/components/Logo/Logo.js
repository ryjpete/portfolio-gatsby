import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import { motion } from 'framer-motion'
import { myContext } from '../../../provider'

import LogoStyles from './Logo.module.less'

const Logo = () => {
  return (
    <>
      <myContext.Consumer>
        {context => (
          <React.Fragment>
            <motion.div
              whileHover={{
                scale: 1.4,
                rotate: 270,
              }}
              whileTap={{ scale: 0.8 }}
            >
              <TransitionLink
                className={LogoStyles.logoLink}
                style={{color: `${context.logoColor}`}}
                to='/'
                onClick={() => {
                  context.changeBgColor('#ffffff')
                  context.changePageTitleColor('#06d6a0')
                  context.changeLogoColor('#202020')
                  context.changeNavColor('#202020')
                  context.changePrevBgColor(context.bgColor)
                }}
              >
                <span className={LogoStyles.letter}>r</span>
                <span className={LogoStyles.letter}>j</span>
                <span className={LogoStyles.letter}>p</span>
              </TransitionLink>
            </motion.div>            
          </React.Fragment>
        )}
      </myContext.Consumer>
    </>
  )
}

export default Logo
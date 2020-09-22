import React from 'react'
import { Link } from 'gatsby'
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
              <Link
                className={LogoStyles.logoLink}
                style={{color: `${context.logoColor}`}}
                to='/'
                onClick={() => {
                  context.changeBgColor('#ffffff')
                  context.changePageTitleColor('#06d6a0')
                  context.changeLogoColor('#202020')
                  context.changeNavColor('#202020')
                }}
              >
                <span className={LogoStyles.letter}>r</span>
                <span className={LogoStyles.letter}>j</span>
                <span className={LogoStyles.letter}>p</span>
              </Link>
            </motion.div>            
          </React.Fragment>
        )}
      </myContext.Consumer>
    </>
  )
}

export default Logo
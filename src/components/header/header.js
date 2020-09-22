import React from 'react'
import { myContext } from '../../../provider'
import { Link } from 'gatsby'

import headerStyles from './header.module.less'
import Logo from '../Logo/Logo'

const Header = () => (
  <>
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <header
            className={headerStyles.header}
            style={{backgroundColor: `${context.bgColor}`}}
          >
            <Logo />

            <nav className={headerStyles.navigation}>
              <ul>
                <li>
                  <Link
                    to='/'
                    activeClassName={headerStyles.active}
                    style={{color: `${context.navColor}`}}
                    activeStyle={{backgroundColor: `${context.pageTitleColor}`, color: `${context.bgColor}`}}
                    onClick={() => {
                      context.changeBgColor('#ffffff')
                      context.changePageTitleColor('#06d6a0')
                      context.changeLogoColor('#202020')
                      context.changeNavColor('#202020')
                    }}
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about/'
                    activeClassName={headerStyles.active}
                    style={{color: `${context.navColor}`}}
                    activeStyle={{backgroundColor: `${context.pageTitleColor}`, color: `${context.bgColor}`}}
                    onClick={() => {
                      context.changeBgColor('#3479DF')
                      context.changePageTitleColor('#E2ECFA')
                      context.changeLogoColor('#133B77')
                      context.changeNavColor('#E2ECFA')
                    }}
                    >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    to='/work/'
                    activeClassName={headerStyles.active}
                    style={{color: `${context.navColor}`}}
                    activeStyle={{backgroundColor: `${context.pageTitleColor}`, color: `${context.bgColor}`}}
                    onClick={() => {
                      context.changeBgColor('#287473')
                      context.changePageTitleColor('#6BCCCB')
                      context.changeLogoColor('#143B3A')
                      context.changeNavColor('#6BCCCB')
                    }}
                    >
                    work
                  </Link>
                </li>
                <li>
                  <Link
                    to='/resume/'
                    activeClassName={headerStyles.active}
                    style={{color: `${context.navColor}`}}
                    activeStyle={{backgroundColor: `${context.pageTitleColor}`, color: `${context.bgColor}`}}
                    onClick={() => {
                      context.changeBgColor('#ff6392')
                      context.changePageTitleColor('#FFDDE7')
                      context.changeLogoColor('#B00035')
                      context.changeNavColor('#FFDDE7')
                    }}
                  >
                    resume
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </React.Fragment>
      )}
    </myContext.Consumer>
  </>
)

export default Header

import React from 'react'
import { myContext } from '../../../provider'
import TransitionLink from 'gatsby-plugin-transition-link'

import headerStyles from './header.module.less'
import Logo from '../Logo/Logo'

const Header = () => (
  <>
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <header
            className={headerStyles.header}
            // style={{backgroundColor: `${context.bgColor}`}}
          >
            <Logo />

            <nav className={headerStyles.navigation}>
              <ul>
                <li>
                  <TransitionLink
                    to='/'
                    activeClassName={headerStyles.active}
                    style={{color: `${context.navColor}`}}
                    activeStyle={{backgroundColor: `${context.pageTitleColor}`, color: `${context.bgColor}`}}
                    onClick={() => {
                      context.changeBgColor('#ffffff')
                      context.changePageTitleColor('#06d6a0')
                      context.changeLogoColor('#202020')
                      context.changeNavColor('#202020')
                      context.changePrevBgColor(context.bgColor)
                    }}
                  >
                    home
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink
                    to='/about/'
                    activeClassName={headerStyles.active}
                    style={{color: `${context.navColor}`}}
                    activeStyle={{backgroundColor: `${context.pageTitleColor}`, color: `${context.bgColor}`}}
                    onClick={() => {
                      context.changeBgColor('#3479DF')
                      context.changePageTitleColor('#E2ECFA')
                      context.changeLogoColor('#133B77')
                      context.changeNavColor('#E2ECFA')
                      context.changePrevBgColor(context.bgColor)
                    }}
                    >
                    about
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink
                    to='/work/'
                    activeClassName={headerStyles.active}
                    style={{color: `${context.navColor}`}}
                    activeStyle={{backgroundColor: `${context.pageTitleColor}`, color: `${context.bgColor}`}}
                    onClick={() => {
                      context.changeBgColor('#287473')
                      context.changePageTitleColor('#6BCCCB')
                      context.changeLogoColor('#143B3A')
                      context.changeNavColor('#6BCCCB')
                      context.changePrevBgColor(context.bgColor)
                    }}
                    >
                    work
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink
                    to='/resume/'
                    activeClassName={headerStyles.active}
                    style={{color: `${context.navColor}`}}
                    activeStyle={{backgroundColor: `${context.pageTitleColor}`, color: `${context.bgColor}`}}
                    onClick={() => {
                      context.changeBgColor('#ff6392')
                      context.changePageTitleColor('#FFDDE7')
                      context.changeLogoColor('#B00035')
                      context.changeNavColor('#FFDDE7')
                      context.changePrevBgColor(context.bgColor)
                    }}
                  >
                    resume
                  </TransitionLink>
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

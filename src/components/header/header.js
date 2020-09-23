import React from 'react'
import { myContext } from '../../../provider'
import TransitionLink from 'gatsby-plugin-transition-link'

import headerStyles from './header.module.less'
import Logo from '../Logo/Logo'

const mainNav = [
  {
    name: 'home',
    to: '/',
    bgColor: '#ffffff',
    pageTitleColor: '#06d6a0',
    logoColor: '#202020',
    navColor: '#202020',
  },
  {
    name: 'about',
    to: '/about/',
    bgColor: '#3479DF',
    pageTitleColor: '#E2ECFA',
    logoColor: '#133B77',
    navColor: '#E2ECFA',
  },
  {
    name: 'work',
    to: '/work/',
    bgColor: '#287473',
    pageTitleColor: '#6BCCCB',
    logoColor: '#143B3A',
    navColor: '#6BCCCB',
  },
  {
    name: 'resume',
    to: '/resume/',
    bgColor: '#ff6392',
    pageTitleColor: '#FFDDE7',
    logoColor: '#B00035',
    navColor: '#FFDDE7',
  },
]

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
                {mainNav.map((item, index) => {
                  return (
                    <li key={index}>
                      <TransitionLink
                        to={item.to}
                        activeClassName={headerStyles.active}
                        style={{color: `${context.navColor}`}}
                        activeStyle={{
                          backgroundColor: `${context.pageTitleColor}`,
                          color: `${context.bgColor}`
                        }}
                        onClick={() => {
                          context.changeBgColor(item.bgColor)
                          context.changePageTitleColor(item.pageTitleColor)
                          context.changeLogoColor(item.logoColor)
                          context.changeNavColor(item.navColor)
                          context.changePrevBgColor(context.bgColor)
                        }}
                      >
                        {item.name}
                      </TransitionLink>
                    </li>
                  )
                })}
              </ul>
            </nav>

          </header>
        </React.Fragment>
      )}
    </myContext.Consumer>
  </>
)

export default Header

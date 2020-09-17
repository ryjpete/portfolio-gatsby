import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.less'
import logo from './logo_bl.png'

export default function Header() {
  console.log(logo)
  return (
    <header className={headerStyles.header}>
      <Link to ='/'>
        <img className={headerStyles.logo} src={logo} alt='rjp' />
      </Link>

      <p className={headerStyles.tagline}>portfolio site of developer<span>Ryan J Peterson</span></p>

      <nav className={headerStyles.navigation}>
        <ul>
          <li>
            <Link
              to='/'
              activeClassName={headerStyles.active}>home</Link>
          </li>
          <li>
            <Link
              to='/about/'
              activeClassName={headerStyles.active}>about</Link>
          </li>
          <li>
            <Link
              to='/work/'
              activeClassName={headerStyles.active}>work</Link>
          </li>
          <li>
            <Link
              to='/resume/'
              activeClassName={headerStyles.active}>resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
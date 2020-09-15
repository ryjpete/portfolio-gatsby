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
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about/'>about</Link>
          </li>
          {/* <li>
            <Link to='/portfolio/'>work</Link>
          </li> */}
          <li>
            <Link to='/resume/'>resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.css'

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <Link to ='/'>
        <img className={headerStyles.logo} src='http://ryanjenningspeterson.com/wp-content/uploads/2014/10/logo.png' alt='portfolio of rjp' />
      </Link>

      <nav className={headerStyles.navigation}>
        <ul>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about/'>about</Link>
          </li>
          <li>
            <Link to='/resume/'>resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
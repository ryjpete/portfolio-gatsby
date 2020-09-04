import React from 'react'
import headerStyles from './header.module.css'

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <img className={headerStyles.logo} src='http://ryanjenningspeterson.com/wp-content/uploads/2014/10/logo.png' alt='portfolio of rjp' />
    </header>
  )
}
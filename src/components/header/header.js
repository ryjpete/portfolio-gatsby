import React from 'react'

export default function Header() {
  return (
    <header>
      <img className='logo' src='http://ryanjenningspeterson.com/wp-content/uploads/2014/10/logo.png' alt='portfolio of rjp' />

      <style jsx>{`
        header {
          align-items: center;
          border-right: 1px dashed rgba(255,255,255,0.075);
          display: flex;
          padding: 15px;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          width: 150px;
        }

        .logo {
          display: block;
          height: auto;
          max-width: 200px;
          width: 100%;
        }
      `}</style>
    </header>
  )
}
import React, { useState } from 'react'

export const myContext = React.createContext()

const Provider = props => {
  // state for loading
  // const [isLoaded,setIsLoaded] = useState(false)

  const [bgColor, setBgColor] = useState('#fff')
  const [prevBgColor,setPrevBgColor] = useState('')
  const [logoColor,setLogoColor] = useState('#202020')
  const [navColor,setNavColor] = useState('#202020')
  const [pageTitleColor,setPageTitleColor] = useState('#06d6a0')

  return (
    <myContext.Provider value={{
      // isLoaded,
      // changeIsLoaded: () => setIsLoaded(!isLoaded),

      prevBgColor,
      changePrevBgColor: (color) => setPrevBgColor(color),

      bgColor,
      changeBgColor: (color) => setBgColor(color),

      logoColor,
      changeLogoColor: (color) => setLogoColor(color),

      navColor,
      changeNavColor: (color) => setNavColor(color),
      
      pageTitleColor,
      changePageTitleColor: (color) => setPageTitleColor(color),
    }}>
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
)
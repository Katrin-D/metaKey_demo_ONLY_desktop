import React, { createContext, useContext, useEffect, useState } from 'react'

const scrollContext = createContext({
  top: 0,
})

export const useScroll = () => useContext(scrollContext)

const ScrollProvider = ({ children }) => {
  const [top, setTop] = useState(0)

  useEffect(() => {
    setTop(pageYOffset)
    const scrollHandler = (e) => {
      setTop(e.target.documentElement.scrollTop)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  console.log({ top })

  const value = { top }

  return <scrollContext.Provider value={value}>{children}</scrollContext.Provider>
}

export default ScrollProvider

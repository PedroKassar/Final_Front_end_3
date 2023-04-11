import React, { createContext, useState } from 'react'

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const handleMode = () => {
    if (isDarkMode) {
      setDarkMode(false)
    } else{
      setDarkMode(true)
    }
  };

  const State = {
    isDarkMode,
    handleMode
  };

  return (
    <ThemeContext.Provider value={State}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider 
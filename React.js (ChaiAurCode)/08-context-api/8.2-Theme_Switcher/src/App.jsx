import { useEffect, useState } from 'react'

import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeContextProvider } from './contexts/Theme'

function App() {
  
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => setThemeMode('light')
  const darkTheme = () => setThemeMode('dark')

  // actual Theme change

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <Card />
            <div className="w-full max-w-sm mx-auto">

            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </>
  )
}

export default App

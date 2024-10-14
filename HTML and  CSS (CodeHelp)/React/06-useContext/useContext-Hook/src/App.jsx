import { createContext, useState } from 'react'
import Child1 from './components/Child1'

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <>

    <ThemeContext.Provider value={{theme, setTheme}} >
        <Child1/>
    </ThemeContext.Provider>

    </>
  )
}

export default App
export {ThemeContext}

import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import Child2 from './child2'


function Child1(props) {

  const { theme, setTheme } = useContext(ThemeContext)
  const handelClick = () => {
    setTheme(
      theme === 'light' ? 'dark' : 'light'
    )
  }
  return (
    <>
      <div>
        from child1

        <br />

        <button
          onClick={handelClick}
        >{theme} mode</button>
        <Child2 />
      </div>

    </>
  )
}

export default Child1
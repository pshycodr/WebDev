import React, { useContext } from 'react'
import { ThemeContext } from '../App'

function Child2() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div
        style={{
          backgroundColor: theme === 'light' ? "gray" : "beige",
          height: '500px',
          width: '500px',
          color: theme === 'light' ? "beige" : "gray"
        }}
      >
        form child 2
        <br />
        {theme} mode
      </div>
    </>
  )
}

export default Child2
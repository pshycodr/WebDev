import { useState } from 'react'
import './App.css'

import ColorChanger from './components/ColorChanger'

function App() {
  const [click, setClick] = useState(0)

  const getRandomColor = () => {
    let r = Math.floor(Math.random() * 100)
    let g = Math.floor(Math.random() * 100)
    let b = Math.floor(Math.random() * 100)

    return `rgb(${r}, ${g}, ${b})`
  }

  const handelColorChange = () => {
    let bodyStyle = document.body.style
    bodyStyle.backgroundColor = getRandomColor()
  }

  return (
    <>
      <ColorChanger handelColorChange={handelColorChange} />

    </>
  )
}

export default App

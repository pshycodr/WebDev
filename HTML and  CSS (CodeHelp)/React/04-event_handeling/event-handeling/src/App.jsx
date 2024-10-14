import { useState } from 'react'

import './App.css'

function App() {

  const handelCLick = () => {
    alert("clicked")
  }

  const handelMouseHover = () => {
    alert("This is Heading")
  }

  const handelOnchange = (e) => {
    console.log( e)
  }

  return (
    <>

    <form>
      <input type="text" onChange={handelOnchange} />
    </form>


      {/* <h1 onMouseOver={handelMouseHover}>Heyy</h1>
      <button
        onClick={handelCLick}
      >click</button> */}
    </>
  )
}

export default App

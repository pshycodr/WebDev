import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  // let counter = 5;
  const addValue = function(){
    if (counter <20){
      console.log(counter);
      setCounter(counter+ 1) 
    }else{
      alert("Can't go over 20")
    }
    
  }
  const minusValue = function(){
    if(counter > 0){
      console.log(counter);
    setCounter(counter - 1)
    }else{
      alert("cant go under 0")
    }
  }

  return (
    <>
     <h1>Simple Counter</h1>
     <h2>counter value : {counter}</h2>
    <button
    onClick={addValue}
    >Add Value</button>

    <button
    onClick={minusValue}
    >Minus Value</button>
    </>
  )
}

export default App

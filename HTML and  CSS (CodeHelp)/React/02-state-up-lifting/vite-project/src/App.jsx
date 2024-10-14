import { useState } from 'react'
import Card from './components/Card'

import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <Card title='card1'  setName={setName} name={name}/>
      <Card title='card2'  setName={setName} name={name}/>
      <p>name inside App: {name}</p>
    </>
  )
}

export default App

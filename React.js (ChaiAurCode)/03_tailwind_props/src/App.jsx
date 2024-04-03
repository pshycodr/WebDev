import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Anish",
    bio: "i am a good guy",
    img : "https://media-ccu1-2.cdn.whatsapp.net/v/t61.24694-24/429494961_949992766297172_483723015550142821_n.jpg?ccb=11-4&oh=01_ASAGl2Gi6cRTNzfHGUxwiRDG7k95CMWv7gX2XAEC5MtiCA&oe=661A20A0&_nc_sid=e6ed6c&_nc_cat=100"
  }

  let myArr = [1, 2, 3, 4]

  let allData = {
    myObj, myArr
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-[20px]'>Tailwind test</h1>

      <Card userName="Anish Roy" details={allData} />
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [gitdata, setGitData] = useState({})

  useEffect(() => {
    axios.get('/api/data')
      .then((response) => {
        setGitData(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App

import { useCallback } from "react"
import { useState } from "react"


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "~!@#$%^&*(){}_:><+-/*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(ch)

    }

    setPassword(pass)

  }, [length, numberAllowed, password, charAllowed])

  return (
    <>
      <div className='h-[100vh] w=[100vw] bg-black overflow-hidden'>

        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className='text-white text-center my-3'>Password generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
            />

            <button
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 mx-1'
            >copy</button>
          </div>


          <div className='flex text-sm gap-x-1'>
            <div className=' flex items-center gap-x-1 '>
              <input
                type="range"
                min={6}
                max={100}
                // value={length}
                className='cursor-pointer'

              />
              <label>Length: {length}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

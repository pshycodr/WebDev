import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("null")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMmnbvcxzlkjhgfdsapoiuytrewq"

    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$%^&*_-+:;.,></?`~"

    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(ch)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, password])

  useEffect(() => {
    passwordGenrator()
  }, [length, charAllowed, numberAllowed, setPassword])

  const passwordRef = useRef()

  const passwordCopy = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  }, [password])

  return (
    <>
      <div className='w-full h-[100vh] bg-[#212121] text-white'>
        <div>
          <input
            type="text"
            readOnly
            className="outline-none w-[500px] py-1 px-3 text-black"
            value={password}
            ref={passwordRef}

          />
          <button
            onClick={passwordCopy}

          >Copy</button>
        </div>
        <div>
          <input
            type="range"
            id="range"
            max={100}
            min={8}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}


          />

          <label htmlFor="range">Password length in {length} </label>

          <input
            type="checkbox"
            name=""
            id="num"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="num">Number</label>

          <input
            type="checkbox"
            name=""
            id="char"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="char">char </label>
        </div>
      </div>
    </>
  )
}

export default App

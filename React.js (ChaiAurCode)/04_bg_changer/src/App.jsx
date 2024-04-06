import { useState } from "react"


function App() {

  const [color, setColor] = useState()

  return (
    <>
      <div className=' h-[100vh] w-[100vw] flex justify-center'
        style={{ backgroundColor: color }}
      >
        <div className='border-[2px] border-black h-[100px] w-[800px] flex justify-evenly self-center rounded-2xl'

        >

          <button className='bg-[#9368d7] border-[2px] border-black h-[50px] w-[100px] self-center rounded-2xl'
            onClick={() => setColor("#9368d7")}
          ></button>
          <button className='bg-[#eeb357] border-[2px] border-black h-[50px] w-[100px] self-center rounded-2xl'
            onClick={() => setColor("#eeb357")}
          ></button>
          <button className='bg-[#1fb2f8] border-[2px] border-black h-[50px] w-[100px] self-center rounded-2xl'
            onClick={() => {
              setColor("#1fb2f8")
            }}
          ></button>
          <button className='bg-[#ca8d8d] border-[2px] border-black h-[50px] w-[100px] self-center rounded-2xl'
            onClick={() => setColor("#ca8d8d")}
          ></button>
          <button className='bg-[#cb6e20] border-[2px] border-black h-[50px] w-[100px] self-center rounded-2xl'
            onClick={() => setColor("#cb6e20")}
          ></button>

        </div>
      </div>
    </>
  )
}

export default App

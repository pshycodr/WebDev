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
      <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-[#212121]'>
        <div className='h-[600px] w-[600px] bg-gradient-to-r from-[#edbd6b] to-[#cb7d4f] rounded-2xl flex justify-center items-center'  >
          <div className=' h-[85%] w-[85%] bg-white rounded-2xl shadow-2xl overflow-hidden flex'>

            <div className='w-[60%] h-[100%] flex-col justify-between items-center '>
              <div className='h-[40%] w-[100%] flex justify-center items-end'>
                <img src={gitdata.avatar_url} alt="" className='rounded-[100%] h-[80%]' />
              </div>

              <div className='h-[40%] w-[100%] flex flex-col justify-evenly items-center '>
                <div className='text-[#5e4b47] font-semibold text-[30px]'>{gitdata.name}</div>
                <div className='px-[10px] text-[#836a65]'>{gitdata.bio}</div>
              </div>

              <div className='h-[20%] w-[100%] flex justify-center items-center'>
                <button className='h-[50px] w-[100px] border-[3px] border-[#5b3c37] rounded-full text-[#51413e]'><a href={gitdata.html_url}>Github</a></button>
              </div>
            </div>

            <div className='w-[40%] h-[100%] flex flex-col justify-between items-center '>
              <div className='h-[32%] w-[100%] bg-[#f5e8df] text-[#786450] flex flex-col justify-center items-center'>
                <p className='text-[30px] font-semibold'>{gitdata.following}</p>
                <p className='text-[15px]'>FOLLOWING</p>
              </div>
              <div className='h-[32%] w-[100%] bg-[#f5e8df] text-[#786450] flex flex-col justify-center items-center'>
                <p className='text-[30px] font-semibold'>{gitdata.followers}</p>
                <p className='text-[15px]'>FOLLOWERS</p>
              </div>
              <div className='h-[32%] w-[100%] bg-[#f5e8df] text-[#786450] flex flex-col justify-center items-center'>
                <p className='text-[30px] font-semibold'>{gitdata.public_repos}</p>
                <p className='text-[15px]'>REPOSITORIES</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App

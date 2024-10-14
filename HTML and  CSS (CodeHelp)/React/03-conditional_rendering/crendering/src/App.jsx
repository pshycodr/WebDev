import { useState } from 'react'

import './App.css'
import {LoginBtn} from './components/LoginBtn'
import {LogoutBtn} from './components/LogoutBtn'


function App() {
  const [isLogin, setIsLogin] = useState(false)

  return isLogin ? <LogoutBtn setIsLogin={setIsLogin} /> : <LoginBtn setIsLogin={setIsLogin}/>

  // if(isLogin){
  //   return <LoginBtn />
  // }else{
  //   return <LogoutBtn />
  // }
  
}

export default App

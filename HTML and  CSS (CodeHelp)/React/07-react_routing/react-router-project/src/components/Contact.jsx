import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {

    const navigate = useNavigate()

    const handelClick = () => {
        navigate('/')
     }

  return (
    <>
    <div>Contact</div>
    <button onClick={handelClick}>Home</button>
    </>
    
  )
}

export default Contact
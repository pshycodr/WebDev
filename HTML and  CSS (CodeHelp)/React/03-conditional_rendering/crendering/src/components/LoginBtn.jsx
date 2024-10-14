import React from 'react'

export const LoginBtn = (props) => {

  return (
    <button onClick={() => props.setIsLogin(true)}>
        Login
    </button>
  )
}

export default LoginBtn
import React from 'react'

export const LogoutBtn = (props) => {

    
    return (
        <button onClick={() => props.setIsLogin(false)}>

            Logout
        </button>
    )
}



export default LogoutBtn
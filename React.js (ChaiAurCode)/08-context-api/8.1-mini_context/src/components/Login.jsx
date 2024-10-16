import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export const Login = () => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const { setUser } = useContext(UserContext)

    const handleCick = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
            />

            <br />

            <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <button
                onClick={handleCick}
            >Submit</button>
        </div>
    )
}

import React from 'react'
import { useParams } from 'react-router-dom'

function User(  ) {
    const {uid} = useParams()
  return (
    <div>User : {uid}</div>
  )
}

export default User
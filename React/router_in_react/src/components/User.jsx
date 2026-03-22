import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const params = useParams()
  return (
    <div>
      I am user {params.username    }
    </div>
  )
}

export default User

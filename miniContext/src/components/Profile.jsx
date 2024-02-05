import React, { useContext } from 'react'
import UserContext from '../Context/userContext'

const Profile = () => {
     const {user} = useContext(UserContext)
     if (!user) return <div>Please Login</div>
     return (
          <div>Welcom {user.username}</div>
     )
  
}

export default Profile
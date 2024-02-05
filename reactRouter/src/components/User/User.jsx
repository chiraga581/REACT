
import { useParams } from 'react-router-dom'

const User = () => {
     const { userid } = useParams();
  return (
    <div className='bg-gray-600 p-4 text-white text-4xl text-center mx-auto max-w-7xl'>User : {userid} </div>
  )
}

export default User
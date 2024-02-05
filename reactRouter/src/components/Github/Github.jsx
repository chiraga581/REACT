
// import { useState } from 'react'
// import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
	// const [data , setData ] = useState([])
	// useEffect(() => {
	// 	fetch('https://api.github.com/users/chiraga581')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setData(data)
	// 			console.log(data)
	// 		})
	// },[])
	const data = useLoaderData();
	return (
		<div className='text-center m-4 p-4 mx-auto max-w-7xl  bg-gray-500 text-white text-3xl '>
			Github Followers: {data.followers}
			<img 
				src={data.avatar_url}
				alt='git picture'
				width={300}
			/>
		</div>
    )
}

export default Github


export const githubInfoLoader = async () =>{
	const res = await fetch('https://api.github.com/users/chiraga581')
	return res.json();
}
/* eslint-disable no-unused-vars */

import { useState, useCallback , useEffect , useRef} from 'react'

function App() {

	const [length , setLength] = useState(2);
	const [numberAllowed , setNumberAllowed] = useState(false);
	const [charAllowed , setCharAllowed] = useState(false);
	const [password , setPassword] = useState("");
	const passwordRef = useRef(null);

	const passwordGenerator =useCallback (() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if(numberAllowed){
			str+="0123456789";
		}
		if(charAllowed){
			str+= "~!@#$%^&*()_/.,';:[]{}`";
		}
		for(let i = 1 ; i<=length ; i++){
			let char = Math.floor(Math.random()*str.length +1);
			pass+= str.charAt(char);
		}

		setPassword(pass);

	} , [length , charAllowed , numberAllowed ,setPassword])

	useEffect(()=>{
		passwordGenerator()
	} ,[length , numberAllowed , charAllowed , passwordGenerator])

	const copyPassword = useCallback(()=>{
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(length)
		window.navigator.clipboard.writeText(password)
	}, [password])
  return (
   
	<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-20 text-orange-500 bg-gray-800'>
		<h1 className='text-white text-center my-3'>
			Password Generator
		</h1>
		<div className='flex shadow  rounded-lg overflow-hidden mb-4'>
			<input 
				type="text"
				value={password}
				className='outline-none w-full py-1 px-3'
				placeholder='password'
				readOnly
				ref={passwordRef}

			/>
			<button 
			onClick={copyPassword}
			className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> 
				Copy 
			</button>
		</div>
		<div className='flex text-sm gap-x-2'>
			<div className='flex items-center gap-x-2'>
				<input 
					type='range'
					min={2}
					max={18}
					value={length}
					className='cursor-pointer'
					onChange={(e)=>setLength(e.target.value)}
				/>
				<label>length : {length}</label>
			</div>
			<div className='flex items-center gap-x-1'>
				<input 
					type='checkbox'
					defaultChecked = {numberAllowed}
					id='numberInpur'
					onChange={()=>{
						setNumberAllowed ((prev) => !prev)
					}}
				/>
				<label>Numbers</label>
			</div>
			<div className='flex items-center gap-x-1'>
				<input 
					type='checkbox'
					defaultChecked = {charAllowed}
					id='numberInpur'
					onChange={()=>{
						setCharAllowed ((prev) => !prev)
					}}
				/>
				<label>Characters</label>
			</div>
		</div>
	</div>


  )
}

export default App

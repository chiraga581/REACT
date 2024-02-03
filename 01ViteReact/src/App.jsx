import { useState } from "react"


function App() {

  const [counter , setCounter] = useState(0);
  const inc = () => {
		setCounter(counter+1)
  }
  const dec = () => {
		if(counter != 0){
			setCounter(counter-1)
		}
		else{
			alert("value can not be neggative")
		}
  }
	return (
   <div>
	
      <h1>{counter}</h1>
      <button onClick={inc}>increase</button>
      <button onClick={dec}>decrease</button>

   </div>
  )
}

export default App

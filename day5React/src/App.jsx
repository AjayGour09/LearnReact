import { use } from 'react'
import { useState } from 'react'
function App() {
  const [count , setCount] =useState(0)  
  const [name , setName] = useState('Ajay')
  return (
    <>
    <div className='flex justify-center items-center gap-5 mt-5'>
      <p>{count}</p>
      <p>{name}</p>
      <button onClick={()=>{
        setCount(count+1)
        setName('Arun')
      }}>Increase</button>
        <button onClick={()=>{
        setCount(count-1)
        setName('vinod')
      }}>decrease</button>
    </div>
    </>
  )
}

export default App

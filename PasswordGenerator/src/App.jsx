import { useCallback, useState , useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`!@#$%^&*()_-~!?/>.<,|';:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const CopypasswordToClipBoard  = useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect (() =>{
    PasswordGenerator()
  },[length , numberAllowed , charAllowed , PasswordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 mt-5 text-orange-600 bg-gray-700'>
       <h1 className='text-center my-3 text-2xl'> Password Generator</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4 gap-0.5'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-amber-50' placeholder='Password' readOnly ref={passwordref}/>
        <button className='bg-amber-900 py-1.5 px-2 ' onClick={CopypasswordToClipBoard}>Copy</button>
        </div>
        <div className='flex gap-x-2 text-sm'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) =>{setLength(e.target.value)}} />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked ={numberAllowed} id="numberInput" onChange={()=>{
              setNumberAllowed((prev) =>(!prev));
            }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
           <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked ={charAllowed} id="charInput" onChange={()=>{
              setCharAllowed((prev) =>(!prev));
            }} />
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

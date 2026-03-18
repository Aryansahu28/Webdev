import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [something, setSomething] = useState({})
  const [form, setForm] = useState({})

  const handleChange=(e)=>{
    // return setSomething(e.target.value)
    const { name, value } = e.target;
    return setForm({...form,[name]:value})

  }

  const handleClick=()=>{
    setCount((count)=>{
      return count+1
    })
  }

  const handleMouseOver=()=>{
    alert("Hover me!")
  }

  return (
    <>


    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
    <div className="hoverbox" onMouseOver={handleMouseOver}>
      hover over me!
    </div>


    {/* <div><input value={something} onChange={handleChange}/></div> */}
    <input type="text" name='email' value={form.email?form.email:"" } onChange={handleChange} />
    <input type="text" name='phone' value={form.phone?form.phone:"" } onChange={handleChange} /> 
    
    </>
  )
}

export default App

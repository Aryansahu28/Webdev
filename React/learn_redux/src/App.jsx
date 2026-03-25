import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterslice'
import './App.css'

function App() {
 const count = useSelector((state)=>{return state.counter.value})
 const dispatch = useDispatch()

  return (
    <>
      <div>
        <button>-</button> &nbsp;
        <button>Count is {count}</button> &nbsp;
        <button onClick={()=>dispatch(increment())}>+</button>
      </div>
    </>
  )
}

export default App

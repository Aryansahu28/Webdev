import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")


  const handleEdit = () => {

  }

  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4(),todo, isCompleted: false }])
    setTodo("")

  }

  const handleDelete = () => {

  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }



  return (
    <>
      <div className='flex-col flex items-center mt-8 '>

        <div className="bg-amber-400 min-h-200 p-3 flex flex-col items-center w-[60vw] rounded-3xl">
          <h1 className='text-2xl text-center mb-7 font-bold'>Todo List</h1>
          <div className='flex gap-2.5 justify-center'>

            <input onChange={handleChange} value={todo} type="text" className='min-w-xl h-6 bg-amber-50 rounded-md outline-none p-0.5' />
            <button onClick={handleAdd} className='w-12 h-6 text-sm rounded-2xl bg-amber-700 hover:bg-amber-600 hover:font-bold transition-all mt-0.5'>Add</button>

          </div>
          <div className='m-5 font-bold'>My Todo List</div>


          <div className='todolist flex flex-col gap-3 '>
            {todos.map(item => {
              return <div key={todo.id} className='todo flex gap-1.5'>
                <input type="checkbox" value={item.isCompleted} class="w-4 h-4 m-1" />
                <div className='min-w-xl rounded-md p-0.5 bg-amber-200'>

                <div className={todo.isCompleted?"":"line-through"}>{item.todo}</div>
                </div>
                <button oncClick={handleEdit} className='w-12 h-6 text-sm rounded-2xl bg-amber-700 hover:bg-amber-600 hover:font-bold transition-all mt-1'>Edit</button>
                <button onClick={handleDelete} className='w-15 h-6 text-sm rounded-2xl bg-amber-700 hover:bg-amber-600 hover:font-bold transition-all  mt-1'>Delete</button>
              </div>
            })}

          </div>

        </div>

      </div>


    </>
  )
}

export default App

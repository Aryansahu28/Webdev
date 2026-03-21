import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [showFinished, setShowFinished] = useState(true)


  useEffect(() => {
    let todos = localStorage.getItem("todos")
    if (todos) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])


  const saveToLS = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handleEdit = (e, id) => {
    let t = todos.filter(item => {
      return item.id === id
    })
    console.log(t)
    setTodo(t[0].todo)
    let newTodos = todos.filter((item) => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS(newTodos)

  }

  const handleAdd = () => {
    let newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }]
    setTodos(newTodos)
    setTodo("")
    saveToLS(newTodos)

  }

  const handleEnter = (e) => {
    if (e.key === "Enter")
      handleAdd();
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(items => {
      return items.id !== id
    });
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    console.log(`This is the e is ${e}`)
    let id = e.target.name;
    console.log(id)
    let index = todos.findIndex(item => {
      return item.id === id
    })
    console.log(`This is the index -> ${index}`)

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS(newTodos)

  }

  const togglePlay = (e) => {
    setShowFinished(!showFinished)
  }


  return (
    <>
      <div className='flex-col flex items-center mt-8 '>

        <div className="bg-amber-400 min-h-100 lg:min-h-200 p-3 flex flex-col items-center w-[90vw] lg:w-[60vw] rounded-3xl">
          <h1 className='text-2xl text-center mb-7 font-bold'>Todo List</h1>
          
          <div className='flex flex-col gap-2 justify-center items-center'>
          <div className='flex flex-col gap-2.5 justify-center items-center'>

            <input onChange={handleChange} id="1" value={todo} type="text" className='lg:min-w-xl h-6 bg-amber-50 rounded-md outline-none p-0.5'/>
            <button onClick={handleAdd} disabled={todo.length <= 3} className='w-40 h-8 text-base rounded-2xl disabled:bg-amber-500 bg-amber-700 hover:bg-amber-600 hover:font-bold transition-all mt-0.5'>Add</button>
            </div>
            <div className='flex gap-1'>


              <input type="checkbox" onClick={togglePlay} value={!showFinished} defaultChecked={showFinished} /> <div className="lg:text-base text-sm">
                Show All
              </div>
            </div>
          </div>

          <div className='m-5 font-bold'>My Todo List</div>


          <div className='todolist flex flex-col gap-3 w-full'>
            {todos.map(item => {
              return (showFinished || item.isCompleted) && <div key={item.id} className='todo flex gap-1.5 justify-around'>
                <div className='flex gap-1.5'>
                <input onClick={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} className="w-4 h-4 m-1" />
                <div className='lg:w-120 md:w-100 w-45 rounded-md p-0.5 bg-amber-400 wrap-break-word'>
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>

                </div>
                <div className='flex gap-1.5'>

                <button onClick={(e) => handleEdit(e, item.id)} className='lg:w-10 h-8 lg:text-sm w-9 text-xs rounded-2xl bg-amber-700 hover:bg-amber-600 hover:font-bold transition-all mt-1'><img src="src/assets/edit-button-svgrepo-com.svg" alt="edit" className='w-8 h-5 ml-1'/></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='lg:w-10 h-8 lg:text-sm w-11 text-xs rounded-2xl bg-amber-700 hover:bg-amber-600 hover:font-bold transition-all  mt-1'><img src="src/assets/icons8-delete-50.svg" alt="edit" className='w-8 h-5 ml-1'/></button>
                </div>
              </div>
            })}

          </div>

        </div>

      </div>


    </>
  )
}

export default App

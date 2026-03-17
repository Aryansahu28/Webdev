import { useState, useEffect } from 'react';
import Card from './components/Card'
import Navbar from './components/Navbar'
import './App.css'
function App() {


  const [apidata , setApidata] = useState([])
  useEffect(() => {
      async function getData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
        setApidata(data)
      } catch (error) {
        console.error(error);
      }
    }

    getData();
    
  }, [])
  



  

  return (
    <>

    <Navbar/>
    <div className='cards'>
    {apidata.map(card=>{
      return <Card key={card.id} card={card}/>
    })}
    </div>
    {/* <Card card={{title: "hello", userid: "1", desc: "hellp"}}/> */}
    
      
    </>
  )
}

export default App

"use client"
import Image from "next/image";
const handleClick = async ()=>{
  let data = "Send me"
  let a = await fetch('/api/add', {
  method: "POST", // Specify the HTTP method
  headers: {

    "Content-Type": "application/json"
   
  },
  body: JSON.stringify(data) // Convert the JavaScript object to a JSON string
})
  let res = await a.json()
  console.log(res)
}
export default function Home() {
  return (
    <>
    
    <div>Helo Worl</div>
    <div><button onClick={handleClick}>Clikc</button></div>
    </>
  );
}

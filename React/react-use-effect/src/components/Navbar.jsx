import React,{ useEffect } from 'react'

const Navbar = ({color}) => {
    useEffect(()=>{
        alert("I will render everytime Navbar renders")
    })

    useEffect(()=>{
        alert("Only Render once")
    },[])

    useEffect(()=>{
        alert("Changes when color change")
    },[color])
  return (
    <div>
       I am navbar of {color} color hehe..
    </div>
  )
}

export default Navbar

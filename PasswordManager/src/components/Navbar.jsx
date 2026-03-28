import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-around p-3 bg-white/10 backdrop-blur-md border-b border-white/20 text-white '>
        <div className='font-bold sm:text-2xl text-l text-white'><span className='text-red-600'>&lt;</span>PassMan<span className='text-green-400'>/</span><span className='text-red-600'>&gt;</span></div>
        <div className="flex gap-2 sm:gap-3 sm:text-base text-xs sm:p-auto pt-1">
            <div className='hover:font-bold'>Home</div>
            <div className='hover:font-bold'>Contact</div>
            <div className='hover:font-bold'>About us</div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar

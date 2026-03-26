import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between p-4 bg-white/10 backdrop-blur-md border-b border-white/20 text-white '>
        <div className='font-bold text-2xl text-white'><span className='text-red-600'>&lt;</span>PassMan<span className='text-green-400'>/</span><span className='text-red-600'>&gt;</span></div>
        <div className="flex gap-3">
            <div className='hover:font-bold'>Home</div>
            <div className='hover:font-bold'>Contact</div>
            <div className='hover:font-bold'>About us</div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar

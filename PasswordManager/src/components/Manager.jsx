import React, { useRef } from 'react'

const Manager = () => {
    const ref = useRef()
    const changeImage = ()=>{
        if (ref.current.src.includes("src/icons/eye_3917159.svg")){

            ref.current.src="src/icons/eye-crossed_3917116.svg"
        }
        else{
            ref.current.src="src/icons/eye_3917159.svg"
        }
    }
    return (
        <>

            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

            </div>
            <div className='flex flex-col justify-center text-center py-16 px-60'>
                <div>
                    <div className='font-bold text-3xl text-white'><span className='text-red-600'>&lt;</span>PassMan<span className='text-green-400'>/</span><span className='text-red-600'>&gt;</span></div> <div className='text-white'>Your own password Manager</div>
                </div>

                <div className='p-4 flex gap-5 flex-col justify-center text-center'>
                    <input type="text" placeholder="Enter url" name="" id="" className=' bg-white rounded-2xl pl-2' />
                    <div className='flex justify-center text-center gap-5'>
                        <input type="text" placeholder="Enter name" name="" id="" className='flex-2 bg-white rounded-2xl pl-2' />
                        <div className='relative'>

                        <input type="text" placeholder="Enter Password" name="" id="" className='flex-1 bg-white rounded-2xl pl-2' /><span><img  ref={ref} src="src/icons/eye_3917159.svg" alt="eye" width={16} className='absolute top-1 right-1.5 cursor-pointer' onClick={changeImage}/></span>
                        </div>
                    </div>
                </div>
                <div>

                <button className='bg-purple-500 pl-10 pr-10 pt-1.5 pb-1.5 rounded-2xl'>Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager

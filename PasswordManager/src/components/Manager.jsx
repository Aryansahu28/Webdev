import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])


    const getPasswords = async () => {
        let req = await fetch('http://localhost:3000/');
        let passwords = await req.json()
        // console.log(passwords)
        setPasswordArray(passwords)
    }

    useEffect(() => {
        getPasswords()
    }, [])


    const changeImage = () => {
        passwordRef.current.type = "text";
        if (ref.current.src.includes("src/icons/eye_3917159.svg")) {

            ref.current.src = "src/icons/eye-crossed_3917116.svg"
            passwordRef.current.type = "password";
        }
        else {
            ref.current.src = "src/icons/eye_3917159.svg"
            passwordRef.current.type = "text";

        }
    }

    const savePassword = async () => {
        if (form.site.length>3 && form.username.length>3 && form.password.length>3){

            toast(' Password Saved!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            const newid = uuidv4()
            await fetch('http://localhost:3000', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json', // Indicate the body format
                },
                body: JSON.stringify({id: form.id }), // Convert the data to a JSON string
            });
    
            setPasswordArray([...passwordArray, { ...form, id: newid }])
            await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Indicate the body format
                },
                body: JSON.stringify({ ...form, id: newid  }), // Convert the data to a JSON string
            });
    
    
            setForm({ site: "", username: "", password: "" })
        }
         else {
            toast('Error: Password not saved! ');
            toast('Everything should greater than 3! ');
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleEdit = (e, id) => {

        let p = passwordArray.filter((item) => {
            return item.id === id
        })
        setForm(p[0])
        let newForm = passwordArray.filter((item) => {
            return item.id !== id
        })

        setPasswordArray([...newForm])

    }

    const handleDelete = async(e, id) => {
        let newForm = passwordArray.filter((item) => {
            return item.id !== id
        })

        setPasswordArray([...newForm])
        await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id}) })


    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />

            <div className="bg-amber-900">

            </div>
            <div className='flex flex-col justify-center text-center sm:py-16 sm:px-60'>
                <div>
                    <div className='font-bold  sm:text-3xl text-xl text-white'><span className='text-red-600'>&lt;</span>PassMan<span className='text-green-400'>/</span><span className='text-red-600'>&gt;</span></div> <div className='text-white'>Your own password Manager</div>
                </div>

                <div className='p-4 flex gap-5 flex-col justify-center text-center'>
                    <input value={form.site} type="text" onChange={handleChange} placeholder="Enter url" name="site" id="" className=' bg-white rounded-2xl pl-2' />
                    <div className=' relative flex sm:flex-row flex-col sm:text-base text-ms justify-center text-center gap-5'>
                        <input value={form.username} name="username" type="text" onChange={handleChange} placeholder="Enter name" className='flex-2 bg-white rounded-2xl pl-2' />
                        <div className='relative'>

                            <input ref={passwordRef} value={form.password} name="password" type="text" onChange={handleChange} placeholder="Enter Password" className='flex-1 bg-white rounded-2xl pl-2' /><span><img ref={ref} src="src/icons/eye_3917159.svg" alt="eye" width={16} className='absolute sm:top-1 sm:right-1.5 right-14 top-1 cursor-pointer' onClick={changeImage} /></span>
                        </div>
                    </div>
                </div>
                <div>

                    <button onClick={savePassword} className='bg-amber-900 sm:pl-10 sm:pr-10 pl-5 pr-5 sm:pt-1.5 sm:pb-1.5 sm:text-base text-ms rounded-2xl text-white'>Add Password</button>
                </div>
            </div>
            <div className='m-4 text-l p-2 font-bold border-t-2 border-b-2 sm:my-4 sm:mx-60 border-amber-50 text-white'>All Passwords</div>




            {passwordArray.map((item, index) => {
                return <div key={index} className='relative Password_display  text-white sm:my-16 sm:mx-60 sm:box-border border-2 border-amber-50 flex flex-col sm:gap-4 gap-2 p-1 sm:w-auto sm:p-2 ml-6 sm:m-auto rounded-2xl w-[85%]'>
                    <div className='username-container bg-amber-900 overflow-x-auto sm:w-[50%] w-[35%] rounded-2xl p-1 pl-2 pb-0 w- px-2'>
                        <div className="contain-username sm:h-10 sm:text-xl font-bold underline">{item?.username}</div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex-2 bg-amber-900 p-1 pl-2 rounded-2xl overflow-x-auto'>
                            {item?.site}
                        </div>
                        <div className='text-security flex-1 bg-amber-900 p-1 pl-2  rounded-2xl overflow-x-auto '>
                            {item?.password}
                        </div>
                    </div>
                    <div onClick={e => handleEdit(e, item.id)} className='absolute top-1.5 right-1.5 cursor-pointer'>
                        <img src="src/icons/edit.svg" width='22px' height='20px' alt="edit" />
                    </div>
                    <div onClick={e => handleDelete(e, item.id)} className='absolute top-1.5 right-7.5 cursor-pointer'>
                        <img src="src/icons/delete.svg" width='20px' height='15px' alt="delete" />
                    </div>
                </div>

            })}



        </>
    )
}

export default Manager

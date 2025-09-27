import React from 'react'
import Image from 'next/image'
import Logo from '/logo.jpg'
function Login() {
    return (
        <div className='flex justify-center items-center flex-col gap-5 mt-[50%] mx-6 h-[18rem]
        rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500'>

            <Image src='/logo.jpg' className='rounded-2xl' width={75} height={75} alt='logo' />
            <div className=''>Login</div>
            <div className=''>Enter your phone number to login</div>
            <button className=''>Confirm</button>
        </div>
    )
}

export default Login
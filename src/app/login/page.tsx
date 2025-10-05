import React from 'react'
import Image from 'next/image'

import Logo from '/logo.jpg'
function Login() {
    return (
        <div className='flex justify-center items-center flex-col gap-5 mt-[50%] mx-6 h-[18rem]
        rounded-2xl bg-gradient-to-tr from-sky-50 to-indigo-200'>

            <Image src='/logo.jpg' className='rounded-2xl' width={75} height={75} alt='logo' />
            <div className='text-2xl text-slate-950 font-bold'>Login</div>
            <div className='text-xs text-slate-950'>Enter your phone number to login</div>
            <div className='flex flex-col gap-2'>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                        </svg>
                    </div>
                    <input type="number" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                </div>                
                <button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            </div>
        </div>
    )
}

export default Login
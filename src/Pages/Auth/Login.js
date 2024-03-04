import React from 'react'
import logo from '../../asstes/glogo.jpeg'
function Login() {
    return (
        <div className='bg-white'>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="flex items-center ">
                        <img className="w-40 h-20 text-center mx-auto mt-8 " src={logo} alt=" logo" />
                    </div>
                    <div className="p-4 mt-[-40px] md:space-y-1 sm:p-8">
                        <h1 className="text-[10px] text-center text-gray-900 md:text-[20px]">
                            Sign In
                        </h1>
                        <h1 className="text-xl mt-[-20px] text-center text-gray-900 md:text-[15px] ">
                            Use your Google Account
                        </h1>
                        <form className="pt-[20px] md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900" >Enter email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-[#3a86ff] block w-full p-2.5 " placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Create Account </a>
                                <button type="submit" className="w-[90px] text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center ">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

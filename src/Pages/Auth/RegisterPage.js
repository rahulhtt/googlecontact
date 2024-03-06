import React from 'react'
import logo from "../../asstes/glogo.jpeg"
import { TextField } from '@mui/material'
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom'
import useRegisterForm from '../../Forms/useRegisterForm';

const RegisterPage = () => {
    const { formik } = useRegisterForm()
    return (
        <div className='flex justify-center items-center min-h-screen sm:p-10' >
            <div className='container w-[450px] h-[550px] border border-1 border-gray-200 shadow-sm rounded-sm p-10'>
                <ToastContainer />
                <div className='login-box'>
                    <div className='logo'>
                        <img className="w-40 h-20 mx-auto text-center " src={logo} alt=" logo" />
                    </div>
                    <div className='text-center text-2xl mb-10'>Create a Google Account</div>
                    <form onSubmit={formik.handleSubmit} action="#">
                        <TextField id="name" style={{ width: 380 }}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            margin='normal'
                            value={formik.values.name}
                            type="text" label="First name" variant="outlined" />
                        <TextField id="email" style={{ width: 380 }}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            margin='normal'
                            value={formik.values.email}
                            type="email" label="Email" variant="outlined" />
                        <TextField id="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            style={{ width: 380 }}
                            margin='normal'
                            type="password"
                            label="Password"
                            variant="outlined" />
                        <div className="flex justify-between mt-4">
                            <Link to="/login" className="left mt-3 text-sm font-medium text-blue-600 hover:underline">Already've Account?</Link>
                            <button type="submit" className="right text-white bg-[#0466c8] p-2 text-lg rounded-md py-2 px-4 hover:shadow-lg 
                        hover:bg-[#00509d]">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage

import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Button } from "@mui/material"
import { useOutletContext } from "react-router-dom"
import { TextField } from '@mui/material';
import useContactForm from '../Forms/useContactForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const CreateContact = () => {
    const { openDrawer } = useOutletContext()
    const { formik } = useContactForm()
    return (
        <div className='p-4' style={openDrawer ? { marginLeft: 250, width: "100%" } : { width: '100%' }}>
            <ToastContainer />
            <div className='p-4' >
                <form onSubmit={formik.handleSubmit}>
                    <h1 className='ml-10 text-4xl'>Contact</h1>
                    <Box className="mt-10 flex lg:flex-col ">
                        <Box>
                            <PersonOutlineIcon className='mt-6' />
                            <TextField
                                id="fname"
                                margin='normal'
                                label="First name"
                                size='small'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fname}
                                variant="outlined" />
                        </Box>
                        <Box>
                            <PersonOutlineIcon className='mt-6' />
                            <TextField
                                margin='normal'
                                id="lname"
                                label="Last name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lname}
                                size='small'
                                variant="outlined" />
                        </Box>
                        <Box>
                            <LocalPhoneIcon className='mt-6' />
                            <TextField
                                style={{ marginLeft: 3 }}
                                margin='normal'
                                id="phno"
                                label="Phone Number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phno}
                                size='small'
                                variant="outlined" />
                        </Box>
                        <Box>
                            <MailOutlineIcon className='mt-6' />
                            <TextField style={{ marginLeft: 3 }}
                                margin='normal'
                                id="email"
                                label="Email"
                                size='small'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                variant="outlined" />
                        </Box>
                    </Box>
                    <Button type='submit' style={{ marginLeft: 20, marginTop: 10 }} variant="contained">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default CreateContact

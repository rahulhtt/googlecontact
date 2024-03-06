import React, { useEffect, useState } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Button } from "@mui/material"
import { useOutletContext } from "react-router-dom"
import { TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { fetchContactById, updateContactById } from '../Api/Api';
import { handleApiError, handleAuthenticationError } from '../Errors/errorHandler';
import useAuthentication from '../util/Authentication';

const EditContact = () => {
    const { openDrawer } = useOutletContext()
    const authToken = useSelector((state) => state.auth.token);
    const { id } = useParams()
    const navigate = useNavigate();
    const isLoggedIn = useAuthentication(authToken)


    const [contactDetails, setContactDetails] = useState({
        phno: "",
        email: "",
        lname: "",
        fname: "",
        userid: "",
        id: id
    });


    //fetch the blog details by Id
    const fetchContactDetail = async () => {
        if (isLoggedIn) {
            try {
                const data = await fetchContactById(id, authToken);
                setContactDetails({
                    phno: data.phno,
                    email: data.email,
                    lname: data.lname,
                    fname: data.fname,
                    userid: data.userid,
                    id: id

                });
                console.log(contactDetails)
                toast.success('Blog fetched successfully', { position: "top-center", autoClose: 2000 });
            } catch (error) {
                handleApiError(error, navigate)
            }
        } else {
            handleAuthenticationError(navigate)
        }
    };

    //handle Onchange event for contact
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
        console.log(contactDetails)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoggedIn) {
            try {
                await updateContactById(id, contactDetails, authToken);
                toast.success('Contact updated successfully', { position: "top-center", autoClose: 2000 });
                setTimeout(() => {
                    navigate('/contact')
                }, 1000)
            } catch (error) {
                handleApiError(error, navigate)
            }
        } else {
            handleAuthenticationError(navigate)
        }

    };

    useEffect(() => {
        fetchContactDetail()
    }, [])

    return (
        <div className='p-4' style={openDrawer ? { marginLeft: 250, width: "100%" } : { width: '100%' }}>
            <div className='p-4' >
                <ToastContainer limit={1} />
                <form>
                    <h1 className='ml-10 text-4xl'>Contact</h1>
                    <Box className="mt-10 flex lg:flex-col ">
                        <Box>
                            <PersonOutlineIcon className='mt-6' />
                            <TextField
                                id="fname"
                                margin='normal'
                                label="First name"
                                size='small'
                                name='fname'
                                onChange={handleChange}
                                value={contactDetails.fname}
                                variant="outlined" />
                        </Box>
                        <Box>
                            <PersonOutlineIcon className='mt-6' />
                            <TextField
                                margin='normal'
                                id="outlined-basic"
                                label="Last name"
                                name='lname'
                                onChange={handleChange}
                                value={contactDetails.lname}
                                size='small'
                                variant="outlined" />
                        </Box>
                        <Box>
                            <LocalPhoneIcon className='mt-6' />
                            <TextField
                                style={{ marginLeft: 3 }}
                                margin='normal'
                                id="outlined-basic"
                                label="Phone Number"
                                size='small'
                                name="phno"
                                onChange={handleChange}
                                value={contactDetails.phno}
                                variant="outlined" />
                        </Box>
                        <Box>
                            <MailOutlineIcon className='mt-6' />
                            <TextField
                                style={{ marginLeft: 3 }}
                                type='email'
                                margin='normal'
                                id="outlined-basic"
                                label="Email"
                                size='small'
                                name='email'
                                onChange={handleChange}
                                value={contactDetails.email}
                                variant="outlined" />
                        </Box>
                    </Box>
                    <Button type='submit' onClick={handleSubmit} style={{ marginLeft: 20, marginTop: 10 }} variant="contained">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default EditContact

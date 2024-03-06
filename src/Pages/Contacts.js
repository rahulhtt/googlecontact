import React, { useEffect, useState } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Tooltip, } from "@mui/material"
import { useOutletContext } from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete'
import useAuthentication from '../util/Authentication';
import { deleteContactById, fetchContactByUserId } from '../Api/Api';
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleApiError, handleAuthenticationError } from '../Errors/errorHandler';
;

const Contacts = () => {
    const { openDrawer } = useOutletContext()
    const authToken = useSelector((state) => state.auth.token);
    const userToken = useSelector((state) => state.user.token);
    const [contact, setContact] = useState([])
    const navigate = useNavigate();

    const isLoggedIn = useAuthentication(authToken)

    console.log(userToken)


    const fetchContacts = async () => {
        if (isLoggedIn) {
            try {
                const data = await fetchContactByUserId(userToken, authToken);
                setContact(data);
                toast.success('Contact fetched successfully', { position: "top-center", autoClose: 2000 });
            } catch (error) {
                handleApiError(error, navigate)
            }
        } else {
            handleAuthenticationError(navigate)
        }
    }   

    const UpdateList = async () => {
        if (isLoggedIn) {
            try {
                const data = await fetchContactByUserId(userToken, authToken);
                setContact(data)
            } catch (error) {
                handleApiError(error, navigate)
            }
        } else {
            handleAuthenticationError(navigate)
        }
    }

    //navigate to edit page
    const handleEdit = (id) => {
        navigate(`/editform/${id}`);
    };

    const deleteContact = async (id) => {
        if (isLoggedIn) {
            try {
                await deleteContactById(id, authToken);
                UpdateList()
            } catch (error) {
                handleApiError(error, navigate)
            }
        } else {
            setTimeout(() => {
                navigate('/login');
            }, 3000)
        }
    };

    useEffect(() => {
        fetchContacts()
    }, [])

    return (
        <div className='p-2' style={openDrawer ? { marginLeft: 250, width: "100%" } : { width: '100%' }}>
            <ToastContainer />
            <TableContainer  >
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Phone Number</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contact.map((row) => (
                            <TableRow key={row.id} hover={true} className='cursor-pointer'>
                                <TableCell style={{ border: 'none' }} component="th" scope="row">
                                    {row.fname} {row.lname}
                                </TableCell>
                                <TableCell align="left" style={{ border: 'none' }}>{row.email}
                                </TableCell>
                                <TableCell align="left" style={{ border: 'none' }}>{row.phno}</TableCell>
                                <TableCell align="left" style={{ border: 'none' }}>
                                    <TableCell align='left' style={{ border: 'none' }}>
                                        <Tooltip title="Edit" placement="top">
                                            <div aria-label="edit">
                                                <Link to="#"><EditIcon onClick={() => handleEdit(row.id)} className='cursor-pointer' /></Link>
                                            </div>
                                        </Tooltip>
                                    </TableCell>
                                    <TableCell align="left" style={{ border: 'none' }}>
                                        <Tooltip title="Delete" placement="top">
                                            <div aria-label="delete">
                                                <DeleteIcon className='cursor-pointer' onClick={() => deleteContact(row.id)} />
                                            </div>
                                        </Tooltip>
                                    </TableCell>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Contacts

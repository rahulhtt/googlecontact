import React, { useState } from 'react'
import { Button, Menu, MenuItem, Box, styled } from '@mui/material';
import { Add, Person2Outlined } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast, ToastContainer } from 'react-toastify';

const CreateButton = styled(Button)({
    color: 'black',
    borderRadius: 16,
    padding: 15,
    maxWidth: 230,
    textTransform: "none",
})
const SidebarContent = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        toast.success('Logged out successfully', { position: "top-right" });
        setTimeout(() => {
            navigate('/login');
        }, 2000)
    }
    return (
        <Box style={{ marginTop: 10 }}>
            <ToastContainer />
            <CreateButton
                variant='contained'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                style={{ marginLeft: 20, background: "#a3cef1" }}
                onClick={handleClick}
            >
                <Add color='action' style={{ paddingRight: 5, }} />
                Create contact
            </CreateButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <MenuItem onClick={handleClose}><Person2Outlined style={{ marginRight: 10 }} />
                    <Link to="/create">Create Contact</Link></MenuItem>
            </Menu>
            <button className="ml-4 w-[200px] hover:bg-[#e5e5e5] border border-black  rounded-[90px] mt-6 h-[40px]">
                <Link to="/contact" className='p-1 '>Contacts</Link>
            </button>
            <button onClick={handleLogout} className='ml-4 p-1 border mt-2 border-black hover:bg-[#e5e5e5] w-[200px] h-[40px] rounded-[90px]'>
                Logout <LogoutIcon className='p-1 ' />
            </button>
        </Box>
    )
}

export default SidebarContent

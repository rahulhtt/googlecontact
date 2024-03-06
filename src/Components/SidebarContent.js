import React, { useState } from 'react'
import { Button, Menu, MenuItem, Box, styled } from '@mui/material';
import { Add, Person2Outlined } from '@mui/icons-material'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { toast, ToastContainer } from 'react-toastify';
import PersonIcon from '@mui/icons-material/Person';
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
        localStorage.removeItem('user');
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
                style={{ marginLeft: 20, background: "#a2d2ff" }}
                onClick={handleClick}
            >
                <Add color='#000' style={{ paddingRight: 5, }} />
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
            <div className='mt-6 flex justify-center  px-4'>
                <NavLink to="/contact" className={({ isActive }) =>
                    ` ${isActive ? "text-gray-700 bg-[#a2d2ff]" : "text-gray-700"} w-[200px] hover:bg-[#e5e5e5] px-4 py-2 rounded-[90px] duration-200`
                }><PersonIcon className='mr-2' />Contacts</NavLink>
            </div>
            <button onClick={handleLogout} className='ml-6 p-1 flex justify-center items-center bg-[#e5e5e5] mt-2  hover:bg-[#a2d2ff] w-[200px] h-[40px] rounded-[90px]'>
                Logout <LogoutIcon className='p-1' />
            </button>
        </Box>
    )
}

export default SidebarContent

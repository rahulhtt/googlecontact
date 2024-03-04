import React, { useState } from 'react'
import { Button, Menu, MenuItem, Box, styled } from '@mui/material';
import { Add, Person2Outlined } from '@mui/icons-material'

const CreateButton = styled(Button)({
    color: 'black',
    borderRadius: 16,
    padding: 15,
    maxWidth: 230,
    textTransform: "none",
})
const SidebarContent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box style={{ marginTop: 10 }}>
            <CreateButton
                variant='contained'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                style={{ marginLeft: 20 }}
                color={'#c2e7ff'}
                onClick={handleClick}
            >
                <Add color='action' style={{ paddingRight: 5, }}
                />
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
                <MenuItem onClick={handleClose}><Person2Outlined style={{ marginRight: 10 }} />Create Contact</MenuItem>
            </Menu>


        </Box>
    )
}

export default SidebarContent

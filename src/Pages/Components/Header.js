import React from 'react'
import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material';
import { Menu as MenuIcon, Search, Tune } from '@mui/icons-material';
import Contactlogo from "../../asstes/contacts.png"

const StyledAppBar = styled(AppBar)({
    background: '#EAF1FB',
    boxShadow: 'none'
})


const SearchWrapper = styled(Box)({
    background: '#F5F5F5',
    marginLeft: 80,
    borderRadius: 8,
    minWidth: 699,
    maxWidth: 720,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    padding: "0 20px",
    
    '& > div': {
        width: '100%',
        padding: '0 10px'
    }

})

const Header = ({ toggleDrawer }) => {
    return (
        <StyledAppBar position='static'>
            <Toolbar>
                <MenuIcon color='action' style={{ cursor: 'pointer' }} onClick={toggleDrawer} />
                <img src={Contactlogo} style={{ marginLeft: 10, width: 40, height: 40 }} />
                <h3 style={{ color: '#adb5bd', marginLeft: 10, textSizeAdjust: 50 }}>Contact</h3>
                <SearchWrapper>
                    <Search color="action" />
                    <InputBase placeholder='Search ' />
                    <Tune color="action" />
                </SearchWrapper>
            </Toolbar>
        </StyledAppBar >
    )
}

export default Header

import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Box, Grid } from '@mui/material';
import { Menu as MenuIcon, Search, Tune } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Contactlogo from "../asstes/contacts.png"
import { Link } from 'react-router-dom';

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
    const [isTyping, setIsTyping] = useState(false);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setIsTyping(inputValue.trim().length > 0); // Check if there is any input
    };
    return (
        <Grid container>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar elevation={0} position="static" sx={{ top: "0", zIndex: "2", backgroundColor: "#F9F9F9", minHeight: "4vw", minWidth: "100vw", paddingTop: "10px", paddingRight: "30px" }}>
                    <Toolbar variant="dense">
                        <Grid item xs={2}>
                            <div className='flex items-center'>
                                <IconButton style={{ cursor: 'pointer' }} onClick={toggleDrawer} edge="start" color="inherit"
                                    aria-label="menu" sx={{ color: "#3C3C3C" }}>
                                    <MenuIcon color='action' sx={{ width: "2vw" }} />
                                </IconButton>
                                <img src={Contactlogo} style={{ width: "2vw", marginLeft: "0.1vw" }} />
                                <Typography className='hover:underline cursor-pointer' variant="h6" component="div"
                                    sx={{ marginLeft: "1vw", fontSize: "1.2vw", color: "#3C3C3C" }}>
                                    Contacts
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <div className='hover:shadow-md hover:bg-[#588157]' style={{
                                display: "flex", alignItems: "center",
                                borderRadius: "10px 10px 0px 0px ", width: "30vw", backgroundColor: isTyping ? "#fff" : "#f5f3f4"
                            }}>
                                <Search style={{ width: "2vw", color: "black", alignItems: "center", marginLeft: "10px" }} />
                                <input className='hover:bg-[#588157]' placeholder='Search' style={{
                                    height: "3vw", marginLeft: "10px", color: "black", width: "20vw",
                                    backgroundColor: isTyping ? "#fff" : "#f5f3f4", border: "none", outline: "none"
                                }}
                                    onChange={handleInputChange} />
                            </div>
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </Grid >
        // <StyledAppBar position='static'>
        //     <Toolbar>
        //         <MenuIcon color='action' style={{ cursor: 'pointer' }} onClick={toggleDrawer} />
        //         <Link to="/contact"><img src={Contactlogo} style={{ marginLeft: 10, width: 40, height: 40 }} /></Link>
        //         <h3 style={{ color: '#adb5bd', marginLeft: 10, textSizeAdjust: 50 }}>Contact</h3>
        //         <SearchWrapper>
        //             <Search color="action" />
        //             <InputBase placeholder='Search ' />
        //             <Tune color="action" />
        //         </SearchWrapper>
        //     </Toolbar>
        // </StyledAppBar >
    )
}

export default Header

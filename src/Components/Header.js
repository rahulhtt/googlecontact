import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Grid, Tooltip } from '@mui/material';
import { Menu as MenuIcon, Search, } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Contactlogo from "../asstes/contacts.png"
import { Link } from 'react-router-dom';


const Header = ({ toggleDrawer }) => {
    const [isTyping, setIsTyping] = useState(false);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setIsTyping(inputValue.trim().length > 0); // Check if there is any input
    };
    return (
        <Grid container>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar elevation={0} position="static" sx={{
                    top: "0", zIndex: "2", backgroundColor: "#F9F9F9", minHeight: "4vw", minWidth: "100vw",
                    paddingTop: "10px", paddingRight: "30px"
                }}>
                    <Toolbar variant="dense">
                        <Grid item xs={2}>
                            <div className='flex items-center'>
                                <IconButton style={{ cursor: 'pointer' }} onClick={toggleDrawer} edge="start" color="inherit"
                                    aria-label="menu" sx={{ color: "#3C3C3C" }}>
                                    <Tooltip title="Menu" placement="bottom">
                                        <div aria-label="menu">
                                            <MenuIcon color='action' sx={{ width: "2vw" }} />
                                        </div>
                                    </Tooltip>
                                </IconButton>
                                <Link className='cursor-pointer' to="/contact"><img alt='' src={Contactlogo} style={{ width: "2vw", marginLeft: "0.1vw" }} /></Link>
                                <Link className='cursor-pointer' to="/contact">
                                    <Typography className='hover:underline cursor-pointer' variant="h6" component="div"
                                        sx={{ marginLeft: "1vw", fontSize: "1.2vw", color: "#3C3C3C" }}>
                                        Contacts
                                    </Typography>
                                </Link>
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
    )
}

export default Header

import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, Button } from "@mui/material"
import { useOutletContext } from "react-router-dom"
import { TextField } from '@mui/material';

const CreateContact = () => {
    const { openDrawer } = useOutletContext()
    return (
        <div className='p-4' style={openDrawer ? { marginLeft: 250, width: "100%" } : { width: '100%' }}>
            <div className='p-4' >
                <form>
                    <h1 className='ml-10 text-4xl'>Contact</h1>
                    <Box className="mt-10 flex lg:flex-col ">
                        <Box>
                            <PersonOutlineIcon className='mt-6' /> <TextField id="outlined-basic" margin='normal' label="First name" size='small' variant="outlined" />
                        </Box>
                        <Box>
                            <PersonOutlineIcon className='mt-6' /> <TextField margin='normal' id="outlined-basic" label="Last name" size='small' variant="outlined" />
                        </Box>
                        <Box>
                            <LocalPhoneIcon className='mt-6' /><TextField style={{ marginLeft: 2 }} margin='normal' id="outlined-basic" label="Phone Number" size='small' variant="outlined" />
                        </Box>
                    </Box>
                    <Button style={{ marginLeft: 20, marginTop: 10 }} variant="contained">Save</Button>
                </form>
            </div>
        </div>
    )
}

export default CreateContact

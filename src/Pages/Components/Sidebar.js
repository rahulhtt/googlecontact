import React, { useState } from 'react'
import { Drawer, styled } from "@mui/material";
import SidebarContent from './SidebarContent';

const StyledDrawer = styled(Drawer)({
    marginTop: 54
})


const Sidebar = ({ openDrawer }) => {


    return (
        <StyledDrawer
            anchor='left'
            open={openDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true,
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    width: 250,
                    borderRight: 'none',
                    background: '#EAF1FB',
                    marginTop: '64px',
                    height: 'calc(100vh - 64px)'
                },
            }}
        >
            <SidebarContent />

        </StyledDrawer>
    )
}

export default Sidebar

import React, { useState } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

import { Outlet } from 'react-router-dom'

const HomePage = () => {
    const [openDrawer, setOpenDrawer] = useState(true)

    const toggleDrawer = () => {
        setOpenDrawer(preState => !preState)
    }
    return (
        <div  >
            <Header toggleDrawer={toggleDrawer} />
            <Outlet context={{ openDrawer }} />
            <Sidebar openDrawer={openDrawer} />
        </div>
    )
}

export default HomePage

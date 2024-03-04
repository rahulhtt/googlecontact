import React, { useState } from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

const HomePage = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = () => {
        setOpenDrawer(preState => !preState)
    }
    return (
        <div >
            <Header toggleDrawer={toggleDrawer} />
            <Sidebar openDrawer={openDrawer} />
            <div className='rounded-lg'>Main</div>
        </div>
    )
}

export default HomePage

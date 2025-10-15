import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <div className='bg-[#9f2500] font-script'>
            <Navbar />
            <main className='pt-[100px] py-2'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout

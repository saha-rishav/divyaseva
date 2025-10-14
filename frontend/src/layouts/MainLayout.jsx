import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <div className='w-full bg-[#9f2500]'>
            <Navbar />
            <main className='pt-[90px] w-[90%] max-w-7xl mx-auto py-2'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout

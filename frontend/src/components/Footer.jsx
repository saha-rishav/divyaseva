import React from 'react'
import { images } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className=' bg-footer pt-10'>
        <section className='w-[90%] max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14'>
            {/* Left Block */}
            <div className='flex flex-col items-start'>
              <Link to='/'>
                <img src={images.logo} alt="Logo" className="h-[40px] md:h-13" />
              </Link>
              <p className='text-[13px] md:text-[17px] text-white pt-2'>At DivyaSeva, we see ourselves as more than just a service — we are your spiritual companion in every major milestone of life.</p>
            </div>
            {/* Middle Block */}
            <div className='flex items-start justify-baseline md:justify-center'>
              <h4 className=' text-primary'>Quick Links</h4>
            </div>
            {/* Right Block */}
            <div className='flex items-start justify-baseline md:justify-center'>
              <h4 className=' text-primary'>Socials</h4>
            </div>
          </div>
          <div className="text-center py-6  text-yellow-200">
            <p>© {new Date().getFullYear()} DivyaSeva | All Rights Reserved</p>
          </div>
        </section>
        {/* <p className="text-yellow-300 mt-2 bg-[#9f2500]">Contact: support@divyaseva.in</p> */}
      </footer>
    </>
  )
}

export default Footer
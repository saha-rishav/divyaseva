import React from 'react'
import { images, menuLinks } from '../assets/assets.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' flex justify-between items-center border-2 rounded-4xl px-7 py-4'>
            {/* Left Side */}
            <Link>
                <img src={images.logo} alt="Logo" />
            </Link>

            {/* Right Side */}
            <div className=' flex md:items-center gap-4 '>
                {menuLinks.map((link, index) => (
                    <Link key={index} to={link.path} className=' text-[#f9ab24]'>
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar
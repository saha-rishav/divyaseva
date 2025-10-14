import React, { useEffect, useState } from 'react';
import { images, menuLinks } from '../assets/assets.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300">
            <div className={`w-[90%] max-w-7xl mt-1.5 transition-all duration-300 py-3 flex justify-between items-center rounded-2xl
                ${isScrolled
                    ? 'bg-[#ee410d] border border-transparent shadow-md px-6'
                    : 'bg-transparent border border-transparent'
                }`}
            >
                {/* Left Side */}
                <Link to="/">
                    <img src={images.logo} alt="Logo" className="h-[45px] md:h-14" />
                </Link>

                {/* Right Side */}
                <div className="flex md:items-center gap-5">
                    {menuLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="font-semibold text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
// import React, { useEffect, useState } from 'react';
// import { images, menuLinks } from '../assets/assets.js';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-300">
//             <div className={`w-[90%] max-w-7xl mt-1.5 transition-all duration-300 py-3 flex justify-between items-center rounded-2xl
//                 ${isScrolled
//                     ? 'bg-[#cc3102] border border-transparent shadow-md px-6'
//                     : 'bg-transparent border border-transparent'
//                 }`}
//             >
//                 {/* Left Side */}
//                 <Link to="/">
//                     <img src={images.logo} alt="Logo" className="h-[45px] md:h-14" />
//                 </Link>

//                 {/* Right Side */}
//                 <div className="flex md:items-center gap-5">
//                     {menuLinks.map((link, index) => (
//                         <Link
//                             key={index}
//                             to={link.path}
//                             className="font-semibold text-primary"
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { images, menuLinks } from '../assets/assets.js';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // for hamburger icons

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change (optional)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <div
                className={`w-[90%] max-w-7xl mx-auto mt-1.5 flex justify-between items-center rounded-2xl py-3 transition-all duration-300
          ${isScrolled
                        ? 'bg-[#cc3102] border border-transparent shadow-md pe-4 ps-2 md:px-6'
                        : 'bg-transparent border border-transparent'
                    }`}
            >
                {/* Logo */}
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <img src={images.logo} alt="Logo" className="h-[45px] md:h-14" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {menuLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="font-semibold text-primary hover:text-yellow-200 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white text-2xl focus:outline-none"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden absolute top-[70px] left-0 w-full bg-[#ee410d] shadow-md transition-all duration-300 overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
            >
                <div className="flex flex-col items-center gap-6 py-6">
                    {menuLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="font-semibold text-white hover:text-yellow-300 transition text-lg"
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

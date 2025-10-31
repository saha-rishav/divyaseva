import React from 'react'
import { MdOutlineWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiSpeakFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const PanditCard = ({ name, experience, image, bgColor = 'bg-card', headingColor = 'text-secondary' }) => {
    return (
        <Link to='/pandit-details' className={`w-full text-center ${bgColor} p-2.5 md:p-4 rounded-lg transition-transform duration-200 cursor-pointer border-[3px] hover:border-heading border-transparent hover:-translate-y-2 shadow-xl`}>
            <div className='w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border-4 border-yellow-200 shadow-lg flex items-center justify-center'>
                <img
                    src={image}
                    alt="Pandit performing puja"
                    className=" w-full h-full object-cover"
                />
            </div>
            <h3 className={`text-[16px] md:text-lg lg:text-xl ${headingColor} font-semibold mt-4`}>{name}</h3>
            <div className=' flex justify-center items-center gap-3 my-3'>
                <p className='text-[12px] sm:text-lg leading-relaxed flex items-center gap-0.5'>
                    <FaLocationDot size={14} className='text-heading' />
                    Bengaluru
                </p>
                <p className='text-[12px] sm:text-lg leading-relaxed flex items-center gap-0.5'>
                    <MdOutlineWork size={14} className='text-heading' />
                    {experience}
                </p>
            </div>
            <div className='flex justify-center items-center gap-1 mb-2'>
                <RiSpeakFill size={18} className='text-secondary'/>
                <p className='inline-block bg-orange-100 text-orange-600 dark:bg-orange-300 text-xs font-semibold px-2 py-1 rounded-full truncate'>Hindi</p>
                <p className='inline-block bg-orange-100 text-orange-600 dark:bg-orange-300 text-xs font-semibold px-2 py-1 rounded-full truncate'>Bengali</p>
            </div>
            {/* <p className=' text-sm md:text-lg leading-relaxed'>{specialties}</p> */}
            {/* <button>Call</button> */}
        </Link>
    )
}

export default PanditCard
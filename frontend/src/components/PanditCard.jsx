import React from 'react'
import { MdOutlineWork } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const PanditCard = ({ name, experience, image, bgColor = 'bg-card', headingColor = 'text-secondary' }) => {
    return (
        <div className={`w-full text-center ${bgColor} p-2.5 md:p-4 rounded-lg transition-all duration-300`}>
            <div className='w-32 h-32 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border-4 border-yellow-200 shadow-lg flex items-center justify-center'>
                <img
                    src={image}
                    alt="Pandit performing puja"
                    className=" w-full h-full object-cover"
                />
            </div>
            <h3 className={`text-md md:text-lg lg:text-xl ${headingColor} font-semibold mt-4 mb-2`}>{name}</h3>
            <div className=' flex justify-center items-center gap-3'>
                <p className='text-sm md:text-lg leading-relaxed flex items-center gap-0.5'><FaLocationDot size={14}/>Bengaluru</p>
                <p className='text-sm md:text-lg leading-relaxed flex items-center gap-0.5'><MdOutlineWork size={14}/>{experience}</p>
            </div>
            {/* <p className=' text-sm md:text-lg leading-relaxed'>{specialties}</p> */}
            {/* <button>Call</button> */}
        </div>
    )
}

export default PanditCard
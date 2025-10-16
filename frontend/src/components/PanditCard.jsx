import React from 'react'

const PanditCard = ({ name, experience, image }) => {
    return (
        <div className='w-full text-center bg-card p-2.5 md:p-6 rounded-lg'>
            <img
                src={image}
                alt="Pandit performing puja"
                className="w-72 md:w-[400px] rounded-xl shadow-lg border-4 border-yellow-400"
            />
            <h3 className='text-md md:text-lg lg:text-xl text-secondary font-semibold mt-4 mb-2'>{name}</h3>
            <p className=' text-sm md:text-lg leading-relaxed'>{experience}</p>
            {/* <p className=' text-sm md:text-lg leading-relaxed'>{specialties}</p> */}
        </div>
    )
}

export default PanditCard
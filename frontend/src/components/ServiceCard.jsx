import React from 'react'

const ServiceCard = ({ title, description, image }) => {
    return (
        <div className='w-full text-center bg-card p-2.5 md:p-6 rounded-xl'>
            <img
                src={image}
                alt={title}
                className="w-72 md:w-[400px] rounded-xl shadow-lg border-4 border-yellow-400"
            />
            <h3 className='text-md md:text-lg lg:text-xl text-secondary font-bold mt-4 mb-2'>{title}</h3>
            <p className='text-sm md:text-lg leading-relaxed'>{description}</p>
        </div>
    )
}

export default ServiceCard
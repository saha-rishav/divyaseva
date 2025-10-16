import React from 'react'

const ServiceCard = ({ title, description, image }) => {
    return (
        <div className='w-full text-center bg-card p-6 rounded-lg'>
            <img
                src={image}
                alt={title}
                className="w-72 md:w-[400px] rounded-xl shadow-lg border-4 border-yellow-400"
            />
            <h3 className=' text-2xl text-secondary font-semibold mt-4 mb-2'>{title}</h3>
            <p className=' text-lg'>{description}</p>
        </div>
    )
}

export default ServiceCard
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, image }) => {
    return (
        <Link to="/service-details"
            className="group w-full text-center bg-card p-4 md:p-5 rounded-xl cursor-pointer transition-transform duration-400 hover:-translate-y-1.5 border-[3px] hover:border-primary border-transparent shadow-xl">

            <div className="overflow-hidden rounded-xl">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-36 rounded-xl shadow-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105 overflow-hidden object-contain"
                />
            </div>

            <h3 className="text-md md:text-lg lg:text-xl text-secondary font-bold mt-4 mb-2">{title}</h3>
            <p className="text-sm md:text-lg leading-relaxed">{description}</p>
        </Link>
    );
};

export default ServiceCard;

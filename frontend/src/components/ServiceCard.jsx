import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, image }) => {
    const navigate = useNavigate();

    return (
        <Link to="/puja-details"
            className="group w-full text-center bg-card p-4 md:p-5 rounded-xl cursor-pointer transition-transform duration-400 hover:-translate-y-1.5 border-[3px] hover:border-heading border-transparent shadow-xl">

            <div className="overflow-hidden rounded-xl">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-36 rounded-xl shadow-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105 overflow-hidden object-contain"
                />
            </div>

            <h3 className="text-md md:text-lg lg:text-xl text-secondary font-bold mt-4 mb-2">{title}</h3>
            <p className="text-sm md:text-lg leading-relaxed">{description}</p>
            <button className="w-full mt-2 bg-[#e97855] hover:bg-[#d8643e] cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200" onClick={() => navigate('/puja-details')}>
                    Book Now
                  </button>
        </Link>
    );
};

export default ServiceCard;

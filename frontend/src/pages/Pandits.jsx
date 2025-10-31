import React, { useEffect } from 'react'
import { panditProfiles } from '../assets/assets'
import PanditCard from '../components/PanditCard'
import { FaSearch } from "react-icons/fa";


const Pandits = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, scroll: 'smooth' })
    }, [])

    return (
        <div className="w-[90%] max-w-6xl mx-auto pt-[15px] md:pt-[40px] pb-[60px]">
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <h2 className='text-3xl md:text-5xl font-script text-primary font-semibold capitalize mb-3 md:mb-6'>Verified Pandits</h2>
                <div className="relative w-full h-[45px] md:max-w-sm">
                    <input
                        type="text"
                        placeholder="e.g., Name, Language"
                        className="w-full h-full bg-card rounded-lg ps-6 pe-12 py-2 outline-none  focus:bg-card"
                    />
                    <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary" size={22} />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-10">
                {panditProfiles.map((pandit) => (
                    <PanditCard
                        key={pandit.id}
                        name={pandit.name}
                        experience={pandit.experience}
                        image={pandit.image}
                        bgColor="bg-card"
                        headingColor="text-secondary"
                    />
                ))}
            </div>
        </div>

    )
}

export default Pandits
import React from 'react'
import { panditProfiles } from '../assets/assets'
import PanditCard from '../components/PanditCard'

const Pandits = () => {
    return (
        <div className="w-[90%] max-w-7xl mx-auto pt-[15px] md:pt-[40px] pb-[60px]">
            <div>
                <h2 className='text-3xl md:text-5xl font-script text-primary font-semibold capitalize mb-3 md:mb-6'>Verified Pandits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-10">
                {panditProfiles.map((pandit) => (
                    <PanditCard
                        key={pandit.id}
                        name={pandit.name}
                        experience={pandit.experience}
                        image={pandit.image}
                        bgColor="bg-counterCard"
                        headingColor="text-primary"
                    />
                ))}
            </div>
        </div>

    )
}

export default Pandits
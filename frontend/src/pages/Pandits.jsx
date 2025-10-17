import React from 'react'
import { panditProfiles } from '../assets/assets'
import PanditCard from '../components/PanditCard'

const Pandits = () => {
    return (
        <div className="w-[90%] max-w-7xl mx-auto pt-[40px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
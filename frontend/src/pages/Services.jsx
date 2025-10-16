import React from 'react'
import { pujaServices } from '../assets/assets'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <div className=' w-[90%] max-w-6xl mx-auto pt-[40px]'>
      <div className=' grid grid-cols-4 gap-4'>
        { pujaServices.map((service) => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
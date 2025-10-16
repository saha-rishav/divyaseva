import React from 'react'
import ServicePageCard from '../components/ServicePageCard'
// import { pujaServices } from '../assets/assets'
// import ServiceCard from '../components/ServiceCard'

const Services = () => {

  const cards = [
    { gradientFrom: "#FFA07A", gradientTo: "#f6622d", iconColor: "#f59e0b" },
    { gradientFrom: "#e2643c", gradientTo: "#FA8072", iconColor: "#3b82f6" },
    { gradientFrom: "#f23525", gradientTo: "#ec6d25", iconColor: "#3b82f6" },
    { gradientFrom: "#fed496", gradientTo: "#f66d58", iconColor: "#9333ea" },
  ];
  return (
    // <div className=' w-[90%] max-w-6xl mx-auto pt-[40px]'>
    //   <div className=' grid grid-cols-4 gap-4'>
    //     { pujaServices.map((service) => (
    //       <ServiceCard 
    //         key={service.id}
    //         title={service.title}
    //         description={service.description}
    //         image={service.image}
    //       />
    //     ))}
    //   </div>
    // </div>
    // <div className="w-[90%] max-w-7xl mx-auto pt-[40px] ">
    //   <div className=' grid grid-cols-2 md:grid-cols-4 gap-4'>
    //     {pujaServices.map((service) => (
    //       <ServicePageCard
    //         key={service.id}
    //         bgImage={service.image}
    //         trophyColor={service.trophyColor}
    //       />
    //     ))}
    //   </div>
    // </div>

    <div className=' w-[90%] max-w-7xl mx-auto pt-[40px]'>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <ServicePageCard key={index} {...card} />
        ))}
      </div>
    </div>

  )
}

export default Services
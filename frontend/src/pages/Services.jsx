// import React from 'react'
// import ServicePageCard from '../components/ServicePageCard'
// // import { pujaServices } from '../assets/assets'
// // import ServiceCard from '../components/ServiceCard'

// const Services = () => {

//   const cards = [
//     { gradientFrom: "#FFA07A", gradientTo: "#f6622d", iconColor: "#f59e0b" },
//     { gradientFrom: "#fd5c63", gradientTo: "#FA8072", iconColor: "#3b82f6" },
//     { gradientFrom: "#CD5C5C", gradientTo: "#ec6d25", iconColor: "#3b82f6" },
//     { gradientFrom: "#fed496", gradientTo: "#f66d58", iconColor: "#9333ea" },
//   ];
//   return (
//     <div className=' w-[90%] max-w-7xl mx-auto pt-[40px]'>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {cards.map((card, index) => (
//           <ServicePageCard key={index} {...card} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Services


// // <div className=' w-[90%] max-w-6xl mx-auto pt-[40px]'>
//     //   <div className=' grid grid-cols-4 gap-4'>
//     //     { pujaServices.map((service) => (
//     //       <ServiceCard 
//     //         key={service.id}
//     //         title={service.title}
//     //         description={service.description}
//     //         image={service.image}
//     //       />
//     //     ))}
//     //   </div>
//     // </div>
//     // <div className="w-[90%] max-w-7xl mx-auto pt-[40px] ">
//     //   <div className=' grid grid-cols-2 md:grid-cols-4 gap-4'>
//     //     {pujaServices.map((service) => (
//     //       <ServicePageCard
//     //         key={service.id}
//     //         bgImage={service.image}
//     //         trophyColor={service.trophyColor}
//     //       />
//     //     ))}
//     //   </div>
//     // </div>

import React, { useEffect } from "react";
import ServicePageCard from "../components/ServicePageCard";
import { pujaServices } from "../assets/assets"; // <-- import your data
import { FaSearch } from "react-icons/fa";

const Services = () => {
  const gradients = [
    { gradientFrom: "#FFA07A", gradientTo: "#f6622d" },
    { gradientFrom: "#fd5c63", gradientTo: "#FA8072" },
    { gradientFrom: "#CD5C5C", gradientTo: "#ec6d25" },
    { gradientFrom: "#E0115F", gradientTo: "#f66d58" },
  ];

  // Combine pujaServices with gradient colors (matching by index)
  const combinedData = pujaServices.map((service, index) => ({
    ...service,
    ...gradients[index % gradients.length], // reuse gradients cyclically if more services
  }));

  useEffect(() => {
    window.scrollTo({ top: 0, scroll: 'smooth' })
  }, [])

  return (
    <div className="w-[90%] max-w-7xl mx-auto pt-[15px] md:pt-[40px] pb-[60px]">
      <div>
        <h2 className='text-3xl md:text-5xl font-script text-primary font-semibold capitalize mb-3 md:mb-6'>Our Puja Seva List</h2>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-4">
          <div className='flex flex-row gap-2 overflow-x-auto pb-2 md:pb-0'>
            <button className="h-[45px] px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap cursor-pointer bg-card text-gray-700 hover:bg-gray-200">All</button>
            <button className="h-[45px] px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap cursor-pointer bg-card text-gray-700 hover:bg-gray-200">Fortune</button>
            <button className="h-[45px] px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap cursor-pointer bg-card text-gray-700 hover:bg-gray-200">Strength</button>
            <button className="h-[45px] px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap cursor-pointer bg-card text-gray-700 hover:bg-gray-200">Festival</button>
          </div>

          <div className="relative w-full h-[45px] md:max-w-sm">
            <input
              type="text"
              placeholder="e.g., Satyanarayan Katha"
              className="w-full h-full bg-card rounded-lg ps-6 pe-12 py-2 outline-none  focus:bg-[#fff3ef]"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary" size={22}/>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10">
        {combinedData.map((card) => (
          <ServicePageCard
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            gradientFrom={card.gradientFrom}
            gradientTo={card.gradientTo}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

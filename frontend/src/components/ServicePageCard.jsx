// import React from 'react'
// import { FaShareAlt } from "react-icons/fa";

// const ServicePageCard = ({ bgImage }) => {
//     return (
//         <div className="rounded-2xl shadow-lg text-center overflow-hidden bg-white">
//             {/* Top curved image */}
//             <div className="w-full h-48 overflow-hidden rounded-b-[45%]">
//                 <img
//                     src={bgImage}
//                     alt="Service"
//                     className="w-full h-full object-contain"
//                     loading="lazy"
//                 />
//             </div>

//             {/* Content */}
//             <div className="p-4">
//                 <h2 className="text-xl font-semibold text-gray-800">Congratulations!</h2>
//                 <p className="text-gray-500 text-sm mt-2 px-2">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod tincidunt ut laoreet.
//                 </p>

//                 {/* Button */}
//                 <button
//                     className="flex items-center justify-center gap-2 text-white px-6 py-2 rounded-full font-medium mx-auto mt-6"
//                     style={{
//                         background: `linear-gradient(135deg, #f59e0b, #d97706)`,
//                     }}
//                 >
//                     Share <FaShareAlt />
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default ServicePageCard

import React from "react";

const ServicePageCard = ({ gradientFrom, gradientTo, }) => {
    return (
        <div className="relative bg-card rounded-2xl shadow-lg  text-center overflow-hidden pb-5">
            {/* Top gradient background */}
            <div
                className="w-full h-26 flex justify-center items-center relative"
                style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`, }}>
                <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-gradient-to-tr from-white to-gray-100 shadow-xl flex items-center justify-center">
                    {/* Gradient Glow Ring */}
                    <div
                        className="absolute inset-0 rounded-full blur-md opacity-80"
                        style={{
                            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                            zIndex: -1,
                        }}
                    ></div>

                    {/* Dotted Border */}
                    <div
                        className="absolute inset-0 rounded-full border-[3px] border-dashed"
                        style={{
                            borderColor: gradientFrom,
                        }}
                    ></div>

                    {/* Inner Image Circle */}
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                        <img
                            src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
                            alt="Pandit performing puja"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mt-12 px-3">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Congratulations!</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>

                {/* Buttons */}
                <div className="flex flex-col items-center gap-3 mt-6">
                    <button
                        className="flex items-center justify-center gap-2 text-white px-8 py-2 rounded-full font-medium"
                        style={{
                            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                        }}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicePageCard;



// <div className="relative rounded-2xl shadow-lg p-6 w-72 text-center overflow-hidden">
//     {/* Curved top background */}
//     <div
//         className="absolute top-0 left-0 w-full h-1/2 rounded-b-[50%]"
//         style={{
//             background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
//         }}
//     ></div>

//     {/* Trophy Icon */}
//     <div className="relative z-10 mt-6 flex justify-center">
//         <div
//             className="p-4 rounded-full shadow-lg"
//             style={{
//                 backgroundColor: "#fff",
//             }}
//         >
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill={trophyColor}
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke={trophyColor}
//                 className="w-12 h-12"
//             >
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16.5 3h-9v3h-3v3a6 6 0 006 6v3H9v3h6v-3h-1.5v-3a6 6 0 006-6V6h-3V3z"
//                 />
//             </svg>
//         </div>
//     </div>

//     {/* Content */}
//     <div className="relative z-10 mt-6">
//         <h2 className="text-xl font-semibold text-gray-800">Congratulations!</h2>
//         <p className="text-gray-500 text-sm mt-2 px-2">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod
//             tincidunt ut laoreet.
//         </p>
//     </div>

//     {/* Button */}
//     <div className="relative z-10 mt-6">
//         <button
//             className="flex items-center justify-center gap-2 text-white px-6 py-2 rounded-full font-medium mx-auto"
//             style={{
//                 background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
//             }}
//         >
//             Share <FaShareAlt />
//         </button>
//     </div>
// </div>
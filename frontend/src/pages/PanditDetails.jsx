import React from "react";
import { RiMapPin2Fill, RiSpeakFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PanditDetails = () => {
  const navigate = useNavigate();
  // Example static data (replace with API data later)
  const pandit = {
    name: "Pandit Ramesh Sharma",
    image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
    location: "Varanasi, Uttar Pradesh",
    experience: "12 years",
    languages: ["Hindi", "Sanskrit", "English"],
    pujas: [
      {
        name: "Satyanarayan Katha",
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
      },
      {
        name: "Griha Pravesh Puja",
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
      },
      {
        name: "Wedding Puja",
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
      },
      {
        name: "Navagraha Shanti",
        image: "https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg",
      },
    ],
  };

  return (
    <div className="w-[90%] max-w-7xl mx-auto pt-[30px] pb-16">
      <button className="text-sm md:text-lg text-primary mb-4 p-2 cursor-pointer hover:bg-card rounded-2xl hover:font-semibold hover:text-secondary" onClick={()=> navigate('/our-pandits')}>
        ← Back to Pandits
      </button>

      {/* Two-column layout with wider right side */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 items-start">
        {/* LEFT — Pandit Profile */}
        <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col items-center text-center mt-[45px]">
          <img
            src={pandit.image}
            alt={pandit.name}
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-[#e97855]"
          />
          <h2 className="text-2xl font-semibold text-heading mb-2">
            {pandit.name}
          </h2>

          <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
            <RiMapPin2Fill className="text-[#e97855]" />
            <span>{pandit.location}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
            <FaUserTie className="text-[#e97855]" />
            <span>{pandit.experience} experience</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
            <RiSpeakFill className="text-[#e97855]" size={18} />
            {pandit.languages.map((lang, index) => (
              <p
                key={index}
                className="bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-200 
                           text-xs font-semibold px-2 py-1 rounded-full"
              >
                {lang}
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT — Puja Cards (Wider Section) */}
        <div>
          <h2 className="text-2xl font-semibold text-heading mb-4">
            Types of Puja's Offered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pandit.pujas.map((puja, index) => (
              <div
                key={index}
                className="bg-card border rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={puja.image}
                  alt={puja.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {puja.name}
                  </h3>
                  <button className="bg-[#e97855] hover:bg-[#d8643e] cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200" onClick={() => navigate('/puja-details')}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanditDetails;

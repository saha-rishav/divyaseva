import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../assets/assets";

const ServiceDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, scroll: 'smooth' })
  }, [])

  return (
    <>
      <section>
        <div className="w-[90%] max-w-7xl mx-auto pt-[40px] pb-[30px]">
          {/* Back Button */}
          <button onClick={() => navigate('/our-pujas')} className="text-primary font-medium hover:underline mb-6">
            ← Back to Pujas
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start pt-4">
            <img
              src={images.janmasthami}
              alt="Puja"
              className="w-full lg:w-[500px] h-[300px] sm:h-[350px] md:h-[450px] object-contain"
            />
            <div className="w-full">
              <div className="">
                <h2 className="text-3xl md:text-5xl font-script text-primary font-semibold capitalize mb-3 md:mb-6">
                  Ganesh Puja
                </h2>
                <p className="text-md md:text-lg mb-6 text-yellow-100 leading-relaxed">
                  Ganesh Puja is performed to remove obstacles and bring good fortune. Lord Ganesha, known as the remover of obstacles, is worshipped before
                  starting any new venture or important work. This puja brings peace, prosperity, and success.
                </p>
              </div>
              <div className="mt-10">
                <h3 className="text-3xl font-semibold text-primary mb-6 text-left">
                  Steps to Perform
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {["Prana Pratishtha", "Pavitrikaran", "Achman", "Deepak Pujan"].map(
                    (step, i) => (
                      <div
                        key={i}
                        className="relative bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl py-[15px] px-[10px] md:p-5 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                      >
                        {/* Step Number Badge */}
                        <span className="absolute -top-3 left-4 bg-white text-orange-600 font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                          {i + 1}
                        </span>

                        {/* Decorative Circle */}
                        <div className="absolute right-2 bottom-2 w-10 h-10 bg-white/20 rounded-full blur-sm"></div>

                        <div className="flex flex-col items-center justify-center h-full">
                          <p className="text-lg font-semibold text-white mb-2">{step}</p>
                          <span className="text-sm opacity-80 italic">Ritual {i + 1}</span>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <button>See All</button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="w-[90%] max-w-7xl mx-auto pt-[40px] pb-[60px]">
          <h3 className="font-semibold text-3xl text-secondary">Available Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3">
            
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Shubharambh Package</h3>
            <p className="text-gray-600 mb-3">Includes 1 Pandit + 45 Samagri</p>
            <ul className="text-sm text-gray-500 list-disc pl-5">
              <li>Duration: 2 Hours</li>
              <li>Tradition: North Indian</li>
              <li>Location: Bengaluru</li>
            </ul>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <p className="text-3xl font-bold text-primary mb-2">₹5002</p>
            <button className="bg-primary text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-700 transition">
              Book Now
            </button>
          </div>
        </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;

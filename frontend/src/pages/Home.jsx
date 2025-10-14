import React from 'react'

const Home = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-16 ">
        <div className="w-[90%]">
          <h1 className="text-4xl lg:text-7xl font-script text-heading font-semibold capitalize  mb-6">
            Book Trusted Pandits for All Your Puja Needs
          </h1>
          <p className="text-xl mb-6 text-yellow-100 leading-relaxed">
            Hassle-free online booking for all pujas — Griha Pravesh, Satyanarayan Puja,
            Wedding rituals, and more. Get authentic Vedic Pandits at your doorstep.
          </p>
          <button className="bg-yellow-400 text-[#7b2c00] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300">
            Book Now
          </button>
        </div>

        <div className="mt-10 md:mt-0 flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
            alt="Pandit performing puja"
            className="w-72 md:w-[400px] rounded-xl shadow-lg border-4 border-yellow-400"
          />
        </div>
      </section>
    </>
  )
}

export default Home;
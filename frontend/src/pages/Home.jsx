import React from 'react'

const Home = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 w-[90%] max-w-7xl mx-auto items-center gap-6 py-16 ">
        <div className="w-[90%]">
          <h1 className="text-4xl lg:text-7xl text-heading font-semibold capitalize  mb-6">
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

      <section className="grid grid-cols-1 md:grid-cols-2 bg-background px-[120px]  items-center gap-6 py-16 ">
        <div className="mt-10 md:mt-0 flex justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
            alt="Pandit performing puja"
            className="w-72 md:w-[400px] rounded-xl shadow-lg border-4 border-yellow-400"
          />
        </div>
        <div className="w-[90%]">
          <h1 className="text-4xl lg:text-5xl font-script text-secondary font-semibold capitalize  mb-6">
            About Us
          </h1>
          <p className="text-xl mb-6  leading-relaxed">
            At DivyaSeva, we make it easy to connect with authentic Vedic Pandits for every important occasion in your life — from Griha Pravesh to Wedding Puja and beyond. Our mission is to help you perform sacred rituals with devotion, guidance, and peace of mind.
          </p>
          <button className="bg-yellow-400 text-[#7b2c00] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300">
            See More
          </button>
        </div>
      </section>

      <section className="px-[120px] bg-background gap-6 py-10">
        <div className=' flex justify-between items-center'>
          <h1 className='text-secondary text-5xl font-bold text-center mb-6'>Our Services</h1>
          <button className="bg-yellow-400 text-[#7b2c00] flex justify-center items-center font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300">
            View All
          </button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-2'>
          <div className='w-full text-center bg-card p-6 rounded-lg'>
            <img
              src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
              alt="Pandit performing puja"
              className="w-72 md:w-[400px] rounded-xl shadow-lg border-4 border-yellow-400"
            />
            <h3 className=' text-2xl text-secondary font-semibold mt-4 mb-2'>Griha Pravesh Puja</h3>
            <p className=' text-lg'>Auspecious beginning for your new home</p>
          </div>
          <div className='w-full text-center bg-card p-6 rounded-lg'>
            <img
              src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
              alt="Pandit performing puja"
              className="w-72 md:w-[400px] rounded-xl shadow-lg border-4 border-yellow-400"
            />
            <h3 className=' text-2xl text-secondary font-semibold mt-4 mb-2'>Satyanarayan Katha</h3>
            <p className=' text-lg'>For peace, properity and blessings</p>
          </div>
          <div className='w-full text-center bg-card p-6 rounded-lg'>
            <img
              src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
              alt="Pandit performing puja"
              className="w-72 md:w-[400px] rounded-xl shadow-lg border-4 border-yellow-400"
            />
            <h3 className=' text-2xl text-secondary font-semibold mt-4 mb-2'>Wedding Puja</h3>
            <p className=' text-lg'>Auspecious beginning for your new home</p>
          </div>
          <div className='w-full text-center bg-card p-6 rounded-lg'>
            <img
              src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
              alt="Pandit performing puja"
              className="w-72 md:w-[400px] rounded-xl shadow-lg border-4 border-yellow-400"
            />
            <h3 className=' text-2xl text-secondary font-semibold mt-4 mb-2'>Mundan Ceremony</h3>
            <p className=' text-lg'>Auspecious beginning for your new home</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
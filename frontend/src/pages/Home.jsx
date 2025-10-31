import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { images, panditProfiles, pujaServices } from '../assets/assets';
import ServiceCard from '../components/ServiceCard';
import PanditCard from '../components/PanditCard';

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }, [])

  return (
    <>
      {/* Hero Section */}
      <section className='relative'>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] max-w-7xl mx-auto items-center gap-0 md:gap-6 pt-7 md:pt-2 pb-[70px] ">
          <div className="w-[95%]">
            <h1 className="text-4xl md:text-7xl text-heading font-semibold capitalize mb-4 md:mb-6">
              Book Trusted Pandits for All Your Puja Needs
            </h1>
            <p className="text-md md:text-xl mb-0 md:mb-6 text-yellow-100 leading-relaxed">
              Hassle-free online booking for all pujas — Griha Pravesh, Satyanarayan Puja,
              Wedding rituals, and more. Get authentic Vedic Pandits at your doorstep.
            </p>
            {/* <button className="bg-yellow-400 text-[#7b2c00] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300">
              Book Now
            </button> */}
          </div>
          <div className="mt-3 md:mt-0 flex justify-center items-center">
            <img
              // src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
              src={images.Hero}
              alt="Pandit performing puja"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className=' md:flex absolute bottom-[-300px] md:bottom-[-85px] left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl mx-auto border border-primary backdrop-filter backdrop-blur-md bg-opacity-20 rounded-2xl shadow-lg px-6 py-10  flex-col md:flex-row items-center justify-between gap-4'>
          <div className="flex flex-col w-full md:w-1/3">
            <label className="font-semibold text-[#9f2500] md:text-primary mb-2.5">Select Puja *</label>
            <input
              type="text"
              placeholder="e.g., Satyanarayan Katha"
              className="border border-[#9f2500] rounded-lg px-3 py-2 outline-none focus:ring-1 focus:[#e97855]"
            />
          </div>

          <div className="flex flex-col w-full py-3 md:py-0 md:w-1/3">
            <label className="font-semibold text-[#9f2500] md:text-primary mb-2.5">Puja Tradition *</label>
            <input
              type="text"
              placeholder="e.g., Bengali, South Indian, Hindi"
              className="border border-[#9f2500] rounded-lg px-3 py-2 outline-none focus:ring-1 focus:[#e97855]"
            />
          </div>

          <div className="flex flex-col items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <label className="font-semibold text-[#9f2500] md:text-primary">Need Puja Samagri?</label>
              <input
                type="checkbox"
                className="toggle-checkbox accent-yellow-400 w-5 h-5"
              />
            </div>
            <button
              className="bg-yellow-400 text-[#7b2c00] font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-all w-full md:w-auto"
            >
              Continue
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className=" bg-background py-16">
        <div className='w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center pt-[300px] md:pt-[100px] gap-6 '>
          <div className="mt-3 md:mt-0 flex justify-center items-center">
            <img
              // src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
              src={images.Pandit}
              alt="Pandit performing puja"
              className="w-72 md:w-[450px] rounded-xl"
            />
          </div>
          <div className="w-[90%]">
            <h2 className="text-3xl md:text-5xl font-script text-secondary font-semibold capitalize mb-3 md:mb-6">
              About Us
            </h2>
            <p className="text-md md:text-xl mb-6  leading-relaxed">
              At DivyaSeva, we make it easy to connect with authentic Vedic Pandits for every important occasion in your life — from Griha Pravesh to Wedding Puja and beyond. Our mission is to help you perform sacred rituals with devotion, guidance, and peace of mind.
            </p>
            <button className="bg-button text-[#7b2c00] font-semibold px-4.5 py-2.5 rounded-lg hover:bg-yellow-300 cursor-pointer" onClick={() => navigate('/about-us')}>
              See More
            </button>
          </div>
        </div>
      </section>

      {/* Book Pandit Section */}
      <section className=' py-16'>
        <div className=' w-[90%] max-w-4xl mx-auto '>
          <div>
            <h1 className=' text-yellow-100 text-5xl md:text-7xl font-bold text-center capitalize'>Your Trusted <span className=' text-heading'>Pandit</span> Service in <span className=' text-orange-400'>Bangalore</span></h1>

            <p className='text-base md:text-lg lg:text-xl text-slate-200 font-medium text-center mt-6 leading-relaxed'>Experience the <b className=' text-yellow-100'>divine</b> with our highly <b className=' text-yellow-100'>skilled Pandits</b> in Bangalore. Whether you’re looking for <b className=' text-yellow-100'>Hindi, North Indian, Bengali, Marathi, Odia, Kannada, Tamil,</b> or <b className=' text-yellow-100'>Telugu Pandits,</b> we ensure every ritual is performed with devotion and authenticity — from <b className=' text-yellow-100'>Griha Pravesh</b> to <b className=' text-yellow-100'>Satyanarayan Puja</b> and marriage ceremonies. Book your Pandit <b className=' text-yellow-100'>online</b> and bring <b className=' text-yellow-100'>sacred blessings</b> home effortlessly.</p>
          </div>

          <div className='max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8'>
            <div className="flex flex-col justify-center items-center rounded-lg bg-counterCard p-[20px] transition-transform duration-200 hover:-translate-y-2 shadow-xl">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 p-2 border-yellow-400 bg-card">
                <img
                  src={images.puja}
                  alt="Puja"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-primary mt-4">50+</h1>
              <p className="text-lg text-yellow-100">Pujas</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg bg-counterCard p-[20px] transition-transform duration-200 hover:-translate-y-2 shadow-xl">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 p-2 border-yellow-400 bg-card">
                <img
                  src={images.city}
                  alt="Pandit performing puja"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-primary mt-4">10</h1>
              <p className="text-lg text-yellow-100">Cities</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg bg-counterCard p-[20px] transition-transform duration-200 hover:-translate-y-2 shadow-xl">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 p-2 border-yellow-400 bg-card">
                <img
                  src={images.pandit}
                  alt="Pandit performing puja"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-primary mt-4">15+</h1>
              <p className="text-lg text-yellow-100">Pandits</p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg bg-counterCard p-[20px] transition-transform duration-200 hover:-translate-y-2 shadow-xl">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg border-4 p-2 border-yellow-400 bg-card">
                <img
                  src={images.handshake}
                  alt="Pandit performing puja"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-primary mt-4">100+</h1>
              <p className="text-lg text-yellow-100">Pujas Done</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pujas Section */}
      <section className="bg-background py-10">
        <div className='w-[90%] max-w-7xl mx-auto pt-4 md:pt-[40px]'>
          <h2 className='text-secondary text-3xl md:text-5xl font-bold text-center mb-6 md:mb-9'>Popular Pujas</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-2'>
            {
              pujaServices.map((puja) => (
                <ServiceCard
                  key={puja.id}
                  title={puja.title}
                  description={puja.description}
                  image={puja.image}
                />
              ))
            }
          </div>

          <div className=' w-full flex justify-center items-center mt-6'>
            <button className=" text-[#7b2c00] flex items-center font-semibold px-4.5 py-2.5 rounded-lg bg-button hover:bg-yellow-300 cursor-pointer" onClick={() => navigate('/our-services')}>
              View All &nbsp;
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </section>

      {/* Chat with Pandits */}
      <section className=' bg-background py-16'>
        <div className=' w-[90%] max-w-7xl mx-auto'>
          <h2 className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent text-center mb-3'>Connect Instantly with Verified Pandits</h2>
          <p className=' text-center text-md lg:text-lg'>Ask your questions directly to our Pandit Ji — completely free.</p>

          <div className=' grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-9'>
            {panditProfiles.map((pandit) => (
              <PanditCard
                key={pandit.id}
                name={pandit.name}
                experience={pandit.experience}
                specialties={pandit.specialties}
                image={pandit.image}
              />
            ))}
          </div>

          <div className=' w-full flex justify-center items-center mt-6'>
            <button className=" text-[#7b2c00] flex items-center font-semibold px-4.5 py-2.5 rounded-lg bg-button hover:bg-yellow-300 cursor-pointer" onClick={() => navigate('/our-pandits')}>
              Show All &nbsp;
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </section>

      {/* Why choose divyaSeva */}
      <section className=' py-16'>
        <div className=' w-[90%] max-w-7xl mx-auto'>
          <h2 className=' text-3xl md:text-5xl text-center font-semibold text-heading'>Why DivyaSeva ?</h2>
          <div className=' max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-9'>
            <div className='flex flex-shrink-0 lg:flex-row flex-col items-center md:h-[220px] gap-2 bg-counterCard rounded-lg shadow-lg p-2.5 transition-transform duration-200 hover:-translate-y-2'>
              <img
                src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
                alt="Pandit performing puja"
                className="object-contain m-2 w-[40%]"
              />
              <div>
                <h3 className=' text-primary text-lg md:text-xl font-bold'>Seek Guidance from Pandit Ji — Free of Cost</h3>
                <p className=' text-white font-medium'>Use our free chat feature to instantly connect with experienced Pandits. Get accurate guidance on auspicious timings, rituals, and ceremonies — all from a trusted source.</p>
              </div>
            </div>
            <div className='flex flex-shrink-0 lg:flex-row flex-col items-center md:h-[220px] gap-2 bg-counterCard rounded-lg shadow-lg p-2.5 transition-transform duration-200 hover:-translate-y-2'>
              <img
                src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
                alt="Pandit performing puja"
                className="object-contain m-2 w-[40%]"
              />
              <div>
                <h3 className=' text-primary text-lg md:text-xl font-bold'>Schedule Your Puja with Verified Pandits</h3>
                <p className=' text-white font-medium'>No more running from temple to temple — simply find and book verified Pandits online in just a few clicks, without leaving your home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className=' bg-background py-16'></section> */}
    </>
  )
}

export default Home;


{/* <div className='w-full text-center bg-card p-6 rounded-lg'>
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
            </div> */}
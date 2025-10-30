import React, { useEffect } from 'react'
import { images } from '../assets/assets'

const About = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <>
      {/* About Us */}
      <section className='pt-2 md:pt-14 pb-10'>
        <div className='w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 '>
          <div className="w-[100%] order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-script text-primary font-semibold capitalize mb-3 md:mb-6">
              About Us
            </h2>
            <p className="text-md md:text-lg mb-6 text-yellow-100 leading-relaxed">
              At DivyaSeva, we make it easy to connect with authentic and experienced Vedic Pandits for every important occasion in your life — from Griha Pravesh to Wedding Puja, Satyanarayan Katha, Mundan, Annaprashan, Navagraha Shanti, and much more. We understand that in today’s fast-paced world, finding a knowledgeable and trustworthy Pandit who can guide you through each ritual with devotion and precision can often be a challenge. That’s why DivyaSeva was created — to bring the purity, tradition, and serenity of Vedic rituals closer to your home and heart.
            </p>
            {/* <button className="bg-button text-[#7b2c00] font-semibold px-4.5 py-2.5 rounded-lg hover:bg-yellow-300 cursor-pointer" onClick={() => navigate('/about-us')}>
                  See More
                </button> */}
          </div>
          <div className="mt-3 md:mt-0 flex justify-center items-center order-1 md:order-2">
            <img
              // src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
              src={images.About}
              alt="Pandit performing puja"
              className="w-[90%] h-auto object-cover"
            />
          </div>

        </div>
      </section>

      {/* Our Story */}
      <section className='bg-background py-0.5 md:py-2.5'>
        <div className='w-[90%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-2.5 md:gap-6'>
          <div className="mt-3 md:mt-0 flex justify-center items-center">
            <img
              src={images.Story}
              alt="Story"
              className="w-full h-auto md:h-[500px] object-contain"
            />
          </div>
          <div className="w-[95%]">
            <h2 className="text-3xl md:text-5xl font-script text-secondary font-semibold capitalize mb-3 md:mb-6">
              Our Story
            </h2>
            <p className="text-md md:text-lg mb-6 leading-relaxed">
              DivyaSeva was found with the vision to bridge the gap between ancient traditions and modern convenience. We understand the challenges of finding experienced Pandits who can perform rituals with authenticity and devotion. Our platform ensure that every Puja, Yagna, or ceremony is conducted with the right mantras, rituals and respect for tradition - all from the comfort of your home.
            </p>
            {/* <button className="bg-button text-[#7b2c00] font-semibold px-4.5 py-2.5 rounded-lg hover:bg-yellow-300 cursor-pointer" onClick={() => navigate('/about-us')}>
                  See More
                </button> */}
          </div>


        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-16'>
        <div className=' w-[90%] max-w-7xl mx-auto'>
          <h2 className=' text-3xl md:text-5xl text-center font-semibold text-heading'>Our Mission & Vision</h2>
          <div className=' max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-9'>
            <div className='flex flex-shrink-0 lg:flex-row flex-col items-center md:items-start md:h-[220px] gap-2 bg-counterCard rounded-lg shadow-lg p-6 md:p-2.5 transition-transform duration-200 hover:-translate-y-2'>
              <img
                src={images.Mission}
                alt="Pandit performing puja"
                className="object-contain m-2 h-[100%] w-full md:w-[50%]"
              />
              <div className='py-0 pb-3 md:pb-0 md:py-8'>
                <h3 className=' text-primary text-lg md:text-xl font-bold'>Mission</h3>
                <p className=' text-white font-medium'>To make spiritual services accessible, transparent, and reliable for every devotee seeking divine blessings</p>
              </div>
            </div>
            <div className='flex flex-shrink-0 lg:flex-row flex-col items-center md:items-start md:h-[220px] gap-2 bg-counterCard rounded-lg shadow-lg p-6 md:p-2.5 transition-transform duration-200 hover:-translate-y-2'>
              <img
                src={images.Vision}
                alt="Pandit performing puja"
                className="object-contain m-2 h-[100%] w-full md:w-[50%]"
              />
              <div className='py-0 pb-3 md:pb-0 md:py-8'>
                <h3 className=' text-primary text-lg md:text-xl font-bold'>Vision</h3>
                <p className=' text-white font-medium'>To become Indias most trusted platform for authentic Vedic rituals - preserying our culture heritage while embracing digital ease.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
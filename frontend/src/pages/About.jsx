import React from 'react'
import { images } from '../assets/assets'

const About = () => {
  return (
    <div className="w-[90%] max-w-6xl mx-auto pt-[40px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      <div className="w-[90%]">
        <h2 className="text-3xl md:text-5xl font-script text-primary font-semibold capitalize mb-3 md:mb-6">
          About Us
        </h2>
        <p className="text-md md:text-xl mb-6 text-yellow-100 leading-relaxed">
          At DivyaSeva, we make it easy to connect with authentic Vedic Pandits for every important occasion in your life — from Griha Pravesh to Wedding Puja and beyond. Our mission is to help you perform sacred rituals with devotion, guidance, and peace of mind.
        </p>
      </div>
      <div className="mt-3 md:mt-0 flex justify-center items-center">
        <img
          // src="https://img.freepik.com/free-vector/puja-illustration_1284-53279.jpg"
          src={images.Pandit}
          alt="Pandit performing puja"
          className="w-72 md:w-[450px] rounded-xl"
        />
      </div>
    </div>
  )
}

export default About
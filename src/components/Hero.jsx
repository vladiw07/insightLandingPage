import React from 'react';
import heroImage from '../assets/images/HeroImage.png';

function Hero() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 pt-32">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="w-full text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Understand Your Data.<br />Grow Your Business.
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Powerful analytics tools to gain deep insights into your business performance.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center lg:justify-end sm:mb-20">
          <img
            src={heroImage}
            alt="Analytics chart"
            className="max-w-md w-full"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;

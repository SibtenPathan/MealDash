import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mt-16 bg-[#FFF8E1]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#5B3A29]">
              Experience Culinary Delights
              <br className="hidden lg:inline-block" /> Delivered Fresh to You
            </h1>
            <p className="mb-8 leading-relaxed text-gray-800">
              Discover a world of flavors with our carefully curated menu. From
              organic ingredients to gourmet meals, every dish is crafted to
              perfection. Indulge in a dining experience like no other!
            </p>
            <div className="flex justify-center">
              <Link to="/menu" className="inline-flex text-white bg-[#D53F30] border-0 py-2 px-6 focus:outline-none hover:bg-[#EA738D] rounded text-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                Order Now
              </Link>
              <Link to="/menu" className="ml-4 inline-flex text-[#5B3A29] bg-[#FFF8E1] border-0 py-2 px-6 focus:outline-none hover:bg-[#D53F30] hover:text-white rounded text-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                Browse Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

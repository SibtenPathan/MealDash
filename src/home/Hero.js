import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://th.bing.com/th/id/OIP.cFRGIk0x0oUF2UVGPp0fYgHaFk?w=647&h=486&rs=1&pid=ImgDetMain"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Experience Culinary Delights
              <br className="hidden lg:inline-block" /> Delivered Fresh to You
            </h1>
            <p className="mb-8 leading-relaxed">
              Discover a world of flavors with our carefully curated menu. From
              organic ingredients to gourmet meals, every dish is crafted to
              perfection. Indulge in a dining experience like no other!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                Order Now
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg transition-transform transform hover:scale-105 hover:shadow-lg">
                Browse Menu
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

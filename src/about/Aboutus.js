import React from 'react';
import Navbar from '../base/Navbar';
import Footer from '../base/Footer';

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#FFF8E1] text-gray-600 body-font mt-20"> {/* Cream background */}
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Delicious food"
            src="https://dummyimage.com/720x600"
          /> */}
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#D53F30]"> {/* Rich Red title */}
              Welcome to MealDash
            </h1>
            <p className="mb-8 leading-relaxed text-[#5B3A29]"> {/* Dark Brown text */}
              At MealDash, we are committed to delivering fresh, delicious meals right to your doorstep. Our platform connects you with local restaurants and food vendors, ensuring that you have access to a variety of cuisines at your fingertips.
            </p>
            <p className="mb-8 leading-relaxed text-[#5B3A29]"> {/* Dark Brown text */}
              Whether you're craving a quick snack or a full-course meal, MealDash has you covered. Our user-friendly interface makes ordering easy, and our reliable delivery team ensures that your food arrives hot and fresh.
            </p>
            <div className="flex justify-center">
              <a href='/menu'><button className="inline-flex text-white bg-[#D53F30] border-0 py-2 px-6 focus:outline-none hover:bg-[#B53628] rounded text-lg"> {/* Rich Red button */}
                Explore Our Menu
              </button></a>
              <a href='/contact'><button className="ml-4 inline-flex text-[#5B3A29] bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"> {/* Dark Brown text */}
                Contact Us
              </button></a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Aboutus;

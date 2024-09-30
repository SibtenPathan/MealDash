import React from 'react';

const Testimonial = () => {
  return (
    <div>
      <section className="body-font" style={{ backgroundColor: '#FFF8E1' }}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl p-6 bg-white rounded-lg">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.unsplash.com/photo-1524019494804-8c1be7b5ba4b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <p className="leading-relaxed text-[#5B3A29]">
                  "The meal I ordered was absolutely delightful! Every bite was bursting with flavor. Highly recommend the main course!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#D53F30] mt-6 mb-4"></span>
                <h2 className="text-[#5B3A29] font-medium title-font tracking-wider text-sm">SOPHIA TURNER</h2>
                <p className="text-gray-500">Food Blogger</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl p-6 bg-white rounded-lg">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.unsplash.com/photo-1692090383808-84faed4b35a5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <p className="leading-relaxed text-[#5B3A29]">
                  "I was blown away by the quality of the dishes! The desserts are to die for. Can't wait to order again!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#D53F30] mt-6 mb-4"></span>
                <h2 className="text-[#5B3A29] font-medium title-font tracking-wider text-sm">LIAM JAMES</h2>
                <p className="text-gray-500">Restaurant Critic</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center transition-transform transform hover:scale-105 shadow-lg hover:shadow-xl p-6 bg-white rounded-lg">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.unsplash.com/photo-1525097195208-d368f7a2cf75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <p className="leading-relaxed text-[#5B3A29]">
                  "An amazing dining experience! The service was impeccable, and the flavors were exquisite. Highly recommend!"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#D53F30] mt-6 mb-4"></span>
                <h2 className="text-[#5B3A29] font-medium title-font tracking-wider text-sm">EMMA WATSON</h2>
                <p className="text-gray-500">Travel Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

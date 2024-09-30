import React from 'react';

const Category = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#FFF8E1]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#5B3A29]">
                Explore Our Culinary Categories
              </h1>
              <div className="h-1 w-20 bg-[#D53F30] rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-700">
              Discover a variety of dishes crafted with the finest ingredients. From starters to desserts, we have something for everyone!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[
              {
                title: 'Starter',
                description: 'A delicious blend of ripe avocados topped with chili flakes and served on artisanal bread.',
                imgSrc: 'https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                title: 'Main Course',
                description: 'Tender chicken marinated in herbs, grilled to perfection, and served with seasonal vegetables.',
                imgSrc: 'https://plus.unsplash.com/premium_photo-1699034727032-a54a380b03f6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                title: 'Desserts',
                description: 'A rich chocolate cake layered with creamy ganache, perfect for chocolate lovers.',
                imgSrc: 'https://images.unsplash.com/photo-1643312767944-d9d6d72798b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                title: 'Beverages',
                description: 'Freshly squeezed lemonade with a hint of mint, perfect for cooling down on a hot day.',
                imgSrc: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
            ].map((item, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.imgSrc}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#D53F30] font-medium title-font mb-4">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed text-base text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;

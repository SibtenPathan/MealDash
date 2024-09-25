import React from 'react';

const Cards = ({ menuItems }) => {

  const handleAddToCart = (item) => {
    // Retrieve existing cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cart.push(item);

    // Store the updated cart back in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show a confirmation message (you can customize this)
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-20 ml-28">
      {menuItems.map((item, index) => (
        <div key={index} className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={item.image} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            <p className="text-lg font-bold">${item.price}</p>
            <div className="card-actions justify-end">
              <button 
                className="btn btn-primary"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

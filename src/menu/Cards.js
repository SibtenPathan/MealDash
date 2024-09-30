import React, { useState } from 'react';

const Cards = ({ menuItems }) => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleAddToCart = (item) => {
    // Retrieve existing cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Use 'name' as the unique identifier to check if the item is already in the cart
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

    if (existingItemIndex > -1) {
      // If item exists, increase the quantity
      cart[existingItemIndex].quantity += 1;
    } else {
      // If item does not exist, add it to the cart with quantity 1
      cart.push({ ...item, quantity: 1 });
    }

    // Store the updated cart back in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show a custom confirmation message
    setAlertMessage(`${item.name} has been added to your cart!`);

    // Automatically hide the alert after 2 seconds
    setTimeout(() => {
      setAlertMessage('');
    }, 2000);
  };

  return (
    <div>
      {/* Custom alert box */}
      {alertMessage && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-md z-50">
          {alertMessage}
        </div>
      )}

      {/* Cards displaying menu items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-20 ml-28">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className="card card-compact bg-cream text-dark-brown w-96 shadow-xl border border-dark-brown transition-transform duration-200 ease-in-out transform hover:scale-105"
          >
            <figure>
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold">{item.name}</h2>
              <p className="text-sm">{item.description}</p>
              <p className="text-lg font-bold text-rich-red">₹{item.price}</p>
              <div className="card-actions justify-end">
                <button 
                  className="btn bg-rich-red text-black hover:bg-dark-brown hover:text-white transition-transform duration-200 ease-in-out transform hover:scale-105"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

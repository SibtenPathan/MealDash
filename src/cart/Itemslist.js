import React, { useEffect, useState } from 'react';
import Summary from './Summary';

const Itemslist = () => {
    const [cartItems, setCartItems] = useState([]);

    // Fetch cart items from local storage
    useEffect(() => {
        const storedItems = localStorage.getItem('cart');
        if (storedItems) {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);

    // Update cart in local storage
    const updateLocalStorage = (items) => {
        localStorage.setItem('cart', JSON.stringify(items));
    };

    // Increment item quantity
    const handleIncrement = (index) => {
        const updatedItems = [...cartItems];
        updatedItems[index].quantity = (updatedItems[index].quantity || 1) + 1;
        setCartItems(updatedItems);
        updateLocalStorage(updatedItems);
    };

    // Decrement item quantity
    const handleDecrement = (index) => {
        const updatedItems = [...cartItems];
        if (updatedItems[index].quantity > 1) {
            updatedItems[index].quantity -= 1;
        } else {
            handleRemoveItem(index);
        }
        setCartItems(updatedItems);
        updateLocalStorage(updatedItems);
    };

    // Remove item from cart
    const handleRemoveItem = (index) => {
        const updatedItems = [...cartItems];
        updatedItems.splice(index, 1);
        setCartItems(updatedItems);
        updateLocalStorage(updatedItems);
    };

    return (
        <div>
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        Shopping Cart
                    </h2>

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {cartItems.length > 0 ? (
                                    cartItems.map((item, index) => (
                                        <div key={item._id || index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                <a href="#" className="shrink-0 md:order-1">
                                                    <img className="h-20 w-20 dark:hidden" src={item.image} alt={item.name} />
                                                    <img className="hidden h-20 w-20 dark:block" src={item.image} alt={item.name} />
                                                </a>

                                                <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                    {/* Decrement button */}
                                                    <button onClick={() => handleDecrement(index)} className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">-</button>
                                                    
                                                    <input type="text" id="counter-input" className="w-10 mx-2 text-center border-0 bg-transparent text-sm font-medium text-gray-900 dark:text-white" value={item.quantity || 1} readOnly />

                                                    {/* Increment button */}
                                                    <button onClick={() => handleIncrement(index)} className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">+</button>

                                                    {/* Remove item button */}
                                                    <button onClick={() => handleRemoveItem(index)} className="ml-4 px-2 py-1 bg-red-600 text-white rounded">Remove</button>
                                                </div>

                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">${item.price.toFixed(2)}</p>
                                                </div>

                                                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                    <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                                                        {item.name}
                                                    </a>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                                )}
                            </div>
                        </div>
                        {/* Pass cartItems to Summary */}
                        <Summary cartItems={cartItems} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Itemslist;

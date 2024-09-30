import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from '../auth/Login';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Calculate total items in the cart from localStorage
    const calculateCartItemCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
      setCartItemCount(totalItems);
    };

    calculateCartItemCount();

    // Check for login status
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token on logout
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar bg-[#D53F30] fixed top-0 left-0 right-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#FFF8E1] rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li className='text-[#5B3A29] hover:bg-[#D53F30] text-base text-lg transition-all duration-300 px-4 py-2'>
              <Link to="/menu">Menu</Link>
            </li>
            <li className='text-[#5B3A29] hover:bg-[#D53F30] text-base text-lg transition-all duration-300 px-4 py-2'>
              <Link to="/about">About</Link>
            </li>
            <li className='text-[#5B3A29] hover:bg-[#D53F30] text-base text-lg transition-all duration-300 px-4 py-2'>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-[#FFF8E1] text-xl hover:bg-[#EA738D] transition-all duration-300">
          MealDash
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='text-white hover:bg-[#D53F30] text-base text-lg transition-all duration-300 px-4 py-2'>
            <Link to="/menu">Menu</Link>
          </li>
          <li className='text-white hover:bg-[#D53F30] text-base text-lg transition-all duration-300 px-4 py-2'>
            <Link to="/about">About</Link>
          </li>
          <li className='text-white hover:bg-[#D53F30] text-base text-lg transition-all duration-300 px-4 py-2'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {isLoggedIn ? (
          <div className="flex items-center">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://via.placeholder.com/150" alt="Profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#FFF8E1] rounded-box w-52"
              >
                {/* <li><Link className='text-[#5B3A29]' to="/profile">Profile</Link></li> */}
                <li><Link className='text-[#5B3A29]' onClick={handleLogout} to="/">Logout</Link></li>
              </ul>
            </div>

            {/* Cart Button */}
            <Link to="/cart" className="btn btn-ghost text-white hover:bg-[#EA738D] ml-4 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h1.4l.4 1.2L6 11h12l1-2H7.4M5 18h14a2 2 0 002-2H5a2 2 0 00-2 2z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        ) : (
          <>
            <button
              className="btn bg-[#D53F30] hover:bg-[#EA738D] text-[#FFF8E1]"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >
              Login
            </button>
            <Login onLogin={() => setIsLoggedIn(true)} />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

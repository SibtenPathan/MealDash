// Checkout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../base/Navbar';
import Footer from '../base/Footer';
import Form from './Form';

const Checkout = () => {
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;

  return (
    <div>
      <Navbar />
      <Form totalAmount={totalAmount} />
      <Footer />
    </div>
  );
};

export default Checkout;

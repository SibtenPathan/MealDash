// Summary.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Summary = ({ cartItems }) => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  const calculateGST = (amount) => {
    return (amount * 0.18); // 18% GST
  };

  const totalAmount = calculateTotal();
  const gstAmount = calculateGST(totalAmount);
  const finalAmount = totalAmount + gstAmount;

  const handleCheckout = () => {
    navigate('/checkout', { state: { totalAmount: finalAmount } });
  };

  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <p className="text-xl font-semibold">Order Summary</p>

        <div className="space-y-4">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal">Original Price</dt>
            <dd className="text-base font-medium">${totalAmount.toFixed(2)}</dd>
          </dl>
          
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal">GST (18%)</dt>
            <dd className="text-base font-medium">${gstAmount.toFixed(2)}</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4 border-t pt-2">
            <dt className="text-base font-bold">Total</dt>
            <dd className="text-base font-bold">${finalAmount.toFixed(2)}</dd>
          </dl>
        </div>

        <button
          onClick={handleCheckout}
          className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-dark"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Summary;

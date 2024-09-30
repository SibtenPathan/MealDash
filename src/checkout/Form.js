import React from 'react';

const Form = ({ totalAmount }) => {
  // Function to handle the complete purchase action
  const handleCompletePurchase = () => {
    // Show an alert to the user
    window.alert('Order Purchased Successfully!');
    
    // Redirect to the home page (adjust the path as needed)
    window.location.href = '/';
  };

  return (
    <div>
      <div className="font-[sans-serif] bg-[#FFF8E1] mt-24"> {/* Cream background */}
        <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
          <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0 bg-white shadow-md"> {/* White card background */}
            <h2 className="text-2xl font-bold text-[#D53F30]">Complete your order</h2> {/* Rich Red text */}
            <p className="text-lg font-medium mt-4 text-[#5B3A29]">Total Amount: ₹{totalAmount.toFixed(2)}</p> {/* Dark Brown text */}
            <form className="mt-8">
              <div>
                <h3 className="text-base text-[#D53F30] mb-4">Personal Details</h3> {/* Rich Red for section titles */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="First Name"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-[#5B3A29] w-full text-sm rounded-md focus:outline-[#D53F30]" /> {/* Dark Brown text */}
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-[#5B3A29] w-full text-sm rounded-md focus:outline-[#D53F30]" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-[#5B3A29] w-full text-sm rounded-md focus:outline-[#D53F30]" />
                  </div>
                  <div>
                    <input type="number" placeholder="Phone No."
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-[#5B3A29] w-full text-sm rounded-md focus:outline-[#D53F30]" />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-base text-[#D53F30] mb-4">Shipping Address</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="Address Line"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-[#5B3A29] w-full text-sm rounded-md focus:outline-[#D53F30]" />
                  </div>
                  <div>
                    <input type="text" placeholder="City"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-[#5B3A29] w-full text-sm rounded-md focus:outline-[#D53F30]" />
                  </div>
                  <div>
                    <input type="text" placeholder="State"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-[#5B3A29] w-full text-sm rounded-md focus:outline-[#D53F30]" />
                  </div>
                  <div>
                    <input type="text" placeholder="Zip Code"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-[#5B3A29] w-full text-sm rounded-md focus:outline-[#D53F30]" />
                  </div>
                </div>

                <div className="flex gap-4 max-md:flex-col mt-8">
                  <button type="button" className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-[#5B3A29] text-[#5B3A29] max-md:order-1">Cancel</button> {/* Dark Brown button */}
                  <button 
                    type="button" 
                    className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-[#D53F30] hover:bg-[#B53628] text-white"
                    onClick={handleCompletePurchase} // Call the purchase handler on click
                  >
                    Complete Purchase
                  </button> {/* Rich Red button */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

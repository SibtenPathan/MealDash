import React, { useState } from 'react';
import Navbar from '../base/Navbar';
import Footer from '../base/Footer';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);  // Store token for future requests
            alert('Signup successful');
        } else {
            alert(data.msg);
        }
    };

    return (
        <div>
            <Navbar />
            <section className="bg-cream dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-darkbrown md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-darkbrown dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-cream border border-darkbrown text-darkbrown text-sm rounded-lg focus:ring-richred focus:border-richred block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-richred dark:focus:border-richred transition-transform duration-200 ease-in-out hover:shadow-md hover:scale-105"
                                        placeholder="name@company.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-darkbrown dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="bg-cream border border-darkbrown text-darkbrown text-sm rounded-lg focus:ring-richred focus:border-richred block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-richred dark:focus:border-richred transition-transform duration-200 ease-in-out hover:shadow-md hover:scale-105"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-darkbrown dark:text-white">Confirm password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirm-password"
                                        className="bg-cream border border-darkbrown text-darkbrown text-sm rounded-lg focus:ring-richred focus:border-richred block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-richred dark:focus:border-richred transition-transform duration-200 ease-in-out hover:shadow-md hover:scale-105"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full dark:text-white bg-richred border border-darkbrown hover:bg-darkbrown focus:ring-4 focus:outline-none focus:ring-richred font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-richred dark:border-darkbrown dark:hover:bg-darkbrown dark:focus:ring-richred transition-transform duration-200 ease-in-out transform hover:scale-105"
                                >
                                    Create an account
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Signup;

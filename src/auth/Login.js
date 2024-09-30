import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok && data.token) {
                localStorage.setItem('token', data.token);

                // Admin login check
                if (formData.email === 'admin@admin.com' && formData.password === 'admin') {
                    alert('Admin login successful');
                    navigate('/admin'); // Redirect to /admin if credentials are admin
                } else {
                    alert('Login successful');
                    onLogin(); // Trigger login state update in Navbar
                    navigate('/'); // Redirect to home for normal users
                }
            } else {
                setError(data.msg || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-cream text-dark-brown">
                    <div className="w-full bg-white rounded-lg shadow border border-dark-brown md:mt-0 sm:max-w-md xl:p-0 dark:bg-dark-brown">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-dark-brown md:text-2xl">
                                Login Account here
                            </h1>
                            {error && <p className="text-red-500">{error}</p>}
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-dark-brown">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-cream border border-dark-brown text-dark-brown text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="name@company.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-dark-brown">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-cream border border-dark-brown text-dark-brown text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full text-dark-brown bg-rich-red hover:bg-dark-brown focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    {loading ? 'Loading...' : 'Login'}
                                </button>
                                <p className="text-sm font-light text-dark-brown">
                                    Don't have an account? <a href="/signup" className="font-medium text-rich-red hover:underline">create here</a>
                                </p>
                            </form>
                            <button className="btn btn-outline" onClick={() => document.getElementById('my_modal_3').close()}>Close</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Login;

import React from 'react';
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer({ mode }) {
    return (
        <footer className={`${mode ? "bg-gray-900 text-gray-300" : "bg-black text-gray-300"}`}>
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative -top-10 px-4">
                {/* Logo */}
                <div className="bg-yellow-400 text-white p-4 rounded-md shadow-md flex items-center justify-center w-full md:w-auto">
                    <div className="text-center">
                        <h1 className="text-xl font-bold">ADVISOR</h1>
                        <p className="text-sm font-light">BIGGER . BETTER</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className={`${mode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"} rounded-lg shadow-lg w-full md:flex-1 px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm`}>
                    <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="mt-1 text-yellow-500" />
                        <p>74 Norava Street 542B,<br />Great North Town 51 MT</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <FaPhoneAlt className="mt-1 text-yellow-500" />
                        <p>(+44) 123 456 789<br />(+1) 523-567-987</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <FaEnvelope className="mt-1 text-yellow-500" />
                        <p>addyour@email<br />info@yourdomain</p>
                    </div>
                </div>
            </div>

            <div className='w-9/12 m-auto'>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase">About us</h4>
                        <p className="mb-4">We have 25+ years experience. Helping you overcome business challenges.</p>
                        <div className="flex gap-4">
                            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
                            <FaXTwitter className="hover:text-yellow-400 cursor-pointer" />
                            <FaYoutube className="hover:text-yellow-400 cursor-pointer" />
                            <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase">Services</h4>
                        <ul className="space-y-2">
                            <li>Strategic Planning</li>
                            <li>Market Analysis</li>
                            <li>Finance Planning</li>
                            <li>Investment Idea</li>
                            <li>Digital Solutions</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase">Recent News</h4>
                        <ul className="space-y-3">
                            <li className='flex'>
                                <img src="https://img.freepik.com/free-photo/young-person-intership_23-2149315638.jpg" alt="" className='w-16 object-cover mr-3 py-1 rounded-lg' />
                                <div>
                                    <p className="text-white font-medium">People saying about business.</p>
                                    <span className="text-sm text-gray-400">8 Jan, 2024</span>
                                </div>
                            </li>
                            <li className='flex'>
                                <img src="https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg" alt="" className='w-16 object-cover mr-3 py-1 rounded-lg' />
                                <div>
                                    <p className="text-white font-medium">Providing all types of business</p>
                                    <span className="text-sm text-gray-400">3 Jan, 2024</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase">Newsletter</h4>
                        <p className="mb-4">Subscribe to our newsletter for discounts and more.</p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Subscribe with us"
                                className="px-4 py-2 rounded bg-gray-800 text-sm text-white w-full"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-500 text-sm text-white px-4 py-2 rounded"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 py-6 text-center text-sm">
                <p>© 2025 Advisor is Powered by <span className="text-yellow-400">CKT Themes</span></p>
            </div>
        </footer>
    );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlaneDeparture } from "react-icons/fa";
const Footer = () => {
    return (
        <footer  className="mt-10 footer bg-black text-white py-16">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className='flex text-center  items-center gap-2'>
                            <FaPlaneDeparture className='text-3xl text-[#63AB45]' />
                            <h3 className="text-3xl font-bold mb-4">ExploreAsia</h3>
                        </div>
                        <p className="text-gray-300">Embark on a journey to explore the wonders of Asia with us.</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><NavLink to="/" className="text-gray-300 hover:text-white">Home</NavLink></li>
                            <li><NavLink to="/about" className="text-gray-300 hover:text-white">About</NavLink></li>
                            <li><NavLink to="/contact" className="text-gray-300 hover:text-white">Contact</NavLink></li>
                            <li><NavLink to="/destinations" className="text-gray-300 hover:text-white">Destinations</NavLink></li>
                            <li><NavLink to="/packages" className="text-gray-300 hover:text-white">Packages</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Connect With Us</h3>
                        <ul>
                            <li>Email: <a href="mailto:info@exploreasia.com" className="text-gray-300 hover:text-white">info@exploreasia.com</a></li>
                            <li>Phone: <span className="text-gray-300">+1234567890</span></li>
                            <li>Address: <span className="text-gray-300">123 Main St, City, Country</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
                        <ul className="flex gap-4">
                            <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-8 pt-4 text-center">
                    <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} ExploreAsia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

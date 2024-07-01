import React, { useContext, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Providers/AuthProvider';
const ContactPage = () => {
    const { loading } = useContext(AuthContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const notify = () => toast("Thank you. We'll get back to you soon.");
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        notify()
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Helmet>
                <title>Contact Us</title>
            </Helmet>


            {loading ? <div className="flex justify-center items-center "> <span className="loading text-orange-400 loading-bars loading-lg"></span>  </div> : <>
                <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-gray-500 mr-4" />
                            <p>123 Street, City, Country</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhone className="text-gray-500 mr-4" />
                            <p>+123 456 7890</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-gray-500 mr-4" />
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Your message"
                                    value={message}
                                    onChange={handleMessageChange}
                                    rows={4}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-[#63AB45] text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-600" >Send Message</button>
                        </form>
                    </div>
                    <ToastContainer />

                </div>

            </>}



        </div>
    );
};

export default ContactPage;